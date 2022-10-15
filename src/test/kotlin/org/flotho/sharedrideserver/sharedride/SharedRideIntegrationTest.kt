package org.flotho.sharedrideserver.sharedride

import com.google.maps.model.DirectionsResult
import org.bson.types.ObjectId
import org.flotho.sharedrideserver.AbstractIntegrationTest
import org.flotho.sharedrideserver.direction.DirectionService
import org.flotho.sharedrideserver.user.User
import org.flotho.sharedrideserver.user.UserDto
import org.flotho.sharedrideserver.user.UserRepository
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.http.*

class SharedRideIntegrationTest @Autowired constructor(
    userRepository: UserRepository,
    restTemplate: TestRestTemplate,
    val sharedRideRepository: SharedRideRepository,
    @MockBean
    val directionService: DirectionService
) : AbstractIntegrationTest(userRepository, restTemplate) {

    override val routePath = "/sharedride/"
    private val userToAdd = "userToAdd"
    private val userToAddPwd = "pwd"

    private fun saveUserToAdd() = userRepository.save(User(name = userToAdd, password = userToAddPwd))

    private fun createSharedRide(headers: HttpHeaders): ObjectId {
        val sharedRideResponse = requestCreateSharedRide(headers)
        val sharedRideUrl = sharedRideResponse.headers["location"]!![0]
        val sharedRideId = ObjectId(sharedRideUrl.split(routePath)[1])
        assertDoesNotThrow {
            sharedRideRepository.findById(sharedRideId)
        }
        return sharedRideId
    }

    private fun requestCreateSharedRide(headers: HttpHeaders): ResponseEntity<Void> {
        `when`(directionService.requestDirection(listOf())).thenReturn(DirectionsResult())
        return restTemplate.exchange(
            getBaseUrl() + "create",
            HttpMethod.POST,
            HttpEntity(listOf<String>(), headers),
            Void::class.java
        )
    }

    @Test
    fun `should create shared ride`() {
        saveTestUser()
        val headers = login()

        val response = requestCreateSharedRide(headers)

        assertEquals(HttpStatus.CREATED, response.statusCode)
        assertTrue(response.headers["location"]!![0].contains("/sharedride/"))
    }

    @Test
    fun `should get shared ride`() {
        saveTestUser()
        val headers = login()
        val sharedRideId = createSharedRide(headers)

        val response = restTemplate.exchange(
            getBaseUrl() + sharedRideId,
            HttpMethod.GET,
            HttpEntity(null, headers),
            SharedRide::class.java
        )

        assertEquals(HttpStatus.OK, response.statusCode)
        assertTrue(response.body!!.usersAndLocations.contains(username))
    }

    @Test
    fun `should add new user to the shared ride`() {
        saveTestUser()
        saveUserToAdd()
        val testUserHeaders = login()
        val sharedRideId = createSharedRide(testUserHeaders)
        val userToAddHeaders = login(UserDto(userToAdd, userToAddPwd))

        val response = restTemplate.exchange(
            getBaseUrl() + sharedRideId,
            HttpMethod.GET,
            HttpEntity(null, userToAddHeaders),
            SharedRide::class.java
        )

        assertEquals(HttpStatus.OK, response.statusCode)
        assertTrue(response.body!!.usersAndLocations.contains(username))
        assertTrue(response.body!!.usersAndLocations.contains(userToAdd))
    }

    @Test
    fun `should delete shared ride`() {
        saveTestUser()
        val headers = login()
        val sharedRideId = createSharedRide(headers)

        val response = restTemplate.exchange(
            getBaseUrl() + sharedRideId,
            HttpMethod.DELETE,
            HttpEntity(null, headers),
            Void::class.java
        )

        assertEquals(HttpStatus.ACCEPTED, response.statusCode)
        assertFalse(sharedRideRepository.findById(sharedRideId).isPresent)
    }
}