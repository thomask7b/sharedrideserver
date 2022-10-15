package org.flotho.sharedrideserver.location

import com.fasterxml.jackson.databind.ObjectMapper
import org.bson.types.ObjectId
import org.flotho.sharedrideserver.Utils
import org.flotho.sharedrideserver.sharedride.SharedRideService
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.security.core.Authentication
import org.springframework.stereotype.Controller

@Controller
class LocationController(
    val objectMapper: ObjectMapper,
    val sharedRideService: SharedRideService
) {
    @MessageMapping("/location")
    @SendTo("/sharedride-ws/locations")
    fun updateRealTimeLocation(auth: Authentication, jsonUserLocation: String): String? {
        val userLocation = objectMapper.readValue(jsonUserLocation, UserLocationDto::class.java)
        if (userLocation.sharedRideId != null && userLocation.username == Utils.usernameFromAuthentication(auth)) {
            sharedRideService.updateCache(
                ObjectId(userLocation.sharedRideId),
                userLocation.username,
                userLocation.location
            )
            return jsonUserLocation
        }
        return null
    }
}