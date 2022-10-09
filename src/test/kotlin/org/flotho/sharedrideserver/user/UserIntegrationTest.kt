package org.flotho.sharedrideserver.user

import org.flotho.sharedrideserver.AbstractIntegrationTest
import org.junit.jupiter.api.Assertions.*
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

    @Test
    fun `should create user`() {
        val username = "testCreateUser"
        val password = "zeze"

        val response = restTemplate.postForEntity(
            getBaseUrl() + "create",
            UserDto(username, password),
            Void::class.java
        )

        assertEquals(HttpStatus.CREATED, response.statusCode)
        assertEquals(password, userRepository.findOneByName(username).password)
    }

    @Test
    fun `should not create user`() {
        saveTestUser()

        val response = restTemplate.postForEntity(
            getBaseUrl() + "create",
            UserDto(username, password),
            Void::class.java
        )

        assertEquals(HttpStatus.BAD_REQUEST, response.statusCode)
    }

    @Test
    fun `should delete user`() {
        saveTestUser()
        val headers = login()

        val response = restTemplate.exchange(
            getBaseUrl() + username,
            HttpMethod.DELETE,
            HttpEntity(null, headers),
            Void::class.java
        )

        assertEquals(HttpStatus.ACCEPTED, response.statusCode)
        assertThrows(EmptyResultDataAccessException::class.java) {
            userRepository.findOneByName(username)
        }
    }

    @Test
    fun `should return single user by name`() {
        saveTestUser()
        val headers = login()

        val response = restTemplate.exchange(
            getBaseUrl() + username,
            HttpMethod.GET,
            HttpEntity(null, headers),
            UserDto::class.java
        )

        assertEquals(HttpStatus.OK, response.statusCode)
        assertNotNull(response.body)
        assertEquals(username, response.body?.name)
    }

    @Test
    fun `should not access other users`() {
        saveTestUser()
        val accessedUser = userRepository.save(User(name = "accessedUser", password = "test"))
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