package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.mongodb.core.mapping.Field


data class Leg(
    val steps: List<Step>,
    val distance: Distance?,
    val duration: Duration?,
    @JsonProperty("start_location")
    @Field("start_location")
    val startLocation: LatLng?,
    @JsonProperty("end_location")
    @Field("end_location")
    val endLocation: LatLng?,
    @JsonProperty("start_address")
    @Field("start_address")
    val startAddress: String?,
    @JsonProperty("end_address")
    @Field("end_address")
    val endAddress: String?
)