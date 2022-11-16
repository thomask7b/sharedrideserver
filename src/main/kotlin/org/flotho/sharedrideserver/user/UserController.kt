package org.flotho.sharedrideserver.user

import io.klogging.NoCoLogging
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import org.flotho.sharedrideserver.Utils.isAuthenticated
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.net.URI
import java.security.Principal

@RestController
@RequestMapping("/users")
class UserController(
    private val userService: UserService
) : NoCoLogging {
    @Operation(summary = "Crée un utlisateur", description = "Création d'un utilisateur en cas de réussite")
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "201", description = "Création réussie"),
            ApiResponse(responseCode = "400", description = "L'utilisateur n'a pas pu être créé"),
        ]
    )
    @PostMapping("/create", consumes = [MediaType.APPLICATION_JSON_VALUE])
    fun createUser(@RequestBody userDto: UserDto): ResponseEntity<Void> {
        return try {
            userService.createUser(userDto)
            logger.info("Création de l'utilisateur ${userDto.name} réussie")
            ResponseEntity.created(URI.create("/users/${userDto.name}")).build()
        } catch (e: Exception) {
            logger.error(e, "Echec lors de la création de l'utilisateur ${userDto.name}")
            ResponseEntity.badRequest().build()
        }
    }

    @Operation(summary = "Supprime un utilisateur", description = "Suppression d'un utilisateur en cas de réussite")
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "202", description = "Suppression réussie"),
            ApiResponse(responseCode = "400", description = "L'utilisateur n'a pas pu être supprimé"),
            ApiResponse(
                responseCode = "403",
                description = "L'utilisateur n'est pas autorisé à en supprimer d'autres"
            ),
        ]
    )
    @DeleteMapping("/{name}")
    fun deleteUser(authenticatedUser: Principal, @PathVariable("name") name: String): ResponseEntity<Void> {
        return try {
            if (!isAuthenticated(authenticatedUser, name)) {
                logger.warn("Suppression non autorisée car l'utilisateur n'est pas connecté")
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build()
            }
            userService.deleteUser(name)
            logger.info("L'utilisateur $name a bien été supprimé")
            ResponseEntity.accepted().build()
        } catch (e: Exception) {
            logger.error(e, "Erreur lors de la suppression de l'utilisateur $name")
            ResponseEntity.badRequest().build()
        }
    }

    @Operation(summary = "Récupère un utilisateur", description = "Retourne les informations d'un utilisateur")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Les informations sur l'utilisateur ont bien été retournées",
                content = [Content(mediaType = MediaType.APPLICATION_JSON_VALUE)]
            ),
            ApiResponse(responseCode = "400", description = "L'utilisateur n'a pas pu être retourné"),
            ApiResponse(
                responseCode = "403",
                description = "L'utilisateur n'est pas autorisé à recevoir les informations d'un autre",
            ),
        ]
    )
    @GetMapping("/{name}")
    fun getUser(authenticatedUser: Principal, @PathVariable("name") name: String): ResponseEntity<UserDto> {
        return try {
            if (!isAuthenticated(authenticatedUser, name)) {
                logger.warn("Récupération non autorisée car l'utilisateur n'est pas authentifié")
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build()
            }
            val user = userService.findUser(name)
            logger.info("Récupération réussie pour l'utilisateur $name")
            ResponseEntity.ok(UserDto(user.name))
        } catch (e: Exception) {
            logger.error(e, "Erreur lors de la récupération de l'utilisateur $name")
            ResponseEntity.badRequest().build()
        }
    }
}