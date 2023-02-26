package org.flotho.sharedrideserver.config

import org.flotho.sharedrideserver.user.UserRepository
import org.springframework.dao.EmptyResultDataAccessException
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserDetailsServiceImpl(
    private val userRepository: UserRepository
) : UserDetailsService {
    override fun loadUserByUsername(username: String?): UserDetails {
        try {
            val user = userRepository.findOneByName(username!!)
            return User.builder()
                .username(user.name)
                .password(user.password)
                .roles("USER")
                .build()
        } catch (e: EmptyResultDataAccessException) {
            throw UsernameNotFoundException("Cet utilisateur n'existe pas.")
        }
    }
}