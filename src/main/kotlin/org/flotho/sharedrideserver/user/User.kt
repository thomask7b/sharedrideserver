package org.flotho.sharedrideserver.user

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class User(
    @Id
    val id: ObjectId = ObjectId.get(),
    @Indexed(unique = true)
    val name: String,
    val password: String
)