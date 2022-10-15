use sharedRide
db.dropDatabase()

db.user.insertOne({ _id : ObjectId('63148ddb51a8b3f793470931'), name : "test1", password: "zeze"})
db.user.insertOne({ _id : ObjectId('63148ddb51a8b3f793470932'), name : "test2", password: "zeze"})
db.user.insertOne({ _id : ObjectId('63148ddb51a8b3f793470933'), name : "test3", password: "zeze"})
db.user.insertOne({ _id : ObjectId('63148ddb51a8b3f793470934'), name : "test4", password: "zeze"})
db.user.insertOne({ _id : ObjectId('63148ddb51a8b3f793470935'), name : "test5", password: "zeze"})

db.sharedRide.insertOne({   _id : ObjectId("634294fec405402d3cb33597"),
                            usersAndLocations: {
                              test1: { latitude: 11.79584, longitude: 9.83205 },
                              test2: { latitude: 11.89584, longitude: 9.93205 }
                            },
                            direction: {
                              geocodedWaypoints: [
                                {
                                  geocoderStatus: 'OK',
                                  partialMatch: false,
                                  placeId: 'ChIJMS2FahDQzRIRcJqX_aUZCAQ',
                                  types: [ 'LOCALITY', 'POLITICAL' ]
                                },
                                {
                                  geocoderStatus: 'OK',
                                  partialMatch: false,
                                  placeId: 'ChIJM1PaREO_yRIRIAKX_aUZCAQ',
                                  types: [ 'LOCALITY', 'POLITICAL' ]
                                }
                              ],
                              routes: [
                                {
                                  summary: 'A8',
                                  legs: [
                                    {
                                      steps: [Array],
                                      distance: [Object],
                                      duration: [Object],
                                      startLocation: [Object],
                                      endLocation: [Object],
                                      startAddress: 'Nice, France',
                                      endAddress: 'Marseille, France'
                                    }
                                  ],
                                  waypointOrder: [],
                                  overviewPolyline: {
                                    points: 'ycxiGyiik@fFfKtDT`NbCzB~GjJhEtO~[xTnZrVzRzFjIr]jg@fu@hdAnUnQ`KdV|CJzH`QyDzjAnDy@lC|DyDdNTgElEpAzLhd@fJlv@xQ~zA`Lf_@j@~_@wAz]nDd`@xMfRtXfPt}@jfA|Y|[f^pRzNjf@jRhR|hAzFtZ~^pNl}@v]~bAzJfcAqHn|@dFhg@rN|a@n_@xs@jGfg@pPp_@fd@`s@nTxz@z@rRaMhReJfS{@rf@jEfp@dK`Rd]|j@zOpd@|TdStt@bQxb@thA_@|~@fHlUfRdL`UFtPvKnX~YjJjX@zbAhTvjAzKr~@m@pd@`Arz@xKfy@mPdtAiTpn@Z`b@bLhb@aD`Yo]dWwSz\\tIta@|Jzb@ub@nfCdMfn@tZl`@bV~NhSnCdZ{FrZbMzOpUnPdXj]zUvSdh@|z@|d@jYdIbPd_@vTnl@p_@jQ`^tB~WcQnQXtW~\\b\\d~Ajg@ffAhLzZjCzi@qCnj@gL`f@ce@tyAqErr@fDp|@rLpwBxDvvA~ZhaBqXvbCyHd`AbBji@`b@zuAdL`r@z@zo@jArn@jP|a@|Evb@i@nd@fMpbAdW|c@vTlx@`MlkAzSj]pZdIh[gDxb@sAtPnLpMtUhDhg@`Mvi@gCrzAhIpo@tTdo@xY~r@tLbv@pFtlD|Dr{@zLrj@bGta@oDr`@hAr_@bKla@~BnwAiAr^yXzg@iRbk@}L|o@~Rx{CpDthAkFfbA{G`w@lIfj@rJlb@kD|g@cZvy@vAxiAg`@~eCfDhzA_Ll`ByNdgA_d@``BlIfu@Kb_@oHpm@f@da@nBbh@oNb{@yAfv@zBhZvLbeA~AdaA}Cb}ByM~gA{InbCaInmAxGlxAuFzp@iW`s@yF`[kSz]uP~s@aDpjAePtr@i]ve@yc@v{AcaAfiCko@xzCiVbrCxCfsAwDtx@mh@pfByExs@hGv~@cA|o@oLrt@@ho@tOvu@`MxlBvSxbApMj|AdB`cBLfbBcQv`BqZ~qBkJdqBcC|qB_P|aFqJb]nDrR~Gz@~HsHhOoQ`@`LhApXjKv_@tBll@zGpb@k@pS`F~g@Fjn@mCfmBhMpm@|WzV`OvFt`@rCdVzh@`Vnf@|^p~@biAvlBvYjiA`Mlx@mPb`A~N|`@~Pl|@lL|Xr]bl@`dApVtj@jr@z]`SvUFbf@r@nXkFnUu\\jY}Xxq@x@bd@{G`h@gRl^_c@l_@y]r[aEl}@{Fxh@Vvx@`Ibh@vElFhAs@xF}@zABpA|OwIhVfAlECCnD~C{AnBsA^AYlHt@`P'
                                  },
                                  bounds: {
                                    northeast: { lat: 43.7102106, lng: 7.2618898 },
                                    southwest: { lat: 43.2960907, lng: 5.3507921 }
                                  },
                                  copyrights: 'Map data ©2022 Google',
                                  warnings: []
                                }
                              ]
                            }
                          })
db.sharedRide.insertOne({   _id : ObjectId("634294fec405402d3cb33598"),
                            usersAndLocations: {
                              test3: { latitude: 12.79584, longitude: 10.83205 },
                              test4: { latitude: 13.89584, longitude: 11.93205 },
                              test5: { latitude: 14.89584, longitude: 12.93205 }
                            }
                        })