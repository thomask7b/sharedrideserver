package org.flotho.sharedrideserver.location

data class UserLocationDto(
    val sharedRideId: String? = null,
    val username: String? = null,
    val location: Location? = null
)