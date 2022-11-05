package org.flotho.sharedrideserver.direction

import com.fasterxml.jackson.databind.ObjectMapper
import com.google.maps.DirectionsApi
import com.google.maps.GeoApiContext
import com.google.maps.model.DirectionsResult
import org.flotho.sharedrideserver.Utils.mapsApiKey
import org.flotho.sharedrideserver.direction.model.DirectionsData
import org.springframework.stereotype.Service

@Service
class DirectionService(
    private val objectMapper: ObjectMapper
) {

    private val context: GeoApiContext = GeoApiContext.Builder().apiKey(mapsApiKey()).build()

    fun requestDirection(places: List<String>): DirectionsData? {
        return convertDirectionsResultToDirectionsData(
            DirectionsApi.newRequest(context)
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