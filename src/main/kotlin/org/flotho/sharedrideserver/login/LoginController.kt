package org.flotho.sharedrideserver.login

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import org.flotho.sharedrideserver.user.UserDto
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.AuthenticationException
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class LoginController(
    private val authenticationManager: AuthenticationManager
) {
    @Operation(summary = "Authentification", description = "Authentifie un utilisateur")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "L'utilisateur a bien été authentifié"
            ),
            ApiResponse(responseCode = "400", description = "L'utilisateur n'a pas pu être authentifié")
        ]
    )
    @PostMapping("/auth", consumes = ["application/json"])
    fun auth(@RequestBody userDto: UserDto): ResponseEntity<Void> {
        try {
            SecurityContextHolder.getContext().authentication =
                authenticationManager.authenticate(UsernamePasswordAuthenticationToken(userDto.name, userDto.password))
        } catch (e: AuthenticationException) {
            return ResponseEntity.badRequest().build()
        }
        return ResponseEntity.ok().build()
    }

}