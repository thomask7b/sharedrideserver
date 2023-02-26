package org.flotho.sharedrideserver.location

import com.fasterxml.jackson.databind.ObjectMapper
import io.klogging.NoCoLogging
import org.bson.types.ObjectId
import org.flotho.sharedrideserver.Utils.isAuthenticated
import org.flotho.sharedrideserver.sharedride.SharedRideService
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.stereotype.Controller
import java.security.Principal

@Controller
class LocationController(
    val objectMapper: ObjectMapper,
    val sharedRideService: SharedRideService,
    val template: SimpMessagingTemplate
) : NoCoLogging {

    @MessageMapping("/location")
    @SendTo("/sharedride-ws/locations")
    fun updateRealTimeLocation(authenticatedUser: Principal, jsonUserLocation: String) {
        val userLocation = objectMapper.readValue(jsonUserLocation, UserLocationDto::class.java)
        if (userLocation.sharedRideId != null && isAuthenticated(authenticatedUser, userLocation.username!!)) {
            sharedRideService.updateCache(
                ObjectId(userLocation.sharedRideId),
                userLocation.username,
                userLocation.location
            )
            sharedRideService.getSharedRideUsernames(ObjectId(userLocation.sharedRideId)).ifPresent { users ->
                users.forEach {
                    template.convertAndSendToUser(it, "/sharedride-ws/locations", jsonUserLocation)
                }
                logger.info("${userLocation.username} a envoyé la localisation ${userLocation.location} aux utilisateurs du shared ride ${userLocation.sharedRideId}")
            }
        }
    }
}