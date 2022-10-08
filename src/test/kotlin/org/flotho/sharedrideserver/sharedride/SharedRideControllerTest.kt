package org.flotho.sharedrideserver.sharedride

import org.flotho.sharedrideserver.user.User
import org.flotho.sharedrideserver.user.UserService
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
import org.springframework.security.test.context.support.WithMockUser
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.header
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status
import java.util.*

private const val USERNAME = "testUser"
private const val PASSWORD = "pwd"
private const val ROLE = "USER"

@SpringBootTest
@AutoConfigureMockMvc
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class SharedRideControllerTest @Autowired constructor(
    private val mvc: MockMvc,
    @MockBean
    private val sharedRideService: SharedRideService,
    @MockBean
    private val userService: UserService,
    @InjectMocks
    private val sharedRideController: SharedRideController
) {
    @BeforeAll
    fun setUp() {
        MockitoAnnotations.openMocks(this)
    }

    @Test
    @WithMockUser(username = USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should create shared ride`() {
        `when`(userService.findUser(USERNAME)).thenReturn(User(name = USERNAME, password = PASSWORD))

        mvc.perform(
            get("/sharedride/create")
        )
            .andExpect(status().isCreated)
            .andExpect(header().string("location", containsString("/sharedride/")))
    }

    @Test
    @WithMockUser(username = USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should delete shared ride`() {
        val optSharedRide = Optional.of(SharedRide(users = linkedSetOf(USERNAME)))
        `when`(sharedRideService.findSharedRide(optSharedRide.get().id)).thenReturn(optSharedRide)

        mvc.perform(
            delete("/sharedride/${optSharedRide.get().id}")
        )
            .andExpect(status().isAccepted)
    }

    @Test
    @WithMockUser(username = USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should not delete shared ride`() {
        val optSharedRide = Optional.of(SharedRide(users = linkedSetOf("anyUser")))
        `when`(sharedRideService.findSharedRide(optSharedRide.get().id)).thenReturn(optSharedRide)

        mvc.perform(
            delete("/sharedride/${optSharedRide.get().id}")
        )
            .andExpect(status().isForbidden)
    }
}