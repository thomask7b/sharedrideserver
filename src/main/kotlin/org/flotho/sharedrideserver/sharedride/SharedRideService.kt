package org.flotho.sharedrideserver.sharedride

import org.bson.types.ObjectId
import org.flotho.sharedrideserver.location.Location
import org.springframework.stereotype.Service
import java.util.*

@Service
class SharedRideService(
    private val sharedRideRepository: SharedRideRepository
) {
    fun createSharedRide(sharedRide: SharedRide) {
        sharedRideRepository.insert(sharedRide)
    }

    fun findSharedRide(id: ObjectId): Optional<SharedRide> {
        return sharedRideRepository.findById(id)
    }

    fun updateSharedRide(sharedRideId: ObjectId, username: String, location: Location? = null): Optional<SharedRide> {
        var updatedSharedRide: Optional<SharedRide> = Optional.empty()
        findSharedRide(sharedRideId).ifPresent {
            it.usersAndLocations[username] = location
            updatedSharedRide = Optional.of(sharedRideRepository.save(it))
        }
        return updatedSharedRide
    }

    fun deleteSharedRide(id: ObjectId) {
        sharedRideRepository.deleteById(id)
    }
}