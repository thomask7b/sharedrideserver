package org.flotho.sharedrideserver

import org.springframework.security.core.Authentication
import org.springframework.security.core.userdetails.UserDetails

object Utils {
    @JvmStatic
    fun usernameFromAuthentication(auth: Authentication): String {
        return (auth.principal as UserDetails).username
    }
}