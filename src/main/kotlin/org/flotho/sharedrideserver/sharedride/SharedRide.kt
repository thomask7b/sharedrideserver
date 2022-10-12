package org.flotho.sharedrideserver.sharedride

import org.bson.types.ObjectId
import org.flotho.sharedrideserver.location.Location
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class SharedRide(
    @Id
    val id: ObjectId = ObjectId.get(),
    val usersAndLocations: MutableMap<String, Location?>
)