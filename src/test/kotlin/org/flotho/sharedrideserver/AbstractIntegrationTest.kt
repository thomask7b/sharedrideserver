package org.flotho.sharedrideserver

import org.flotho.sharedrideserver.user.User
import org.flotho.sharedrideserver.user.UserDto
import org.flotho.sharedrideserver.user.UserRepository
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.http.HttpHeaders
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.test.context.junit.jupiter.SpringExtension

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension::class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
abstract class AbstractIntegrationTest @Autowired constructor(
    protected val userRepository: UserRepository,
    protected val restTemplate: TestRestTemplate
) {
    protected abstract val routePath: String

    @LocalServerPort
    protected var port: Int = 0

    @Autowired
    private val passwordEncoder: PasswordEncoder? = null

    protected fun getRootUrl(): String = "http://localhost:$port"
    protected fun getBaseUrl(): String = getRootUrl() + routePath
    protected fun saveFirstUser() =
        userRepository.save(User(name = FIRST_USERNAME, password = passwordEncoder!!.encode(PASSWORD)))

    protected fun saveSecondUser() =
        userRepository.save(User(name = SECOND_USERNAME, password = passwordEncoder!!.encode(PASSWORD)))

    protected fun deleteUsers() = userRepository.deleteAll()

    @AfterAll
    fun afterAll() {
        deleteUsers()
    }

    protected fun login(user: UserDto = UserDto(FIRST_USERNAME, PASSWORD)): HttpHeaders {
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