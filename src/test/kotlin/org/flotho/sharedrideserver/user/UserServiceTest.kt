package org.flotho.sharedrideserver.user

import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertThrows
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.data.mongo.AutoConfigureDataMongo
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.dao.DuplicateKeyException
import org.springframework.dao.EmptyResultDataAccessException

@SpringBootTest
@AutoConfigureDataMongo
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class UserServiceTest @Autowired constructor(
    private val userService: UserService,
    private val userRepository: UserRepository
) {
    @BeforeAll
    fun setUp() {
        userRepository.deleteAll()
    }

    @AfterAll
    fun afterAll() {
        userRepository.deleteAll()
    }

    @Test
    fun `should create and find user`() {
        val username = "testUser"
        userService.createUser(UserDto(username, ""))

        assertEquals(userService.findUser(username).name, username)
    }

    @Test
    fun `should not duplicate user`() {
        val username = "sameUser"
        userService.createUser(UserDto(username, ""))

        assertThrows(DuplicateKeyException::class.java) {
            userService.createUser(UserDto(username, ""))
        }
    }

    @Test
    fun `should delete user`() {
        val username = "deleteUser"
        userService.createUser(UserDto(username, ""))
        
        userService.deleteUser(username)

        assertThrows(EmptyResultDataAccessException::class.java) {
            userService.findUser(username)
        }
    }
}