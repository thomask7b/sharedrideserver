package org.flotho.sharedrideserver.user

import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository

interface UserRepository : MongoRepository<User, ObjectId> {
    fun findOneByName(name: String): User
    fun deleteByName(name: String)
}