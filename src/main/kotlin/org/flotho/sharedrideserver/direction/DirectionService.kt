package org.flotho.sharedrideserver.direction

import com.google.maps.DirectionsApi
import com.google.maps.GeoApiContext
import com.google.maps.model.DirectionsResult
import org.flotho.sharedrideserver.Utils
import org.springframework.stereotype.Service

@Service
class DirectionService {

    fun requestDirection(places: List<String>): DirectionsResult? {
        val context: GeoApiContext = GeoApiContext.Builder().apiKey(Utils.mapsApiKey()).build()
        return DirectionsApi.newRequest(context)
            .origin(places[0])
            .destination(places.last())
            .waypoints(*places.subList(1, places.size - 1).toTypedArray())
            .await()
    }
}