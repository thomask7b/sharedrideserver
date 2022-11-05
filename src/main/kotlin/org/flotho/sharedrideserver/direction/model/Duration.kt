package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonAlias
import com.fasterxml.jackson.annotation.JsonProperty


data class Duration(
    @JsonProperty("in_seconds")
    @JsonAlias("inSeconds")
    val inSeconds: Int?,
    @JsonProperty("human_readable")
    @JsonAlias("humanReadable")
    val humanReadable: String?
)