package org.flotho.sharedrideserver.sharedride

import org.bson.types.ObjectId
import org.flotho.sharedrideserver.location.Location
import org.springframework.stereotype.Service
import java.util.*
import java.util.concurrent.Executors
import java.util.concurrent.ScheduledExecutorService
import java.util.concurrent.TimeUnit

@Service
class SharedRideService(
    private val sharedRideRepository: SharedRideRepository
) {
    private val executorService: ScheduledExecutorService = Executors.newScheduledThreadPool(10)
    private val cache: MutableMap<ObjectId, MutableMap<String, Location?>> = Collections.synchronizedMap(mutableMapOf())

    fun createSharedRide(sharedRide: SharedRide) {
        createCacheAndScheduleUpdate(sharedRide)
        sharedRideRepository.insert(sharedRide)
    }

    fun findSharedRide(id: ObjectId): Optional<SharedRide> {
        return sharedRideRepository.findById(id)
    }

    fun getSharedRideUsernames(id: ObjectId): Optional<Set<String>> {
        return Optional.ofNullable(cache[id]?.keys)
    }

    fun updateSharedRide(sharedRideId: ObjectId, username: String, location: Location? = null): Optional<SharedRide> {
        var updatedSharedRide: Optional<SharedRide> = Optional.empty()
        findSharedRide(sharedRideId).ifPresent {
            updateCache(sharedRideId, username, location)
            it.usersAndLocations[username] = location
            updatedSharedRide = Optional.of(sharedRideRepository.save(it))
        }
        return updatedSharedRide
    }

    fun updateCache(sharedRideId: ObjectId, username: String, location: Location?) {
        if (cache[sharedRideId].isNullOrEmpty()) {
            findSharedRide(sharedRideId).ifPresent {
                createCacheAndScheduleUpdate(it)
            }
        }
        cache[sharedRideId]?.put(username, location)
    }

    fun deleteSharedRide(id: ObjectId) {
        cache.remove(id)
        sharedRideRepository.deleteById(id)
    }

    private fun createCacheAndScheduleUpdate(sharedRide: SharedRide) {
        cache[sharedRide.id] = sharedRide.usersAndLocations
        executorService.scheduleAtFixedRate({ updateDbFromCache(sharedRide.id) }, 0, 1, TimeUnit.SECONDS)
    }

    private fun updateDbFromCache(sharedRideId: ObjectId) {
        cache[sharedRideId]?.forEach {
            if (it.value != null) {
                updateSharedRide(sharedRideId, it.key, it.value)
            }
        }
    }
}