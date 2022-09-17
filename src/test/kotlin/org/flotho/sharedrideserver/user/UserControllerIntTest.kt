package org.flotho.sharedrideserver.user

import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.dao.EmptyResultDataAccessException
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpMethod
import org.springframework.http.HttpStatus
import org.springframework.test.context.junit.jupiter.SpringExtension

private const val NAME = "testUser"
private const val PASSWORD = "testPassword"

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension::class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class UserControllerIntTest @Autowired constructor(
    private val userRepository: UserRepository,
    private val restTemplate: TestRestTemplate
) {
    @LocalServerPort
    protected var port: Int = 0

    @BeforeEach
    fun setUp() {
        userRepository.deleteAll()
    }

    @AfterAll
    fun afterAll() {
        userRepository.deleteAll()
    }

    private fun getRootUrl(): String = "http://localhost:$port/users"

    private fun saveTestUser() = userRepository.save(User(name = NAME, password = PASSWORD))

    private fun login(): String? {
        return restTemplate.postForEntity(
            "http://localhost:$port/auth",
            UserDto(NAME, PASSWORD),
            Void::class.java
        ).headers["Set-Cookie"]?.get(0)
    }

    @Test
    fun `should create user`() {
        val username = "testCreateUser"
        val password = "zeze"

        val response = restTemplate.postForEntity(
            getRootUrl() + "/create",
            UserDto(username, password),
            Boolean::class.java
        )

        assertEquals(HttpStatus.CREATED, response.statusCode)
        assertEquals(password, userRepository.findOneByName(username).password)
    }

    @Test
    fun `should delete user`() {
        saveTestUser()
        val headers = HttpHeaders()
        headers.add("Cookie", login())

        val response = restTemplate.exchange(
            getRootUrl() + "/$NAME",
            HttpMethod.DELETE,
            HttpEntity(null, headers),
            String::class.java
        )

        assertEquals(HttpStatus.ACCEPTED, response.statusCode)
        assertThrows(EmptyResultDataAccessException::class.java) {
            userRepository.findOneByName(NAME)
        }
    }

    @Test
    fun `should return single user by name`() {
        saveTestUser()
        val headers = HttpHeaders()
        headers.add("Cookie", login())

        val response = restTemplate.exchange(
            getRootUrl() + "/$NAME",
            HttpMethod.GET,
            HttpEntity(null, headers),
            UserDto::class.java
        )

        assertEquals(HttpStatus.OK, response.statusCode)
        assertNotNull(response.body)
        assertEquals(NAME, response.body?.name)
    }

    @Test
    fun `should not access other users`() {
        saveTestUser()
        val accessedUser = userRepository.save(User(name = "accessedUser", password = "test"))

        val headers = HttpHeaders()
        headers.add("Cookie", login())

        val response = restTemplate.exchange(
            getRootUrl() + "/${accessedUser.name}",
            HttpMethod.GET,
            HttpEntity(null, headers),
            UserDto::class.java
        )

        assertEquals(HttpStatus.FORBIDDEN, response.statusCode)
        assertNull(response.body)
    }
}