package org.flotho.sharedrideserver.direction

import com.google.maps.DirectionsApi
import com.google.maps.GeoApiContext
import com.google.maps.model.DirectionsResult
import io.klogging.NoCoLogging
import org.flotho.sharedrideserver.Utils.mapsApiKey
import org.flotho.sharedrideserver.direction.model.*
import org.springframework.stereotype.Service

@Service
class DirectionService() : NoCoLogging {

    private val context: GeoApiContext = GeoApiContext.Builder().apiKey(mapsApiKey()).build()

    fun requestDirection(places: List<String>): DirectionsData? {
        logger.info("Demande d'un itinéraire pour : $places")
        return mapDirectionsResultToDirectionsData(
            DirectionsApi.newRequest(context)//TODO éviter les péages, plus rapide, plus court
                .origin(places[0])
                .destination(places.last())
                .waypoints(*places.subList(1, places.size - 1).toTypedArray())
                .await()//TODO langue fr pour le moment
        )
    }

    private fun mapDirectionsResultToDirectionsData(directionsResult: DirectionsResult): DirectionsData {
        val geocodedWaypoints = directionsResult.geocodedWaypoints.map {
            GeocodedWaypoint(
                it.geocoderStatus.name,
                it.placeId,
                it.types.asList().map { type -> type.name })
        }
        val routes = directionsResult.routes.map {
            Route(
                it.summary,
                it.legs.map { leg ->
                    Leg(
                        leg.steps.map { step ->
                            Step(
                                step.htmlInstructions,
                                Distance(step.distance.inMeters.toInt(), step.distance.humanReadable),
                                step.maneuver,
                                Duration(step.duration.inSeconds.toInt(), step.duration.humanReadable),
                                LatLng(step.startLocation.lat, step.startLocation.lng),
                                LatLng(step.endLocation.lat, step.endLocation.lng),
                                Polyline(step.polyline.encodedPath),
                                step.travelMode.name
                            )
                        },
                        Distance(leg.distance.inMeters.toInt(), leg.distance.humanReadable),
                        Duration(leg.duration.inSeconds.toInt(), leg.duration.humanReadable),
                        LatLng(leg.startLocation.lat, leg.startLocation.lng),
                        LatLng(leg.endLocation.lat, leg.endLocation.lng),
                        leg.startAddress,
                        leg.endAddress
                    )
                },
                Polyline(it.overviewPolyline.encodedPath),
                Bounds(
                    LatLng(it.bounds.northeast.lat, it.bounds.northeast.lng),
                    LatLng(it.bounds.southwest.lat, it.bounds.southwest.lng)
                ),
                it.copyrights,
                it.warnings.asList()
            )
        }
        return DirectionsData(geocodedWaypoints, routes)
    }
}