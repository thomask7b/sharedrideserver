package org.flotho.sharedrideserver.sharedride

import com.fasterxml.jackson.databind.ObjectMapper
import org.awaitility.Awaitility.await
import org.bson.types.ObjectId
import org.flotho.sharedrideserver.AbstractIntegrationTest
import org.flotho.sharedrideserver.location.Location
import org.flotho.sharedrideserver.location.UserLocationDto
import org.flotho.sharedrideserver.user.UserRepository
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertNull
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.BeforeEach
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
import org.springframework.web.socket.sockjs.client.SockJsClient
import org.springframework.web.socket.sockjs.client.Transport
import org.springframework.web.socket.sockjs.client.WebSocketTransport
import java.lang.reflect.Type
import java.util.concurrent.ArrayBlockingQueue
import java.util.concurrent.BlockingQueue
import java.util.concurrent.TimeUnit

class SharedRideWebSocketIntegrationTest @Autowired constructor(
    userRepository: UserRepository,
    restTemplate: TestRestTemplate,
    val objectMapper: ObjectMapper
) : AbstractIntegrationTest(userRepository, restTemplate) {

    override val routePath = "/sharedride-ws-endpoint"
    private val subscribePath = "/sharedride-ws/locations"
    private val sendPath = "/app/location"

    private lateinit var webSocketStompClient: WebSocketStompClient
    private lateinit var session: StompSession

    @BeforeAll
    fun init() {
        webSocketStompClient = WebSocketStompClient(
            SockJsClient(
                listOf<Transport>(WebSocketTransport(StandardWebSocketClient()))
            )
        )
        webSocketStompClient.messageConverter = StringMessageConverter()
    }

    @BeforeEach
    fun setUpWebSocketTest() {
        saveTestUser()
        val headers = WebSocketHttpHeaders()
        headers.add("Cookie", login()["Cookie"]?.get(0))
        session = webSocketStompClient
            .connect(
                getBaseUrl().replace("http", "ws"), headers,
                object : StompSessionHandlerAdapter() {})[1, TimeUnit.SECONDS]
    }

    @Test
    fun `should receive location`() {
        val blockingQueue: BlockingQueue<String> = ArrayBlockingQueue(1)
        session.subscribe(subscribePath, stompFrameHandler(blockingQueue))
        val userLocationDto = UserLocationDto(ObjectId.get().toHexString(), username, Location(10.0, 11.0))

        session.send(sendPath, objectMapper.writeValueAsString(userLocationDto))

        await()
            .atMost(1, TimeUnit.SECONDS)
            .untilAsserted {
                assertEquals(
                    userLocationDto,
                    objectMapper.readValue(blockingQueue.poll(), UserLocationDto::class.java)
                )
            }
    }

    @Test
    fun `should not be able to send location for other users`() {
        val blockingQueue: BlockingQueue<String> = ArrayBlockingQueue(1)
        session.subscribe(subscribePath, stompFrameHandler(blockingQueue))

        session.send(
            sendPath,
            objectMapper.writeValueAsString(UserLocationDto(username = "otherUser", location = Location(10.0, 11.0)))
        )

        await()
            .atMost(1, TimeUnit.SECONDS)
            .untilAsserted {
                assertNull(blockingQueue.poll())
            }
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