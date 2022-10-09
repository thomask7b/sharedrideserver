package org.flotho.sharedrideserver.sharedride

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import org.bson.types.ObjectId
import org.flotho.sharedrideserver.Utils
import org.flotho.sharedrideserver.user.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.security.core.Authentication
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.web.bind.annotation.*
import java.net.URI

@RestController
@RequestMapping("/sharedride")
class SharedRideController(
    private val sharedRideService: SharedRideService,
    private val userService: UserService
) {
    @Operation(summary = "Crée un shared ride", description = "Création d'un shared ride")
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "201", description = "Création réussie"),
            ApiResponse(responseCode = "400", description = "Le shared ride n'a pas pu être créé"),
        ]
    )
    @GetMapping("/create")
    fun createSharedRide(auth: Authentication): ResponseEntity<Void> {
        return try {
            val user = userService.findUser(Utils.usernameFromAuthentication(auth))
            val sharedRide = SharedRide(users = linkedSetOf(user.name))
            sharedRideService.createSharedRide(sharedRide)
            ResponseEntity.created(URI.create("/sharedride/${sharedRide.id}")).build()
        } catch (e: Exception) {
            ResponseEntity.badRequest().build()
        }
    }

    @Operation(summary = "Supprime un shared ride", description = "Suppression d'un shared ride en cas de réussite")
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "202", description = "Suppression réussie"),
            ApiResponse(responseCode = "400", description = "Le shared ride n'a pas pu être supprimé"),
            ApiResponse(
                responseCode = "403",
                description = "Seul le manager est autorisé à supprimer le shared ride"
            ),
        ]
    )
    @DeleteMapping("/{id}")
    fun deleteSharedRide(
        auth: Authentication,
        @PathVariable("id") id: String
    ): ResponseEntity<Void> {
        return try {
            if (!isManager(auth, id)) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build()
            }
            sharedRideService.deleteSharedRide(ObjectId(id))
            ResponseEntity.accepted().build()
        } catch (e: Exception) {
            ResponseEntity.badRequest().build()
        }
    }

    @Operation(summary = "Récupère un shared ride", description = "Retourne les informations d'un shared ride")
    @ApiResponses(
        value = [
            ApiResponse(
                responseCode = "200",
                description = "Les informations sur le shared ride ont bien été retournées",
                content = [Content(mediaType = MediaType.APPLICATION_JSON_VALUE)]
            ),
            ApiResponse(responseCode = "400", description = "Le shared ride n'a pas pu être retourné"),
        ]
    )
    @GetMapping("/{id}")
    fun getSharedRide(auth: Authentication, @PathVariable("id") id: String): ResponseEntity<SharedRide> {
        return try {
            var sharedRide = sharedRideService.findSharedRide(ObjectId(id))
            val user = userService.findUser((auth.principal as UserDetails).username)
            if (!sharedRide.get().users.contains(user.name)) {
                sharedRide = sharedRideService.addUserToSharedRide(user.name, sharedRide.get())
            }
            ResponseEntity.ok(sharedRide.get())
        } catch (e: Exception) {
            ResponseEntity.badRequest().build()
        }
    }

    private fun isManager(auth: Authentication, id: String): Boolean {
        val manager = sharedRideService.findSharedRide(ObjectId(id)).get().users.iterator().next()
        return Utils.usernameFromAuthentication(auth) == manager
    }

}