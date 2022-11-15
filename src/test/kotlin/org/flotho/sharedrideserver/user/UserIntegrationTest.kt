package org.flotho.sharedrideserver.user

import org.flotho.sharedrideserver.AbstractIntegrationTest
import org.flotho.sharedrideserver.FIRST_USERNAME
import org.flotho.sharedrideserver.PASSWORD
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.dao.EmptyResultDataAccessException
import org.springframework.http.HttpEntity
import org.springframework.http.HttpMethod
import org.springframework.http.HttpStatus

class UserIntegrationTest @Autowired constructor(
    userRepository: UserRepository,
    restTemplate: TestRestTemplate,
) : AbstractIntegrationTest(userRepository, restTemplate) {

    override val routePath = "/users/"

    @BeforeEach
    fun setUp() {
        deleteUsers()
    }

    @Test
    fun `should create user`() {
        val user = UserDto(FIRST_USERNAME, PASSWORD)

        val response = restTemplate.postForEntity(
            getBaseUrl() + "create",
            user,
            Void::class.java
        )

        assertEquals(HttpStatus.CREATED, response.statusCode)
        val createdUser = userRepository.findOneByName(FIRST_USERNAME)
        assertEquals(FIRST_USERNAME, createdUser.name)
        assertEquals(PASSWORD, createdUser.password)
    }

    @Test
    fun `should not create user`() {
        saveFirstUser()

        val response = restTemplate.postForEntity(
            getBaseUrl() + "create",
            UserDto(FIRST_USERNAME, PASSWORD),
            Void::class.java
        )

        assertEquals(HttpStatus.BAD_REQUEST, response.statusCode)
    }

    @Test
    fun `should delete user`() {
        saveFirstUser()
        val headers = login()

        val response = restTemplate.exchange(
            getBaseUrl() + FIRST_USERNAME,
            HttpMethod.DELETE,
            HttpEntity(null, headers),
            Void::class.java
        )

        assertEquals(HttpStatus.ACCEPTED, response.statusCode)
        assertThrows(EmptyResultDataAccessException::class.java) {
            userRepository.findOneByName(FIRST_USERNAME)
        }
    }

    @Test
    fun `should return single user by name`() {
        saveFirstUser()
        val headers = login()

        val response = restTemplate.exchange(
            getBaseUrl() + FIRST_USERNAME,
            HttpMethod.GET,
            HttpEntity(null, headers),
            UserDto::class.java
        )

        assertEquals(HttpStatus.OK, response.statusCode)
        assertNotNull(response.body)
        assertEquals(FIRST_USERNAME, response.body?.name)
    }

    @Test
    fun `should not access other users`() {
        saveFirstUser()
        val accessedUser = saveSecondUser()
        val headers = login()

        val response = restTemplate.exchange(
            getBaseUrl() + accessedUser.name,
            HttpMethod.GET,
            HttpEntity(null, headers),
            UserDto::class.java
        )

        assertEquals(HttpStatus.FORBIDDEN, response.statusCode)
        assertNull(response.body)
    }
}