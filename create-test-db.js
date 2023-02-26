use sharedRide
db.dropDatabase()

db.user.insertOne({
    _id: ObjectId('63148ddb51a8b3f793470931'),
    name: "test1",
    password: "$2a$10$KDF8EQVYhcM6nIPMJbIMrubMKmRNr4ZMs2Vb.58GZWbuKoUzkQpzK"
})
db.user.insertOne({
    _id: ObjectId('63148ddb51a8b3f793470932'),
    name: "test2",
    password: "$2a$10$KDF8EQVYhcM6nIPMJbIMrubMKmRNr4ZMs2Vb.58GZWbuKoUzkQpzK"
})
db.user.insertOne({
    _id: ObjectId('63148ddb51a8b3f793470933'),
    name: "test3",
    password: "$2a$10$KDF8EQVYhcM6nIPMJbIMrubMKmRNr4ZMs2Vb.58GZWbuKoUzkQpzK"
})
db.user.insertOne({
    _id: ObjectId('63148ddb51a8b3f793470934'),
    name: "test4",
    password: "$2a$10$KDF8EQVYhcM6nIPMJbIMrubMKmRNr4ZMs2Vb.58GZWbuKoUzkQpzK"
})
db.user.insertOne({
    _id: ObjectId('63148ddb51a8b3f793470935'),
    name: "test5",
    password: "$2a$10$KDF8EQVYhcM6nIPMJbIMrubMKmRNr4ZMs2Vb.58GZWbuKoUzkQpzK"
})

