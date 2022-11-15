package org.flotho.sharedrideserver.user

import org.flotho.sharedrideserver.FIRST_USERNAME
import org.flotho.sharedrideserver.PASSWORD
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertThrows
import org.junit.jupiter.api.BeforeEach
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
    @BeforeEach
    fun beforeEach() {
        userRepository.deleteAll()
    }

    @AfterAll
    fun afterAll() {
        userRepository.deleteAll()
    }

    @Test
    fun `should create and find user`() {
        val user = UserDto(FIRST_USERNAME, PASSWORD)

        userService.createUser(user)

        val createdUser = userService.findUser(FIRST_USERNAME)
        assertEquals(FIRST_USERNAME, createdUser.name)
        assertEquals(PASSWORD, createdUser.password)
    }

    @Test
    fun `should not duplicate user`() {
        userService.createUser(UserDto(FIRST_USERNAME, PASSWORD))

        assertThrows(DuplicateKeyException::class.java) {
            userService.createUser(UserDto(FIRST_USERNAME, FIRST_USERNAME))
        }
    }

    @Test
    fun `should delete user`() {
        userService.createUser(UserDto(FIRST_USERNAME, PASSWORD))

        userService.deleteUser(FIRST_USERNAME)

        assertThrows(EmptyResultDataAccessException::class.java) {
            userService.findUser(FIRST_USERNAME)
        }
    }
}