package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonAlias
import com.fasterxml.jackson.annotation.JsonProperty


data class Route(
    val summary: String?,
    val legs: List<Leg>,
    @JsonProperty("waypoint_order")
    @JsonAlias("waypointOrder")
    val waypointOrder: List<String>,
    @JsonProperty("overview_polyline")
    @JsonAlias("overviewPolyline")
    val overviewPolyline: Polyline?,
    val bounds: Bounds?,
    val copyrights: String?,
    val fare: String?,
    val warnings: List<String>
)