package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.mongodb.core.mapping.Field


data class GeocodedWaypoint(
    @JsonProperty("geocoder_status")
    @Field("geocoder_status")
    val geocoderStatus: String?,
    @JsonProperty("place_id")
    @Field("place_id")
    val placeId: String?,
    val types: List<String>
)