package org.flotho.sharedrideserver.user

data class UserDto(
    val name: String,
    val password: String? = null //peut être null lors de l'envoi au client
)