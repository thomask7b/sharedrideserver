package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonAlias
import com.fasterxml.jackson.annotation.JsonProperty


data class Polyline(
    @JsonProperty("points")
    @JsonAlias("encodedPath")
    val encodedPath: String?
)