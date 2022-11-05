package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonAlias
import com.fasterxml.jackson.annotation.JsonProperty


data class Step(
    @JsonProperty("html_instructions")
    @JsonAlias("htmlInstructions")
    val htmlInstructions: String?,
    val distance: Distance?,
    val maneuver: String?,
    val duration: Duration?,
    @JsonProperty("start_location")
    @JsonAlias("startLocation")
    val startLocation: LatLng?,
    @JsonProperty("end_location")
    @JsonAlias("endLocation")
    val endLocation: LatLng?,
    val steps: String?,
    val polyline: Polyline?,
    @JsonProperty("travel_mode")
    @JsonAlias("travelMode")
    val travelMode: String?,
    @JsonProperty("transit_details")
    @JsonAlias("transitDetails")
    val transitDetails: String?
)