package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonAlias
import com.fasterxml.jackson.annotation.JsonProperty


data class Polyline(
    @JsonProperty("encoded_path")
    @JsonAlias("encodedPath")
    val encodedPath: String?
)