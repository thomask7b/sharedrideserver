package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonAlias
import com.fasterxml.jackson.annotation.JsonProperty


data class DirectionsData(
    @JsonProperty("geocoded_waypoints")
    @JsonAlias("geocodedWaypoints")
    val geocodedWaypoints: List<GeocodedWaypoint>,
    val routes: List<Route>
)