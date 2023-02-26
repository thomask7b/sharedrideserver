package org.flotho.sharedrideserver.sharedride

import com.fasterxml.jackson.databind.ObjectMapper
import org.awaitility.Awaitility.await
import org.bson.types.ObjectId
import org.flotho.sharedrideserver.AbstractIntegrationTest
import org.flotho.sharedrideserver.FIRST_USERNAME
import org.flotho.sharedrideserver.PASSWORD
import org.flotho.sharedrideserver.SECOND_USERNAME
import org.flotho.sharedrideserver.direction.model.DirectionsData
import org.flotho.sharedrideserver.location.Location
import org.flotho.sharedrideserver.location.UserLocationDto
import org.flotho.sharedrideserver.user.UserDto
import org.flotho.sharedrideserver.user.UserRepository
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertNull
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.messaging.converter.StringMessageConverter
import org.springframework.messaging.simp.stomp.StompFrameHandler
import org.springframework.messaging.simp.stomp.StompHeaders
import org.springframework.messaging.simp.stomp.StompSession
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter
import org.springframework.web.socket.WebSocketHttpHeaders
import org.springframework.web.socket.client.standard.StandardWebSocketClient
import org.springframework.web.socket.messaging.WebSocketStompClient
import java.lang.reflect.Type
import java.util.concurrent.ArrayBlockingQueue
import java.util.concurrent.BlockingQueue
import java.util.concurrent.TimeUnit
import javax.websocket.ContainerProvider

class SharedRideWebSocketIntegrationTest @Autowired constructor(
    userRepository: UserRepository,
    restTemplate: TestRestTemplate,
    val objectMapper: ObjectMapper,
    val sharedRideRepository: SharedRideRepository,
) : AbstractIntegrationTest(userRepository, restTemplate) {

    override val routePath = "/sharedride-ws-endpoint"
    private val subscribePath = "/user/sharedride-ws/locations"
    private val sendPath = "/app/location"

    private lateinit var webSocketStompClient: WebSocketStompClient
    private lateinit var emitSession: StompSession

    private val sharedRide: SharedRide = SharedRide(
        ObjectId.get(),
        mutableMapOf(Pair(FIRST_USERNAME, null), Pair(SECOND_USERNAME, null)),
        DirectionsData(listOf(), listOf())
    )

    private fun createUsersAndSharedRide() {
        saveFirstUser()
        saveSecondUser()
        sharedRideRepository.save(sharedRide)
    }

    @BeforeAll
    fun init() {
        webSocketStompClient = WebSocketStompClient(
            StandardWebSocketClient(
                ContainerProvider.getWebSocketContainer()
            )
        )
        webSocketStompClient.messageConverter = StringMessageConverter()
    }

    @BeforeAll
    fun beforeEach() {
        createUsersAndSharedRide()
        emitSession = connectClient(UserDto(FIRST_USERNAME, PASSWORD))
    }

    @AfterAll
    fun afterEach() {
        emitSession.disconnect()
        deleteUsers()
        sharedRideRepository.deleteAll()
    }

    private fun connectClient(user: UserDto): StompSession {
        val headers = WebSocketHttpHeaders()
        headers.add("Cookie", login(user)["Cookie"]?.get(0))
        return webSocketStompClient
            .connect(
                getBaseUrl().replace("http", "ws"), headers,
                object : StompSessionHandlerAdapter() {})[1, TimeUnit.SECONDS]
    }

    @Test
    fun `should receive location`() {
        val blockingQueue: BlockingQueue<String> = ArrayBlockingQueue(1)
        val receiveSession = connectClient(UserDto(SECOND_USERNAME, PASSWORD))
        receiveSession.subscribe(subscribePath, stompFrameHandler(blockingQueue))

        val userLocationDto = UserLocationDto(sharedRide.id.toHexString(), FIRST_USERNAME, Location(10.0, 11.0))
        emitSession.send(sendPath, objectMapper.writeValueAsString(userLocationDto))

        await()
            .atMost(1, TimeUnit.SECONDS)
            .untilAsserted {
                assertEquals(
                    userLocationDto,
                    objectMapper.readValue(blockingQueue.poll(), UserLocationDto::class.java)
                )
            }
        receiveSession.disconnect()
    }

    @Test
    fun `should not be able to send location for other users`() {
        val blockingQueue: BlockingQueue<String> = ArrayBlockingQueue(1)
        val receiveSession = connectClient(UserDto(SECOND_USERNAME, PASSWORD))
        receiveSession.subscribe(subscribePath, stompFrameHandler(blockingQueue))

        emitSession.send(
            sendPath,
            objectMapper.writeValueAsString(
                UserLocationDto(
                    username = SECOND_USERNAME,
                    location = Location(10.0, 11.0)
                )
            )
        )

        await()
            .atMost(1, TimeUnit.SECONDS)
            .untilAsserted {
                assertNull(blockingQueue.poll())
            }
        receiveSession.disconnect()
    }

    @Test
    fun `should not be able to receive location if user is not in shared ride`() {
        val blockingQueue: BlockingQueue<String> = ArrayBlockingQueue(1)
        val randomUserSession = connectClient(UserDto(SECOND_USERNAME, PASSWORD))
        randomUserSession.subscribe(subscribePath, stompFrameHandler(blockingQueue))

        emitSession.send(
            sendPath,
            objectMapper.writeValueAsString(UserLocationDto(username = FIRST_USERNAME, location = Location(10.0, 11.0)))
        )

        await()
            .atMost(1, TimeUnit.SECONDS)
            .untilAsserted {
                assertNull(blockingQueue.poll())
            }
        randomUserSession.disconnect()
    }

    private fun stompFrameHandler(blockingQueue: BlockingQueue<String>) = object : StompFrameHandler {
        override fun getPayloadType(headers: StompHeaders): Type {
            return String::class.java
        }

        override fun handleFrame(headers: StompHeaders, payload: Any?) {
            blockingQueue.add(payload as String)
        }
    }
}