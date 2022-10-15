package org.flotho.sharedrideserver.direction

import org.junit.jupiter.api.Assertions.assertNotNull
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class DirectionServiceTest @Autowired constructor(
    private val directionService: DirectionService
) {

    @Test
    fun `should retrieve direction`() {
        val direction = directionService.requestDirection(listOf("Nice", "Marseille"))

        assertNotNull(direction)
    }

}