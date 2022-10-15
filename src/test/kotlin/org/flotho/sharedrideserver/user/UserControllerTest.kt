package org.flotho.sharedrideserver.user

import com.fasterxml.jackson.databind.ObjectMapper
import org.hamcrest.CoreMatchers.containsString
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.mockito.InjectMocks
import org.mockito.Mockito.`when`
import org.mockito.MockitoAnnotations
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.dao.DuplicateKeyException
import org.springframework.http.MediaType
import org.springframework.security.test.context.support.WithMockUser
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.header
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

private const val USERNAME = "testUser"
private const val PASSWORD = "pwd"
private const val ROLE = "USER"

@SpringBootTest
@AutoConfigureMockMvc
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class UserControllerTest @Autowired constructor(
    private val mvc: MockMvc,
    @MockBean
    private val userService: UserService,
    @InjectMocks
    private val userController: UserController,
    val objectMapper: ObjectMapper
) {
    @BeforeAll
    fun setup() {
        MockitoAnnotations.openMocks(this)
    }

    @Test
    fun `should create user`() {
        val userDto = UserDto(name = USERNAME, password = PASSWORD)

        mvc.perform(
            post("/users/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(userDto))
        )
            .andExpect(status().isCreated)
            .andExpect(header().string("location", containsString("/users/${userDto.name}")))
    }

    @Test
    fun `should not create user`() {
        val userDto = UserDto(name = USERNAME, password = PASSWORD)
        `when`(userService.createUser(userDto)).thenThrow(DuplicateKeyException::class.java)

        mvc.perform(
            post("/users/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(userDto))
        )
            .andExpect(status().isBadRequest)
    }

    @Test
    @WithMockUser(username = USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should delete user`() {
        val userDto = UserDto(name = USERNAME, password = PASSWORD)

        mvc.perform(
            delete("/users/{name}", userDto.name)
        )
            .andExpect(status().isAccepted)
    }

    @Test
    @WithMockUser(username = USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should not delete an other user`() {
        val userDto = UserDto(name = "otherUser", password = "")

        mvc.perform(
            delete("/users/{name}", userDto.name)
        )
            .andExpect(status().isForbidden)
    }

    @Test
    @WithMockUser(username = USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should get user`() {
        val userDto = UserDto(name = USERNAME, password = PASSWORD)
        `when`(userService.findUser(userDto.name)).thenReturn(User(name = userDto.name, password = userDto.password!!))

        mvc.perform(
            get("/users/{name}", userDto.name)
        )
            .andExpect(status().isOk)
    }

    @Test
    @WithMockUser(username = USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should not get user`() {
        val userDto = UserDto(name = "otherUser", password = "")
        `when`(userService.findUser(userDto.name)).thenReturn(User(name = userDto.name, password = userDto.password!!))

        mvc.perform(
            get("/users/{name}", userDto.name)
        )
            .andExpect(status().isForbidden)
    }
}