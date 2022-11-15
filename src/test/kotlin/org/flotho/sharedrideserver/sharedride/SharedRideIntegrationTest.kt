package org.flotho.sharedrideserver.sharedride

import org.bson.types.ObjectId
import org.flotho.sharedrideserver.AbstractIntegrationTest
import org.flotho.sharedrideserver.FIRST_USERNAME
import org.flotho.sharedrideserver.PASSWORD
import org.flotho.sharedrideserver.direction.DirectionService
import org.flotho.sharedrideserver.direction.model.DirectionsData
import org.flotho.sharedrideserver.user.UserDto
import org.flotho.sharedrideserver.user.UserRepository
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
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
        `when`(directionService.requestDirection(listOf())).thenReturn(DirectionsData(listOf(), listOf()))
        return restTemplate.exchange(
            getBaseUrl() + "create",
            HttpMethod.POST,
            HttpEntity(listOf<String>(), headers),
            Void::class.java
        )
    }

    @BeforeEach
    fun setUp() {
        deleteUsers()
    }

    @Test
    fun `should create shared ride`() {
        saveFirstUser()
        val headers = login()

        val response = requestCreateSharedRide(headers)

        assertEquals(HttpStatus.CREATED, response.statusCode)
        assertTrue(response.headers["location"]!![0].contains("/sharedride/"))
    }

    @Test
    fun `should get shared ride`() {
        saveFirstUser()
        val headers = login()
        val sharedRideId = createSharedRide(headers)

        val response = restTemplate.exchange(
            getBaseUrl() + sharedRideId,
            HttpMethod.GET,
            HttpEntity(null, headers),
            SharedRide::class.java
        )

        assertEquals(HttpStatus.OK, response.statusCode)
        assertTrue(response.body!!.usersAndLocations.contains(FIRST_USERNAME))
    }

    @Test
    fun `should add new user to the shared ride`() {
        saveFirstUser()
        saveSecondUser()
        val testUserHeaders = login()
        val sharedRideId = createSharedRide(testUserHeaders)
        val userToAddHeaders = login(UserDto(FIRST_USERNAME, PASSWORD))

        val response = restTemplate.exchange(
            getBaseUrl() + sharedRideId,
            HttpMethod.GET,
            HttpEntity(null, userToAddHeaders),
            SharedRide::class.java
        )

        assertEquals(HttpStatus.OK, response.statusCode)
        assertTrue(response.body!!.usersAndLocations.contains(FIRST_USERNAME))
        assertTrue(response.body!!.usersAndLocations.contains(FIRST_USERNAME))
    }

    @Test
    fun `should delete shared ride`() {
        saveFirstUser()
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