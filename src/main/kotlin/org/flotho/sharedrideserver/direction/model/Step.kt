package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.mongodb.core.mapping.Field


data class Step(
    @JsonProperty("html_instructions")
    @Field("html_instructions")
    val htmlInstructions: String?,
    val distance: Distance?,
    val maneuver: String?,
    val duration: Duration?,
    @JsonProperty("start_location")
    @Field("start_location")
    val startLocation: LatLng?,
    @JsonProperty("end_location")
    @Field("end_location")
    val endLocation: LatLng?,
    val polyline: Polyline?,
    @JsonProperty("travel_mode")
    @Field("travel_mode")
    val travelMode: String?,
)