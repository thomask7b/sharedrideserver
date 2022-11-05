package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonAlias
import com.fasterxml.jackson.annotation.JsonProperty


data class Distance(
    @JsonProperty("in_meters")
    @JsonAlias("inMeters")
    val inMeters: Int?,
    @JsonProperty("human_readable")
    @JsonAlias("humanReadable")
    val humanReadable: String?
)