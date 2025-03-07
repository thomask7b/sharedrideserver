package org.flotho.sharedrideserver.sharedride

import com.fasterxml.jackson.databind.ObjectMapper
import org.flotho.sharedrideserver.FIRST_USERNAME
import org.flotho.sharedrideserver.PASSWORD
import org.flotho.sharedrideserver.ROLE
import org.flotho.sharedrideserver.SECOND_USERNAME
import org.flotho.sharedrideserver.direction.DirectionService
import org.flotho.sharedrideserver.direction.model.DirectionsData
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
import org.springframework.http.MediaType
import org.springframework.security.test.context.support.WithMockUser
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*
import java.util.*

@SpringBootTest
@AutoConfigureMockMvc
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class SharedRideControllerTest @Autowired constructor(
    private val mvc: MockMvc,
    private val objectMapper: ObjectMapper,
    @MockBean
    private val sharedRideService: SharedRideService,
    @MockBean
    private val userService: UserService,
    @MockBean
    private val directionService: DirectionService,
    @InjectMocks
    private val sharedRideController: SharedRideController
) {
    @BeforeAll
    fun setUp() {
        MockitoAnnotations.openMocks(this)
    }

    private fun mockedSharedRide(username: String): Optional<SharedRide> {
        val optSharedRide =
            Optional.of(
                SharedRide(
                    usersAndLocations = mutableMapOf(Pair(username, null)),
                    direction = DirectionsData(listOf(), listOf())
                )
            )
        `when`(sharedRideService.findSharedRide(optSharedRide.get().id)).thenReturn(optSharedRide)
        return optSharedRide
    }

    @Test
    @WithMockUser(username = FIRST_USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should create shared ride`() {
        `when`(directionService.requestDirection(listOf())).thenReturn(DirectionsData(listOf(), listOf()))
        `when`(userService.findUser(FIRST_USERNAME)).thenReturn(User(name = FIRST_USERNAME, password = PASSWORD))

        mvc.perform(
            post("/sharedride/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(listOf<String>()))
        )
            .andExpect(status().isCreated)
            .andExpect(header().string("location", containsString("/sharedride/")))
    }

    @Test
    @WithMockUser(username = FIRST_USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should get shared ride`() {
        val optSharedRide = mockedSharedRide(FIRST_USERNAME)

        mvc.perform(
            get("/sharedride/${optSharedRide.get().id}")
        )
            .andExpect(status().isOk)
            .andExpect(content().string(containsString(FIRST_USERNAME)))
    }

    @Test
    @WithMockUser(username = SECOND_USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should add user in shared ride`() {
        val optSharedRide = mockedSharedRide(FIRST_USERNAME)
        optSharedRide.map {
            it.usersAndLocations[SECOND_USERNAME] = null
        }
        `when`(sharedRideService.updateSharedRide(optSharedRide.get().id, SECOND_USERNAME)).thenReturn(optSharedRide)

        mvc.perform(
            get("/sharedride/${optSharedRide.get().id}")
        )
            .andExpect(status().isOk)
            .andExpect(content().string(containsString(FIRST_USERNAME)))
            .andExpect(content().string(containsString(SECOND_USERNAME)))
    }

    @Test
    @WithMockUser(username = FIRST_USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should delete shared ride`() {
        val optSharedRide = mockedSharedRide(FIRST_USERNAME)

        mvc.perform(
            delete("/sharedride/${optSharedRide.get().id}")
        )
            .andExpect(status().isAccepted)
    }

    @Test
    @WithMockUser(username = FIRST_USERNAME, password = PASSWORD, roles = [ROLE])
    fun `should not delete shared ride`() {
        val optSharedRide = mockedSharedRide("anyUser")

        mvc.perform(
            delete("/sharedride/${optSharedRide.get().id}")
        )
            .andExpect(status().isForbidden)
    }
}