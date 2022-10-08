package org.flotho.sharedrideserver.sharedride

import org.springframework.data.mongodb.repository.MongoRepository

interface SharedRideRepository : MongoRepository<SharedRide, String>