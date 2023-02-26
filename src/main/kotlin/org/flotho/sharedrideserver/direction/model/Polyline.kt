package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.mongodb.core.mapping.Field


data class Polyline(
    @JsonProperty("points")
    @Field("points")
    val encodedPath: String?
)