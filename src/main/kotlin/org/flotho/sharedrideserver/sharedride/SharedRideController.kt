package org.flotho.sharedrideserver.sharedride

import io.klogging.NoCoLogging
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.responses.ApiResponse
import io.swagger.v3.oas.annotations.responses.ApiResponses
import org.bson.types.ObjectId
import org.flotho.sharedrideserver.direction.DirectionService
import org.flotho.sharedrideserver.user.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.net.URI
import java.security.Principal

@RestController
@RequestMapping("/sharedride")
class SharedRideController(
    private val sharedRideService: SharedRideService,
    private val userService: UserService,
    private val directionService: DirectionService
) : NoCoLogging {
    @Operation(
        summary = "Crée un shared ride", description = "Création d'un shared ride. Il contiendra les " +
                "utilisateurs et leurs localisations, ainsi que l'itinéraire renvoyé par l'API Directions de Google Maps."
    )
    @ApiResponses(
        value = [
            ApiResponse(responseCode = "201", description = "Création réussie"),
            ApiResponse(responseCode = "400", description = "Le shared ride n'a pas pu être créé"),
        ]
    )
    @PostMapping("/create", consumes = [MediaType.APPLICATION_JSON_VALUE])
    fun createSharedRide(authenticatedUser: Principal, @RequestBody steps: List<String>): ResponseEntity<Void> {
        return try {
            val user = userService.findUser(authenticatedUser.name)
            val route = directionService.requestDirection(steps)
            val sharedRide = SharedRide(usersAndLocations = mutableMapOf(Pair(user.name, null)), direction = route!!)
            sharedRideService.createSharedRide(sharedRide)
            logger.info("Le shared ride a bien été créé avec l'id : ${sharedRide.id}")
            ResponseEntity.created(URI.create("/sharedride/${sharedRide.id}")).build()
        } catch (e: Exception) {
            logger.error(e, "Echec lors de la création du shared ride par l'utilisateur ${authenticatedUser.name}")
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
    fun deleteSharedRide(authenticatedUser: Principal, @PathVariable("id") id: String): ResponseEntity<Void> {
        return try {
            if (!isManager(authenticatedUser, id)) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build()
            }
            sharedRideService.deleteSharedRide(ObjectId(id))
            logger.info("Le shared ride avec l'id $id a bien été supprimé")
            ResponseEntity.accepted().build()
        } catch (e: Exception) {
            logger.error(e, "Erreur lors de la suppression du shared ride $id")
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
    fun getSharedRide(authenticatedUser: Principal, @PathVariable("id") id: String): ResponseEntity<SharedRide> {
        return try {
            var sharedRide = sharedRideService.findSharedRide(ObjectId(id))
            val username = authenticatedUser.name
            if (!sharedRide.get().usersAndLocations.contains(username)) {
                sharedRide = sharedRideService.updateSharedRide(sharedRide.get().id, username)
            }
            logger.info("Le shared ride $id est récupéré par l'utilisateur ${authenticatedUser.name}")
            ResponseEntity.ok(sharedRide.get())
        } catch (e: Exception) {
            logger.error(
                e, "Erreur lors de la récupération du shared ride $id par l'utilisateur ${authenticatedUser.name}"
            )
            ResponseEntity.badRequest().build()
        }
    }

    private fun isManager(authenticatedUser: Principal, id: String): Boolean {
        val manager = sharedRideService.findSharedRide(ObjectId(id)).get().usersAndLocations.iterator().next().key
        return authenticatedUser.name == manager
    }

}