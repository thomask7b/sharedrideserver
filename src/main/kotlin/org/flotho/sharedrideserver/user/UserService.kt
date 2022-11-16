package org.flotho.sharedrideserver.user

import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository,
    private val passwordEncoder: PasswordEncoder
) {
    fun createUser(userDto: UserDto) {
        userRepository.insert(User(name = userDto.name, password = passwordEncoder.encode(userDto.password!!)))
    }

    fun findUser(name: String): User {
        return userRepository.findOneByName(name)
    }

    fun deleteUser(name: String) {
        userRepository.deleteByName(name)
    }
}