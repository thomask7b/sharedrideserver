package org.flotho.sharedrideserver.sharedride

import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository

interface SharedRideRepository : MongoRepository<SharedRide, ObjectId>