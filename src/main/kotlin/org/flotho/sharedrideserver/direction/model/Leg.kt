package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonAlias
import com.fasterxml.jackson.annotation.JsonProperty


data class Leg(
    val steps: List<Step>,
    val distance: Distance?,
    val duration: Duration?,
    @JsonProperty("duration_in_traffic")
    @JsonAlias("durationInTraffic")
    val durationInTraffic: String?,
    @JsonProperty("arrival_time")
    @JsonAlias("arrivalTime")
    val arrivalTime: String?,
    @JsonProperty("departure_time")
    @JsonAlias("departureTime")
    val departureTime: String?,
    @JsonProperty("start_location")
    @JsonAlias("startLocation")
    val startLocation: LatLng?,
    @JsonProperty("end_location")
    @JsonAlias("endLocation")
    val endLocation: LatLng?,
    @JsonProperty("start_address")
    @JsonAlias("startAddress")
    val startAddress: String?,
    @JsonProperty("end_address")
    @JsonAlias("endAddress")
    val endAddress: String?
)