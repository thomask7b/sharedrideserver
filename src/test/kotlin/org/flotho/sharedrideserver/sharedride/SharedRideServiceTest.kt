package org.flotho.sharedrideserver.sharedride

import org.bson.types.ObjectId
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo
import org.springframework.boot.test.context.SpringBootTest

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
            ObjectId.get().toHexString(),
            linkedSetOf(FIRST_USER)
        )
        sharedRideService.createSharedRide(sharedRide)
        return sharedRide
    }

    @Test
    fun `should create sharedRide`() {
        val sharedRide = createSharedRide()

        assertEquals(sharedRide, sharedRideService.findSharedRide(sharedRide.id).get())
    }

    @Test
    fun `should add user in sharedRide`() {
        val sharedRide = createSharedRide()

        val updatedSharedRide = sharedRideService.addUserToSharedRide(SECOND_USER, sharedRide)

        assertTrue(updatedSharedRide.get().users.contains(SECOND_USER))
    }

    @Test
    fun `should delete sharedRide`() {
        val sharedRide = createSharedRide()

        sharedRideService.deleteSharedRide(sharedRide.id)

        assertFalse(sharedRideService.findSharedRide(sharedRide.id).isPresent)
    }

}