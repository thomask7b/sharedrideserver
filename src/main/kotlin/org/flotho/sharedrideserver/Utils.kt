package org.flotho.sharedrideserver

import java.security.Principal

object Utils {
    @JvmStatic
    fun mapsApiKey(): String {
        return System.getenv("MAPS_API_KEY")
    }

    @JvmStatic
    fun isAuthenticated(authenticatedUser: Principal, usernameAccessed: String): Boolean {
        return usernameAccessed == authenticatedUser.name
    }
}