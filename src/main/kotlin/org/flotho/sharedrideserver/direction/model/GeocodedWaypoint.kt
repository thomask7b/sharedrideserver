package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonAlias
import com.fasterxml.jackson.annotation.JsonProperty


data class GeocodedWaypoint(
    @JsonProperty("geocoder_status")
    @JsonAlias("geocoderStatus")
    val geocoderStatus: String?,
    @JsonProperty("partial_match")
    @JsonAlias("partialMatch")
    val partialMatch: Boolean?,
    @JsonProperty("place_id")
    @JsonAlias("placeId")
    val placeId: String?,
    val types: List<String>
)