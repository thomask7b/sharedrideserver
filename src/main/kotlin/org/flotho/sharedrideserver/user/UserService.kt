package org.flotho.sharedrideserver.user

import org.springframework.stereotype.Service

@Service
class UserService(
    private val userRepository: UserRepository
) {
    fun createUser(userDto: UserDto) {
        userRepository.insert(User(name = userDto.name, password = userDto.password!!))
    }

    fun findUser(name: String): User {
        return userRepository.findOneByName(name)
    }

    fun deleteUser(name: String) {
        userRepository.deleteByName(name)
    }
}