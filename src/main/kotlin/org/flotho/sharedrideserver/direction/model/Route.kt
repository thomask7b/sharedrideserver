package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.mongodb.core.mapping.Field


data class Route(
    val summary: String?,
    val legs: List<Leg>,
    @JsonProperty("overview_polyline")
    @Field("overview_polyline")
    val overviewPolyline: Polyline?,
    val bounds: Bounds?,
    val copyrights: String?,
    val warnings: List<String>
)