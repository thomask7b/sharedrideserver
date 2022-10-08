package org.flotho.sharedrideserver.sharedride

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class SharedRide(
    @Id
    val id: String = ObjectId.get().toHexString(),
    val users: LinkedHashSet<String>
)