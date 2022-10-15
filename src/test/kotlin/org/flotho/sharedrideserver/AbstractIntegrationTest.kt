package org.flotho.sharedrideserver

import org.flotho.sharedrideserver.user.User
import org.flotho.sharedrideserver.user.UserDto
import org.flotho.sharedrideserver.user.UserRepository
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.http.HttpHeaders
import org.springframework.test.context.junit.jupiter.SpringExtension

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension::class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
abstract class AbstractIntegrationTest @Autowired constructor(
    protected val userRepository: UserRepository,
    protected val restTemplate: TestRestTemplate
) {
    protected abstract val routePath: String
    
    protected val username = "testUser"
    protected val password = "testPassword"

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

    protected fun getRootUrl(): String = "http://localhost:$port"
    protected fun getBaseUrl(): String = getRootUrl() + routePath
    protected fun saveTestUser() = userRepository.save(User(name = username, password = password))

    protected fun login(user: UserDto = UserDto(username, password)): HttpHeaders {
        val headers = HttpHeaders()
        val token = restTemplate.postForEntity(
            getRootUrl() + "/auth",
            user,
            Void::class.java
        ).headers["Set-Cookie"]?.get(0)
        headers.add("Cookie", token)
        return headers
    }
}