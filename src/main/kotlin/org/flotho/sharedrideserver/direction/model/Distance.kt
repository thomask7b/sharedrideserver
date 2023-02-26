package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.mongodb.core.mapping.Field


data class Distance(
    @JsonProperty("value")
    @Field("value")
    val inMeters: Int?,
    @JsonProperty("text")
    @Field("text")
    val humanReadable: String?
)