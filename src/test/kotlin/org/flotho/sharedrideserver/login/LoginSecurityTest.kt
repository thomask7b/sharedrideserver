package org.flotho.sharedrideserver.login

import org.assertj.core.api.Assertions.assertThat
import org.flotho.sharedrideserver.user.User
import org.flotho.sharedrideserver.user.UserRepository
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.mock.web.MockHttpSession
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestBuilders.formLogin
import org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.authenticated
import org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.unauthenticated
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.RequestBuilder
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

private const val NAME = "testUser"
private const val PASSWORD = "testPassword"

@SpringBootTest
@ExtendWith(SpringExtension::class)
@AutoConfigureMockMvc
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class LoginSecurityTest @Autowired constructor(
    val mockMvc: MockMvc,
    val userRepository: UserRepository
) {
    @BeforeAll
    fun setUp() {
        userRepository.deleteAll()
        userRepository.save(User(name = NAME, password = PASSWORD))
    }

    @AfterAll
    fun afterAll() {
        userRepository.deleteAll()
    }

    private fun loginRequest(name: String, password: String): RequestBuilder {
        return formLogin("/login").user(name).password(password)
            .userParameter("name").passwordParam("password")
    }

    @Test
    fun `protected page redirects to login`() {
        val mvcResult = this.mockMvc.perform(
            get("/users/$NAME")
        )
            .andExpect(status().is3xxRedirection)
            .andReturn()

        assertThat(mvcResult.response.redirectedUrl).endsWith("/login-view")
    }

    @Test
    fun `valid user permitted to log in`() {
        this.mockMvc.perform(
            loginRequest(NAME, PASSWORD)
        )
            .andExpect(authenticated())
    }

    @Test
    fun `invalid user cannot authenticate`() {
        this.mockMvc.perform(
            loginRequest(NAME, "")
        )
            .andExpect(unauthenticated())
    }

    @Test
    fun `logged in user can access protected page`() {
        val mvcResult = this.mockMvc.perform(
            loginRequest(NAME, PASSWORD)
        )
            .andExpect(authenticated()).andReturn()

        val httpSession = mvcResult.request.getSession(false) as MockHttpSession

        this.mockMvc.perform(
            get("/users/$NAME")
                .session(httpSession)
        )
            .andExpect(status().isOk)
    }

    @Test
    fun `logged in user cannot access unauthorized page`() {
        userRepository.save(User(name = "otherUser", password = "zeze"))

        val mvcResult = this.mockMvc.perform(
            loginRequest(NAME, PASSWORD)
        )
            .andExpect(authenticated()).andReturn()

        val httpSession = mvcResult.request.getSession(false) as MockHttpSession

        this.mockMvc.perform(
            get("/users/otherUser")
                .session(httpSession)
        )
            .andExpect(status().isForbidden)
    }
}