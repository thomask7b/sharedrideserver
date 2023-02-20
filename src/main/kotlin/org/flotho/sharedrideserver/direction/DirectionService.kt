package org.flotho.sharedrideserver.direction

import com.fasterxml.jackson.databind.ObjectMapper
import com.google.maps.DirectionsApi
import com.google.maps.GeoApiContext
import com.google.maps.model.DirectionsResult
import io.klogging.NoCoLogging
import org.flotho.sharedrideserver.Utils.mapsApiKey
import org.flotho.sharedrideserver.direction.model.DirectionsData
import org.springframework.stereotype.Service

@Service
class DirectionService(
    private val objectMapper: ObjectMapper
) : NoCoLogging {

    private val context: GeoApiContext = GeoApiContext.Builder().apiKey(mapsApiKey()).build()

    fun requestDirection(places: List<String>): DirectionsData? {
        logger.info("Demande d'un itinéraire pour : $places")
        return convertDirectionsResultToDirectionsData(
            DirectionsApi.newRequest(context)//TODO éviter les péages, plus rapide, plus court
                .origin(places[0])
                .destination(places.last())
                .waypoints(*places.subList(1, places.size - 1).toTypedArray())
                .await()
        )
    }

    private fun convertDirectionsResultToDirectionsData(directionsResult: DirectionsResult): DirectionsData {
        return objectMapper.readValue(
            objectMapper.writeValueAsString(directionsResult),
            DirectionsData::class.java
        )//TODO améliorer conversion (sans repasser en JSON et en supprimant les JsonAlias du model)
    }
}