db.sharedRide.insertOne({
    _id: ObjectId("634294fec405402d3cb33597"),
    usersAndLocations: {
        test1: {
            latitude: 11.79584,
            longitude: 9.83205
        },
        test2: {
            latitude: 11.89584,
            longitude: 9.93205
        }
    },
    direction: {}
})
db.sharedRide.insertOne({
    _id: ObjectId("634294fec405402d3cb33598"),
    usersAndLocations: {
        test3: {
            latitude: 12.79584,
            longitude: 10.83205
        },
        test4: {
            latitude: 13.89584,
            longitude: 11.93205
        },
        test5: {
            latitude: 14.89584,
            longitude: 12.93205
        }
    },
    direction: {
        geocoded_waypoints: [
          {
            geocoder_status: "OK",
            place_id: "ChIJLUL4hzcrzBIR0J6X_aUZCAQ",
            types: [
              "LOCALITY",
              "POLITICAL"
            ]
          },
          {
            geocoder_status: "OK",
            place_id: "ChIJqZFankXVzRIRsJ-X_aUZCAQ",
            types: [
              "LOCALITY",
              "POLITICAL"
            ]
          }
        ],
        routes: [
          {
            summary: "Av. Jules Grec/D704",
            legs: [
              {
                steps: [
                  {
                    html_instructions: "Head <b>north</b> on <b>Rue du Portugon</b> toward <b>Rue Saint-Sébastien</b>",
                    distance: {
                      value: 56,
                      text: "56 m"
                    },
                    maneuver: null,
                    duration: {
                      value: 11,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.6268529,
                      lng: 7.098497999999999
                    },
                    end_location: {
                      lat: 43.627337,
                      lng: 7.098688
                    },
                    polyline: {
                      points: "yzgiGslij@e@MEAQGc@M"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Turn <b>right</b> onto <b>Rue Sous-Barri</b>",
                    distance: {
                      value: 28,
                      text: "28 m"
                    },
                    maneuver: "turn-right",
                    duration: {
                      value: 14,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.627337,
                      lng: 7.098688
                    },
                    end_location: {
                      lat: 43.6272484,
                      lng: 7.0990088
                    },
                    polyline: {
                      points: "{}giGymij@Da@J]"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Turn <b>right</b> onto <b>Rue de la Calade</b>",
                    distance: {
                      value: 90,
                      text: "90 m"
                    },
                    maneuver: "turn-right",
                    duration: {
                      value: 31,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.6272484,
                      lng: 7.0990088
                    },
                    end_location: {
                      lat: 43.6264777,
                      lng: 7.0987165
                    },
                    polyline: {
                      points: "i}giGyoij@h@JLAVLLDRFLDD@JDB@BB"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "<b>Rue de la Calade</b> turns <b>right</b> and becomes <b>Calade des Migraniers</b>",
                    distance: {
                      value: 187,
                      text: "0.2 km"
                    },
                    maneuver: null,
                    duration: {
                      value: 59,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.6264777,
                      lng: 7.0987165
                    },
                    end_location: {
                      lat: 43.6261708,
                      lng: 7.0967066
                    },
                    polyline: {
                      points: "oxgiG_nij@@F?x@?`@Ap@?p@Ap@?F?f@?T?Z?PFHBDBBDDDBDBH@R?"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Continue onto <b>Rte d'Antibes</b>",
                    distance: {
                      value: 557,
                      text: "0.6 km"
                    },
                    maneuver: null,
                    duration: {
                      value: 82,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.6261708,
                      lng: 7.0967066
                    },
                    end_location: {
                      lat: 43.6220699,
                      lng: 7.099833899999999
                    },
                    polyline: {
                      points: "qvgiGmaij@l@Cb@ETCLCz@KRENE~@Yt@OVEJCFAXMFORc@\\w@`@eAVo@Nc@FQBMFQDOJUHMb@Af@CVO^]FEp@u@n@e@"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "At the roundabout, take the <b>2nd</b> exit onto <b>Rte d'Antibes</b>/<wbr/><b>D504</b><div style=\"font-size:0.9em\">Continue to follow D504</div>",
                    distance: {
                      value: 1104,
                      text: "1.1 km"
                    },
                    maneuver: "roundabout-right",
                    duration: {
                      value: 93,
                      text: "2 mins"
                    },
                    start_location: {
                      lat: 43.6220699,
                      lng: 7.099833899999999
                    },
                    end_location: {
                      lat: 43.61505090000001,
                      lng: 7.108354299999999
                    },
                    polyline: {
                      points: "}|fiG}tij@@@?@@@@??@@??@@?@@@?@?@?@?@?@?@A@?@??A@A@A@A?A@A?A?A@??A?A?A?A?A@A?AAA?A?A?A?AAA?A?AAAAA?AA??AA??AA?AAA?AAFSDKFKHK`A_Ah@[z@e@^OBA\\IXIb@Mf@YTURUDCNOf@]RMb@Uf@WnA}@`BoAd@[r@i@FGJKLMBARW\\i@Vm@Po@Po@XgBPm@XyA@EVw@JU@EN[l@iA\\i@Xa@R[DGP]Zs@P_@@CJSNYHQHKFIFKHMBE"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "At the roundabout, take the <b>1st</b> exit onto <b>Av. Jean Michard Pellissier</b>/<wbr/><b>D704</b><div style=\"font-size:0.9em\">Go through 1 roundabout</div>",
                    distance: {
                      value: 1417,
                      text: "1.4 km"
                    },
                    maneuver: "roundabout-right",
                    duration: {
                      value: 122,
                      text: "2 mins"
                    },
                    start_location: {
                      lat: 43.61505090000001,
                      lng: 7.108354299999999
                    },
                    end_location: {
                      lat: 43.60323289999999,
                      lng: 7.1124524
                    },
                    polyline: {
                      points: "aqeiGejkj@BABABABE@A^[HEPMLGHEHCHAFAHAZCTAdACLAd@?\\AT?R?N?N@F@B?B?@@D@HBRHJFDBHDJDVFB@F@L@N@F?D?FAF?@AHALGJEBAJGNIFC@AJIHERSJQBC@ETi@HUJSLU@AJQBCBCZWTGPEf@ID?~@KtAOTCRCJENGd@YTQVUr@k@DEVQf@[XMDCPGRIZQ@@?@@??@@??@@?@@@?@@@?@?@?@?@??A@?@??A@??A@?@A?A@A?A@??A?A?A@A?A?A?A?A?A?AZG@Al@EHAHC@?JEBARId@ShAi@b@UNIFCt@[PGNCx@AD?V?J?Z?z@CVAl@A^Ef@Kp@KRBR?XBRF"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "At the roundabout, take the <b>2nd</b> exit onto <b>Av. Jules Grec</b>/<wbr/><b>D704</b><div style=\"font-size:0.9em\">Go through 1 roundabout</div>",
                    distance: {
                      value: 732,
                      text: "0.7 km"
                    },
                    maneuver: "roundabout-right",
                    duration: {
                      value: 69,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.60323289999999,
                      lng: 7.1124524
                    },
                    end_location: {
                      lat: 43.5969098,
                      lng: 7.1137598
                    },
                    polyline: {
                      points: "egciGyclj@@FDFDDBBJ@F?DABA@ADABEBG@E@GHGNIj@MpCG`@A^Cd@CxAQd@E`AE@@@?@@@?@?@?@?@?@??A@?@A@??A@??A@??A?A@A?A@A?Af@KLIj@EX?f@?TAVATCPCl@Mh@O\\IbA[ZKNB\\Kb@MVIRETEJAFAB@D@FD"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "At the roundabout, take the <b>3rd</b> exit and stay on <b>Av. Jules Grec</b>/<wbr/><b>D704</b>",
                    distance: {
                      value: 515,
                      text: "0.5 km"
                    },
                    maneuver: "roundabout-right",
                    duration: {
                      value: 52,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.5969098,
                      lng: 7.1137598
                    },
                    end_location: {
                      lat: 43.592565,
                      lng: 7.1154616
                    },
                    polyline: {
                      points: "u_biG_llj@BBDBD@D?D?BABCBE@E@G@I@CDIFGHGJGLGFADALCLELCLCLELELEHCBALGJGLILGJGLGJGLGLE?ANELENEPCLALCLCJALAB?HAL?LA@?ZAFATANAB?ZC\\ERE@?ZKLGJEJCLGLEJEJCHEHCHEFC@?FCHCDAH?"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "At <b>Rdpt du Lycée Jacques Dolle</b>, continue straight to stay on <b>Av. Jules Grec</b>/<wbr/><b>D704</b>",
                    distance: {
                      value: 617,
                      text: "0.6 km"
                    },
                    maneuver: "roundabout-right",
                    duration: {
                      value: 81,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.592565,
                      lng: 7.1154616
                    },
                    end_location: {
                      lat: 43.5878147,
                      lng: 7.1191004
                    },
                    polyline: {
                      points: "odaiGsvlj@@@@?@?@?@?@?@?@??A@?@?@A?A@??A@??A@A?A@A?A?A@A?A?A?A?A?A?A?A?A?ABGBIBIFGh@]XQlAs@TMj@[RKhAq@zA}@LGdAq@h@YDCVMTKZS~AaAfAo@NK^ULKJIJIFKPS@G@CBGDU"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Turn <b>right</b> onto <b>Bd Général Vautrin</b>/<wbr/><b>D6007</b> (signs for <b>A 8</b>/<wbr/><b>Centre Ville</b>)<div style=\"font-size:0.9em\">Continue to follow D6007</div>",
                    distance: {
                      value: 409,
                      text: "0.4 km"
                    },
                    maneuver: "turn-right",
                    duration: {
                      value: 90,
                      text: "2 mins"
                    },
                    start_location: {
                      lat: 43.5878147,
                      lng: 7.1191004
                    },
                    end_location: {
                      lat: 43.5842626,
                      lng: 7.1182108
                    },
                    polyline: {
                      points: "yf`iGkmmj@lAXJBz@VTFzA^v@V`A\\l@RhA^ZJVDJ@B?B?D?NCv@U\\IVE"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Slight <b>left</b> onto <b>Bd Général Vautrin</b>",
                    distance: {
                      value: 157,
                      text: "0.2 km"
                    },
                    maneuver: "turn-slight-left",
                    duration: {
                      value: 44,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.5842626,
                      lng: 7.1182108
                    },
                    end_location: {
                      lat: 43.5836091,
                      lng: 7.1195773
                    },
                    polyline: {
                      points: "sp_iGygmj@NKLGNOBC@CBEPUTY\\]JWHc@FSBOIIEKM["
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Slight <b>right</b> onto <b>Rue Sadi Carnot</b>",
                    distance: {
                      value: 47,
                      text: "47 m"
                    },
                    maneuver: "turn-slight-right",
                    duration: {
                      value: 13,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.5836091,
                      lng: 7.1195773
                    },
                    end_location: {
                      lat: 43.5837077,
                      lng: 7.1201447
                    },
                    polyline: {
                      points: "ql_iGkpmj@GYAOCSAUC["
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Turn <b>right</b> at the 1st cross street onto <b>Av. Robert Soleau</b>",
                    distance: {
                      value: 332,
                      text: "0.3 km"
                    },
                    maneuver: "turn-right",
                    duration: {
                      value: 92,
                      text: "2 mins"
                    },
                    start_location: {
                      lat: 43.5837077,
                      lng: 7.1201447
                    },
                    end_location: {
                      lat: 43.5807707,
                      lng: 7.1208828
                    },
                    polyline: {
                      points: "em_iG{smj@|Dq@TC`@CzDo@xCi@"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Continue straight onto <b>Pl. Général de Gaulle</b>",
                    distance: {
                      value: 78,
                      text: "78 m"
                    },
                    maneuver: "straight",
                    duration: {
                      value: 27,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.5807707,
                      lng: 7.1208828
                    },
                    end_location: {
                      lat: 43.5801853,
                      lng: 7.1213907
                    },
                    polyline: {
                      points: "yz~hGoxmj@FADCtAuAHGDA"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Turn <b>right</b> onto <b>Bd Albert 1er</b> (signs for <b>Juan les Pins</b>/<wbr/><b>Cap D'Antibes</b>)",
                    distance: {
                      value: 201,
                      text: "0.2 km"
                    },
                    maneuver: "turn-right",
                    duration: {
                      value: 58,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.5801853,
                      lng: 7.1213907
                    },
                    end_location: {
                      lat: 43.5787774,
                      lng: 7.1226398
                    },
                    polyline: {
                      points: "ew~hGu{mj@R\\`AaAJILItA}AFIjAyA"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Turn <b>left</b> onto <b>Av. Meissonnier</b>",
                    distance: {
                      value: 105,
                      text: "0.1 km"
                    },
                    maneuver: "turn-left",
                    duration: {
                      value: 38,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.5787774,
                      lng: 7.1226398
                    },
                    end_location: {
                      lat: 43.5793865,
                      lng: 7.123639799999999
                    },
                    polyline: {
                      points: "kn~hGocnj@u@{Am@mAU]"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Continue straight onto <b>Rue Général Vandenberg</b>",
                    distance: {
                      value: 154,
                      text: "0.2 km"
                    },
                    maneuver: "straight",
                    duration: {
                      value: 57,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.5793865,
                      lng: 7.123639799999999
                    },
                    end_location: {
                      lat: 43.5798309,
                      lng: 7.125454299999999
                    },
                    polyline: {
                      points: "er~hGwinj@EUAACWIa@G[[oBCMG[Gu@Ik@"
                    },
                    travel_mode: "DRIVING"
                  },
                  {
                    html_instructions: "Turn <b>left</b> onto <b>Rue Paul Bourgarel</b>",
                    distance: {
                      value: 64,
                      text: "64 m"
                    },
                    maneuver: "turn-left",
                    duration: {
                      value: 26,
                      text: "1 min"
                    },
                    start_location: {
                      lat: 43.5798309,
                      lng: 7.125454299999999
                    },
                    end_location: {
                      lat: 43.5803713,
                      lng: 7.1251728
                    },
                    polyline: {
                      points: "}t~hGaunj@G@_@Pa@Pa@P"
                    },
                    travel_mode: "DRIVING"
                  }
                ],
                distance: {
                  value: 6850,
                  text: "6.8 km"
                },
                duration: {
                  value: 1059,
                  text: "18 mins"
                },
                start_location: {
                  lat: 43.6268529,
                  lng: 7.098497999999999
                },
                end_location: {
                  lat: 43.5803713,
                  lng: 7.1251728
                },
                start_address: "06410 Biot, France",
                end_address: "Antibes, France"
              }
            ],
            overview_polyline: {
              points: "yzgiGslij@aBe@Da@J]h@JLAd@R`@LXL?tCArC?p@?PFHFHJHDB\\@pAIb@GnAQnA_@`B[XMFOp@{ApAkD\\eAHMb@Af@CVOf@c@p@u@n@e@@@?@BBB@H@FAFGBKAWMMAAL_@PW`A_Ah@[zAu@`@K|@Wf@YTUXYv@m@v@c@f@WnA}@`BoAxAeAd@c@p@aAVm@Po@j@wCj@gCf@yA|@eBv@kAXc@l@qAn@qAb@s@LSFCh@e@r@a@d@IdCKlBAj@BTFn@Zn@Pj@BZEh@WXOh@c@lAgCNU^[f@Ml@I~Dc@ZMz@k@hByA`Ai@VKn@[@@@BFBF@HCDGBUtAQZKfD}AVMfAc@NCx@A\\?zBEl@A^ExAWf@Bl@JFNHHR@HCNQBMXQj@MpCG`AE~BUfBKDB@?F?FEDG@Cf@MLIj@E`A?l@Cf@GvA]`Be@ZKNB`AYj@O`@GJ?VNJ@HAFIBMBMLQTOTIn@Ov@U|Aw@f@W\\K`@It@Kh@CxBMp@K\\Kr@YlAc@`@IB@D?NIDWBMFSp@e@hDoBfEcClC}AxEqChAw@f@q@DKDUlAXfAZpBf@pFhBr@PN@H?fAYt@O\\SX]f@o@\\]JWPw@BOIISg@Ii@Ei@C[|Dq@v@GtIyALE~A}ADAR\\lAkALItA}ArAcBcBiDU]EUEYQ}@_@}BOqAIk@G@_@PcAb@"
            },
            bounds: {
              northeast: {
                lat: 43.627337,
                lng: 7.125454299999999
              },
              southwest: {
                lat: 43.5787774,
                lng: 7.0967066
              }
            },
            copyrights: "Map data ©2023",
            warnings: []
          }
        ]
      }
})