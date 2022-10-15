package org.flotho.sharedrideserver.direction

import com.google.maps.DirectionsApi
import com.google.maps.GeoApiContext
import com.google.maps.model.DirectionsResult
import org.flotho.sharedrideserver.Utils
import org.springframework.stereotype.Service

@Service
class DirectionService {

    private val context: GeoApiContext = GeoApiContext.Builder().apiKey(Utils.mapsApiKey()).build()

    fun requestDirection(places: List<String>): DirectionsResult? {
        return DirectionsApi.newRequest(context)
            .origin(places[0])
            .destination(places.last())
            .waypoints(*places.subList(1, places.size - 1).toTypedArray())
            .await()
    }
}