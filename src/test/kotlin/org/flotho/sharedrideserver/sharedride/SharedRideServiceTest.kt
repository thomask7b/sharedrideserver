package org.flotho.sharedrideserver.sharedride

import com.google.maps.model.DirectionsResult
import org.awaitility.Awaitility.await
import org.flotho.sharedrideserver.location.Location
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo
import org.springframework.boot.test.context.SpringBootTest
import java.util.concurrent.TimeUnit

private const val FIRST_USER = "first"
private const val SECOND_USER = "second"

@SpringBootTest
@AutoConfigureDataMongo
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class SharedRideServiceTest @Autowired constructor(
    private val sharedRideService: SharedRideService,
    private val sharedRideRepository: SharedRideRepository
) {
    @BeforeAll
    fun setUp() {
        sharedRideRepository.deleteAll()
    }

    @AfterAll
    fun afterAll() {
        sharedRideRepository.deleteAll()
    }

    private fun createSharedRide(): SharedRide {
        val sharedRide = SharedRide(
            usersAndLocations = mutableMapOf(Pair(FIRST_USER, null)),
            direction = DirectionsResult()
        )
        sharedRideService.createSharedRide(sharedRide)
        return sharedRide
    }

    @Test
    fun `should create sharedRide`() {
        val sharedRide = createSharedRide()

        assertEquals(sharedRide.id, sharedRideService.findSharedRide(sharedRide.id).get().id)
    }

    @Test
    fun `should add user in sharedRide`() {
        val sharedRide = createSharedRide()

        val updatedSharedRide = sharedRideService.updateSharedRide(sharedRide.id, SECOND_USER)

        assertTrue(updatedSharedRide.get().usersAndLocations.contains(SECOND_USER))
    }

    @Test
    fun `should update location for user in sharedRide`() {
        val location = Location(11.79584, 9.83205)
        val sharedRide = createSharedRide()

        val updatedSharedRide = sharedRideService.updateSharedRide(sharedRide.id, FIRST_USER, location)
        val userLocationInSharedRide = updatedSharedRide.get().usersAndLocations[FIRST_USER]

        assertEquals(userLocationInSharedRide?.latitude, location.latitude)
        assertEquals(userLocationInSharedRide?.longitude, location.longitude)
    }

    @Test
    fun `should delete sharedRide`() {
        val sharedRide = createSharedRide()

        sharedRideService.deleteSharedRide(sharedRide.id)

        assertFalse(sharedRideService.findSharedRide(sharedRide.id).isPresent)
    }

    @Test
    fun `should schedule database updates`() {
        val location = Location(11.79584, 9.83205)
        val sharedRide = createSharedRide()

        sharedRideService.updateCache(sharedRide.id, FIRST_USER, location)

        assertNull(sharedRideService.findSharedRide(sharedRide.id).get().usersAndLocations[FIRST_USER])
        await()
            .atMost(2, TimeUnit.SECONDS)
            .untilAsserted {
                assertEquals(
                    location,
                    sharedRideService.findSharedRide(sharedRide.id).get().usersAndLocations[FIRST_USER]
                )
            }
    }
}