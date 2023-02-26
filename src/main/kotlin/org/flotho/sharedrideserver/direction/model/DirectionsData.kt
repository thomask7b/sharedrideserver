package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.mongodb.core.mapping.Field


data class DirectionsData(
    @JsonProperty("geocoded_waypoints")
    @Field("geocoded_waypoints")
    val geocodedWaypoints: List<GeocodedWaypoint>,
    val routes: List<Route>
)