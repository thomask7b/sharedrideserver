package org.flotho.sharedrideserver.direction.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.bson.codecs.pojo.annotations.BsonProperty


data class Duration(
    @JsonProperty("value")
    @BsonProperty("value")
    val inSeconds: Int?,
    @JsonProperty("text")
    @BsonProperty("text")
    val humanReadable: String?
)