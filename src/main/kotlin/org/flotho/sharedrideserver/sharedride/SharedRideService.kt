package org.flotho.sharedrideserver.sharedride

import org.bson.types.ObjectId
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

    fun addUserToSharedRide(username: String, sharedRide: SharedRide): Optional<SharedRide> {
        var updatedSharedRide: Optional<SharedRide> = Optional.empty()
        findSharedRide(sharedRide.id).ifPresent {
            it.users.add(username)
            updatedSharedRide = Optional.of(sharedRideRepository.save(it))
        }
        return updatedSharedRide
    }

    fun deleteSharedRide(id: ObjectId) {
        sharedRideRepository.deleteById(id)
    }
}