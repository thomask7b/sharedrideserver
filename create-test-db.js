use sharedRide
db.dropDatabase()

db.user.insertOne({ _id : ObjectId('63148ddb51a8b3f793470931'), name : "test1", password: "zeze"})
db.user.insertOne({ _id : ObjectId('63148ddb51a8b3f793470932'), name : "test2", password: "zeze"})
db.user.insertOne({ _id : ObjectId('63148ddb51a8b3f793470933'), name : "test3", password: "zeze"})
db.user.insertOne({ _id : ObjectId('63148ddb51a8b3f793470934'), name : "test4", password: "zeze"})
db.user.insertOne({ _id : ObjectId('63148ddb51a8b3f793470935'), name : "test5", password: "zeze"})

db.sharedRide.insertOne({ _id : ObjectId("634294fec405402d3cb33597"),
                          usersAndLocations: {
                            test1: { latitude: 11.79584, longitude: 9.83205 },
                            test2: { latitude: 11.89584, longitude: 9.93205 }
                            }
                          })
db.sharedRide.insertOne({ _id : ObjectId("634294fec405402d3cb33598"),
                        usersAndLocations: {
                          test3: { latitude: 12.79584, longitude: 10.83205 },
                          test4: { latitude: 13.89584, longitude: 11.93205 },
                          test5: { latitude: 14.89584, longitude: 12.93205 }
                          }
                        })
