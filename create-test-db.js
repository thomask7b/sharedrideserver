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
        geocodedWaypoints: [{
                geocoderStatus: "OK",
                placeId: "ChIJMS2FahDQzRIRcJqX_aUZCAQ",
                types: ["locality", "political"]
            },
            {
                geocoderStatus: "OK",
                placeId: "ChIJM1PaREO_yRIRIAKX_aUZCAQ",
                types: ["locality", "political"]
            }
        ],
        routes: [{
            bounds: {
                northeast: {
                    lat: 43.7102106,
                    lng: 7.2618898
                },
                southwest: {
                    lat: 43.2960907,
                    lng: 5.3507964
                }
            },
            copyrights: "Map data ©2022 Google",
            legs: [{
                distance: {
                    text: "198 km",
                    value: 198093
                },
                duration: {
                    text: "2 heures 12 minutes",
                    value: 7899
                },
                endAddress: "Marseille, France",
                endLocation: {
                    lat: 43.2960907,
                    lng: 5.3698541
                },
                startAddress: "Nice, France",
                startLocation: {
                    lat: 43.7102106,
                    lng: 7.2618898
                },
                steps: [{
                        distance: {
                            text: "28 m",
                            value: 28
                        },
                        duration: {
                            text: "1 minute",
                            value: 7
                        },
                        endLocation: {
                            lat: 43.7101361,
                            lng: 7.2615535
                        },
                        htmlInstructions: "Prendre la direction \u003cb\u003eouest\u003c/b\u003e sur \u003cb\u003ePl. du Général de Gaulle\u003c/b\u003e vers \u003cb\u003eBd Joseph Garnier\u003c/b\u003e",
                        polyline: {
                            points: "ycxiGyiik@Hn@BR"
                        },
                        startLocation: {
                            lat: 43.7102106,
                            lng: 7.2618898
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,1 km",
                            value: 124
                        },
                        duration: {
                            text: "1 minute",
                            value: 35
                        },
                        endLocation: {
                            lat: 43.7101098,
                            lng: 7.2600099
                        },
                        htmlInstructions: "\u003cb\u003ePl. du Général de Gaulle\u003c/b\u003e tourne légèrement \u003cb\u003eà droite\u003c/b\u003e et devient \u003cb\u003eBd Joseph Garnier\u003c/b\u003e",
                        polyline: {
                            points: "kcxiGugik@BdC@lD"
                        },
                        startLocation: {
                            lat: 43.7101361,
                            lng: 7.2615535
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,2 km",
                            value: 220
                        },
                        duration: {
                            text: "1 minute",
                            value: 60
                        },
                        endLocation: {
                            lat: 43.708142,
                            lng: 7.2598218
                        },
                        htmlInstructions: "Prendre \u003cb\u003eà gauche\u003c/b\u003e sur \u003cb\u003eRue Alfred Binet\u003c/b\u003e",
                        maneuver: "turn-left",
                        polyline: {
                            points: "ecxiGa~hk@|ADrAFN?P@X@d@Dh@FZDL@D?D?TA"
                        },
                        startLocation: {
                            lat: 43.7101098,
                            lng: 7.2600099
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,3 km",
                            value: 266
                        },
                        duration: {
                            text: "1 minute",
                            value: 55
                        },
                        endLocation: {
                            lat: 43.70575729999999,
                            lng: 7.259703099999999
                        },
                        htmlInstructions: "Continuer sur \u003cb\u003eRue des Combattants en Afrique du N\u003c/b\u003e",
                        polyline: {
                            points: "{vwiG{|hk@PCDAF?J@~@DdBDpAFT@d@@v@B^?@?`@?"
                        },
                        startLocation: {
                            lat: 43.708142,
                            lng: 7.2598218
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,3 km",
                            value: 295
                        },
                        duration: {
                            text: "1 minute",
                            value: 36
                        },
                        endLocation: {
                            lat: 43.7043845,
                            lng: 7.257566799999999
                        },
                        htmlInstructions: "Prendre \u003cb\u003eà droite\u003c/b\u003e sur \u003cb\u003eSq. Colonel Jean Pierre\u003c/b\u003e",
                        maneuver: "turn-right",
                        polyline: {
                            points: "_hwiGc|hk@@lA@P@J@L?N@T@~@A|@?PD~@FDF@HBF@XBH@b@DF@v@Jp@DH@D@HBLB"
                        },
                        startLocation: {
                            lat: 43.70575729999999,
                            lng: 7.259703099999999
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "5,0 km",
                            value: 4956
                        },
                        duration: {
                            text: "5 minutes",
                            value: 287
                        },
                        endLocation: {
                            lat: 43.6720155,
                            lng: 7.218711099999999
                        },
                        htmlInstructions: "Rester à \u003cb\u003edroite\u003c/b\u003e à l'embranchement, puis suivre \u003cb\u003eAéroport Nice Côte d' Azur\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNice-Ouest\u003c/b\u003e pour rejoindre \u003cb\u003eVoie Pierre Mathis\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVoie Rapide\u003c/b\u003e",
                        maneuver: "fork-right",
                        polyline: {
                            points: "k_wiGynhk@HHB@d@XPL^V\\Xn@f@HDFFRNh@`@BBRNNNFFHHDB@@BBBBBDV`@@B@?VLbAzB`@`ARb@Vr@Nb@JZJXBD@F@@Ph@DJb@rAHTt@xBDNd@tAN^Vp@BHBHHTh@pA?@BFFLFNBHTf@Rb@Vj@j@jAl@lAP`@RX^j@RVJJPR`@`@DDVTDB@@l@b@v@^HDv@Xx@TxBf@ZFr@Tn@VNHZN\\Rh@^ZXTRj@l@jAvAx@fAh@t@lAfBh@t@h@t@FJFHFJHHLRHJFJb@n@TZT\\HJHNTZTZRZTZTZl@z@`CjDV\\T\\V\\V^FLr@bAX`@V\\PVNTb@l@h@v@`@l@X^p@`AlAfBV\\T^V\\T^^h@LP@?LP`@l@V^V^TZ@BFHPTV^X`@V^@@T^X^X^V^`@f@FJHJPPt@v@x@v@pAhAt@n@l@f@z@v@j@h@^`@^d@Zd@R\\RZj@`Ah@`AhAnBZj@HLBFf@z@DFHL\\l@PZP\\RZXf@FJ@BJNdAfB`@t@t@pAf@|@Xd@t@pAr@bAh@v@LNLNX^VXVXTVVTTVVTTRVTVRTR@?VRDDLH@@JHbAt@r@f@DBj@d@ZRXTZR\\XHD?@JFZVXTZRXTZTXTVPBBZT\\Vn@d@j@d@@@LJNLNJVT^`@@@BBJLJLHLZj@N\\Rh@BJJ\\Ll@Hh@Ht@?F?LBr@?^@D?Z?\\?J?J?B@R@V@DBJBDBDBDBD@?BDBBBBFB@@B@D@D?D?D?D?FAFCHCFCBEBGFIBKDODMFQFS@C@A@C@A@?BA@?@?B?B@"
                        },
                        startLocation: {
                            lat: 43.7043845,
                            lng: 7.257566799999999
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,4 km",
                            value: 391
                        },
                        duration: {
                            text: "2 minutes",
                            value: 97
                        },
                        endLocation: {
                            lat: 43.6702281,
                            lng: 7.214585
                        },
                        htmlInstructions: "Prendre \u003cb\u003eà droite\u003c/b\u003e sur \u003cb\u003eAv. Edouard Grinda\u003c/b\u003e",
                        maneuver: "turn-right",
                        polyline: {
                            points: "cupiG}{`k@FB@@?@`@pAVbABHz@zCFRPj@H\\b@vA@F@BBDBDBFTX@@\\^BDBD@BJZTbABNJd@BHRr@"
                        },
                        startLocation: {
                            lat: 43.6720155,
                            lng: 7.218711099999999
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,9 km",
                            value: 897
                        },
                        duration: {
                            text: "3 minutes",
                            value: 150
                        },
                        endLocation: {
                            lat: 43.6715783,
                            lng: 7.2035881
                        },
                        htmlInstructions: "Continuer tout droit sur \u003cb\u003eRte de Grenoble\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAv. Valéry Giscard d'Estaing\u003c/b\u003e",
                        maneuver: "straight",
                        polyline: {
                            points: "}ipiGcb`k@Cx@ShDE\\Gx@GdAAFCj@InACr@Gl@C`@I~AG|@KtAKdAu@|LCl@AXYhEGz@IvA]rFOxB"
                        },
                        startLocation: {
                            lat: 43.6702281,
                            lng: 7.214585
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "1,2 km",
                            value: 1159
                        },
                        duration: {
                            text: "1 minute",
                            value: 85
                        },
                        endLocation: {
                            lat: 43.6679237,
                            lng: 7.1963449
                        },
                        htmlInstructions: "À \u003cb\u003egauche\u003c/b\u003e, rejoindre \u003cb\u003eA8\u003c/b\u003e en direction de \u003cb\u003eMarseille\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCannes\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAntibes\u003c/b\u003e",
                        maneuver: "ramp-left",
                        polyline: {
                            points: "krpiGm}}j@DH@B@DBFFFHDD?B@JATK\\W\\WLI@ARKDAD?D@NEP?PDJHLLBH@BBFDJBHDRT`A@B@HDRD\\@H?D?T?JAVAXAFE`@ADG^Id@CNGX?@Mj@Sv@?DELAJEHEHGLGJIFGDIBIBI@M?ICGCKGIKIMG]CIAM?O@QBSBIDKFIFGDENILALATBD?HBN@FBD?@?B?NCNHPFXRDDHFXTJJHFBDPTNTJP@@LTN^Pb@N`@FTDNDNNn@H\\DPDPThABNNp@Ln@l@vCDNj@nCJj@BH"
                        },
                        startLocation: {
                            lat: 43.6715783,
                            lng: 7.2035881
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "156 km",
                            value: 156224
                        },
                        duration: {
                            text: "1 heure 26 min",
                            value: 5186
                        },
                        endLocation: {
                            lat: 43.4836056,
                            lng: 5.5389855
                        },
                        htmlInstructions: "Rester sur la file de \u003cb\u003egauche\u003c/b\u003e pour continuer sur \u003cb\u003eA8\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRoute à péage\u003c/div\u003e",
                        maneuver: "keep-left",
                        polyline: {
                            points: "o{oiGcp|j@J`@DPRhAf@zB@FNv@R~@Jd@Hf@XfBHj@Hj@L~@@PBNP~AH`ABZ?BBVF|@LrBPrCTnCJpALfAPzA@HBP@FFb@Jj@Jp@`@nBHh@H^Ll@DP\\bBXxARbARdA`@xBL~@T|AR~AVzB\\zCV~BP|ATtB@LHv@L`A?FFj@@FD\\H~@D\\H|@D\\D^H|@B\\J|@?FBVH|@D\\@R@JB^@@BZH|@B\\?@B\\H~@B\\@J@RH|@B^D\\B^D\\D^D\\D\\@LBNBRBJD\\F\\F\\F\\H\\F\\HZJZHZH\\JZHTL^JZJXJZJXJZJZJXJZFP\\bAVr@b@pA\\bANd@Vx@HXFVBFNn@@DHZBPBHBPDPJl@F\\D\\Hf@Db@DZB`@@D@L@P@NB^B`@B`@?P?J@^@\\?L?R?b@?~@?VAd@AXA`@Cz@EdAEnACb@A^C^A^EbAC^A`@C^A`@C^A`@C^A\\A^C`@A^C`@A^C^A`@C^A`@C^AP?NC^C`@AXA`@C`@A^A\\AJ?RAJ?ZAV?DA^?`@?^@^?|@@`@@\\@^@ZBZDx@Dl@D\\D^D^D\\D\\Hf@BVHTTpAFVNr@H`@H\\FVH\\FPFTFV@@FPJ\\Vt@L\\LXVj@JPLVRZJRLRX\\PR@@HLJJDDZ\\j@f@JJd@^TPRNHF?@B@VPBBNJNHLHPLRLj@ZhAh@h@TPHRFRJrBx@x@ZVJf@VJDNHTLVPJFDBFDFDJJDBRPVRJJLLRTf@h@TVRRJLVZDDd@h@PPt@|@JJvAzAVXTT\\Zv@t@zAtAtAhA`Ax@pBfB`AfANNBBZ^^d@j@r@v@`A`@h@t@`Aj@v@LPZb@Z`@HJJLZd@LNb@j@PV@?@B\\d@V\\RXz@hABDv@bARZJLJNNRRVNTLPBBDHX^X^HLh@r@DDr@`A@Br@~@p@|@^h@`ApANRx@dAb@l@X`@b@l@X`@PRjA~APTnBlCp@x@BDZ^DBVXTVTTHFRTTPPPVTFDd@^NJZTRNLJ@?XP^VTLJDB@ZPB@bAd@\\N^N\\LXJz@ZLDpAd@p@V\\L`@Nr@Xj@RFD^PXN^P`@VNHZTp@d@l@f@NNTTRTFFNN\\`@NRFHh@v@LRFHNVV`@R^`@z@N\\BF?@Th@HVFNL^J\\Tr@Lf@\\vAVpA@FXxATvAXxAF\\Lr@Hd@Jd@R|@BJPl@BLFNJX@BTp@L\\JVVh@FJBDR\\DFJLPZ\\f@`@d@TTf@f@h@d@RLRNNJXNVLf@TVJNFD@PF^Jb@JJ@FBXDj@F@?~AFr@BB?J?fABj@?|@@T?b@@v@@J?f@@`EFT?T@pA@vA@J@~CBH?H@T?bCBjABN?V?~ABnA@Z@j@?P?P@@?T?bADF?^DD?b@B\\DN@f@F@?\\Fl@Jd@JRDJBLBPFZH@@r@TF@DBF@DBf@RXJFDHBNFj@XTJNJRJTNRL`An@^Xt@l@PNRPt@t@dAhAb@f@`@h@r@bA`@l@\\j@`AhBVh@JRd@fAN\\FNHRPd@DJ@DFPFPDJTt@Lb@Tz@DPFVNp@@BNl@Jj@ZfBN`ANjA\\tCFv@PfBVpCT|BTdCHr@J`AR~AVbBHd@Ln@Ll@H`@Jb@T~@HZLb@Pj@Vr@FTJXRl@Xz@FRTj@?BRh@@BPf@FLDRLXHV?@Rf@BHv@zBDJN`@J\\Tn@Pd@HTRj@N`@?@DLHRL\\BHDJBH@BFPFRJVJZ@@DLJZFNd@rAHVN`@FRPb@Rn@JVBFBHJZvBfGh@xAJZXv@\\z@j@bBPj@Rh@Ph@@BRj@Lb@FNBHBJDPZdAJb@Ld@H`@?@J^Nx@Ll@Fb@F^FXFd@DZDTD\\Ht@BZBXFh@@NFn@Bb@Db@NxBDn@BV@JBb@@TJvA@NJrADr@B\\B^BX?HB^B\\?N@NBt@@J@Z@f@@B@bA@^@p@BtA@J@n@?@@V?L@R@f@@X@V?J@\\B^@T?@B|@Bd@@h@?D@V?N@p@?d@?Z@PAX?\\APAh@AVA`@A^C\\C`@Eb@ALAREZCZERAPG^Gd@G\\Id@AHOn@ERGZGZKb@]~ACLI\\G^CHETGZGXCPG^Kl@CLIn@Il@?@CNSlA[fBQjACPSdBCd@Eh@AX?BAN?LAL?L?@?Z@XFdA@PDt@F`@Hl@Jj@Hd@BNTrAb@dCHZRz@Lj@FTDRTbAJb@FZJ^HXV|@FNPj@Pf@Pf@Rn@JVN`@DPN^HTRl@DLb@lAFPDJFTZz@HXJV@FJVBHLZFRNb@z@dCJXBHp@jB@DVt@Nb@Xp@BHFNN^L\\HRP^HTHNR^NZP\\LTNTP\\NTNTNVBD`@j@PVPTPVRVNTPTRVLPRVRVPTPTPTLPLNFHPVRX^h@PVFHJN\\h@PZNRP\\JPR`@LTZp@Th@JR@Bl@~AVp@HVVx@JZHXHZHXBHJ`@@HPv@HXHd@BFLt@TpARvA@HJ~@N~AJpA@LJ|ADb@Dr@@F@ZD`@B\\DZH|@D\\BT@HF^?DDTDZPhADNF^FXF^Jd@Np@@DDPNj@FTFTV|@BF@BNd@JXd@rARh@JXFL^x@JTXh@LV^t@T`@Xd@X`@`@l@RXRVPV^b@X\\HLLLX\\j@r@FF|@fARTRVJLPRd@j@PRLNDDLNTXNPRV`@d@NRl@t@^b@h@n@\\`@VZXZDFDFRTBDBBJJNR^b@d@j@`@l@HJDFPTLTRXPX@BHNPXLTNXJPBFLVRb@LVHPBFHRJVLVXt@HTVx@Nd@Vx@DPRp@Jb@FRJ`@FVBHHVJ^Lf@DLJ^\\tADLFRFXNh@Nj@Jb@J^FR?BlAzEJ\\DNHZHXDPBNNj@BHFR@FBLDPHXDNDNHZH\\J^FVFRJb@J`@FP@FH^JZPr@Pr@Nh@FVFT@FHZJ\\FV@FHVH\\DLBJVbANj@FXLb@J`@DPBJFVDTDPDR@FF`@BP@H@HBRBTB`@@P?P@^?F@X?PAT?XAZAFANANAXAD?BCTE\\I`@G^CJENERENGNCFEPO\\ELIPMVKPQVOTc@f@WXIHONEFQNKJWTUPKLKHk@f@KJQPKHUVCBWXEDGHMNORQTU\\IHOXOVILKRKROXGLCFKVMXIVKTM\\Of@GRELENGVKb@ENI\\G\\Q|@QtAI~@AHCPCXANALCb@AVCf@Ab@?\\Af@AX?`A?j@?l@?R@XBzB?h@@H?B@tA?\\@f@@p@?V?X?^@dAB`BBxB?P@T?h@BxAD|D?f@DnA@n@FnA?TBl@B\\@VBRDh@Fr@Fh@Df@D\\DXF^T|AH^H\\Hd@Lb@Jd@DLLd@FRL`@L^Pf@DLDHBHHPLZFLBHLXFL@BR`@HNPZT^NVDHJNRZPTRXDFFHPTPPNPRTRTDDXXPPDDd@b@PPRPPPTRPNTTTRNNPNTRXXNNNLPRVX\\^PRPTJLTZNRRVJPNRPXJNPZT`@PXFJBFFJDFHPLVDHJTP^HPPb@LXFPL\\FNHPJ\\DLFPL`@FPNd@FRNj@BDPn@J\\J^HZJ^HTJ\\Pn@j@pBTx@X`AV|@@@d@bBJ^J\\Vz@Pn@Rl@@DNf@L\\JZ@?L`@L\\Vl@LXTh@LXFJBHP\\T`@LVPXXf@NVNTZd@TZHJNR\\d@p@x@FFXZ^`@TRDDLJNN\\ZJHRPTN\\VBBl@`@ZRPJ@@TLRLNHTLDBn@\\j@ZfB`ATLDB^RTLXPVLr@^DB`@Pb@Pp@XTHTHXHPFB@XFPDTFd@JJBVD^FH@B@VDTBB?RBB?TBb@DL@V@`@Dh@Bh@DV@b@DF?`AFF@V@pAH|@Fn@Fj@FTBXDVDTDVDVFTFVHRFTJTHTJLHLFNHPLTNZVLHTTVXVXJNJJX^NVR\\Vd@Xl@@@FLXn@Th@Rh@DLRj@N^HVb@pA^fAPj@Rl@Xx@Rn@Rl@^fAl@hB`@lAb@nAVr@BHVr@\\dAHRFPDJJXFN@FPd@JXJ\\Z|@Tn@Vt@L^Rl@DLZ`ADPL^HVTz@H^FVDNBNJb@Jj@Hf@Jh@Fh@D^@HDd@BV@LFn@@RHhADfA@l@@d@@t@?X?d@A^Ap@Al@AV?JALEl@Ez@Ed@E`@ALCRAJCNEZ?DE\\G^CPCRIh@E^CJC\\I|@Gf@Ej@AZC`@Cr@A`@?\\AD?dA@t@?F?f@Bd@?L@XBZBh@B`@@FDf@BZHl@D^BJBL@NFZDZH`@J`@FZ?BHXJ^Tv@L\\DNJVDNLZJTJTJTBDBHHNLRJTHLDJ@?PXLTRVNTNRRVJJDDNPPPRPHHHHPNZVLHPLDD`@Vl@\\d@TB@h@TVHTHNFD@TFJBLBRDXFF@`@FVBVBTB\\@T@B?L?T?V?R?VAXAd@C\\CHAVCL?TCVCVATARAV?X?J?`@BT@b@BH@J@J@`@FJBVDd@LD@TFJDD@VHTJTJTJTJRLTNTNB@JH\\XZVBBb@^b@d@HHHH@@NP\\^JJJJJLHHDDXXPPz@~@n@r@LLZ\\@@NPb@d@RRp@r@NPNPBBd@f@DDJJrAvAJLLLh@j@RRHJVVZ\\X\\r@r@BBd@h@NPLNTVPRNR`@h@^j@\\h@PZJTFJFLLXN\\JXFLBJBFL^HVTv@HZLj@@DH^DVDTDX@BD`@Hj@BRBV@F@VH|@@d@@T@L@L@n@@`@?|@?\\?d@?N?J?`@A^A~@AR?FCn@Al@E|@A^G|AA^A`@A\\Cl@ALA`@ARCh@C~@Cb@AZC|@A^A^A^A^A\\?^A^?Z?B?Z?b@?T?f@@`ABt@@h@Bv@@D@^B^@X?BD`@B\\BZ@H@TD^Fl@@LD\\D`@DZLx@BNF^Jj@Nx@DV@DDRBLFXHZ@BFXLb@DR\\rAJZNj@FTh@jBFRHZ^rA@?J`@Lb@DPFTNh@FXHX@Hj@xCLt@Jn@Hl@Jn@Hn@Hh@BRDX@DJn@Ff@@D?@Hf@DZPhAFf@@DN~@TdBDRNhARrAF^?DT|ADT@HPhAD^Jl@n@jEp@xED\\H`@R|AJn@^hCJr@f@jDh@pDJv@?@Jn@@JFh@Hl@J`ADd@BXBTB\\Fv@Dv@?LD|@DfA?Z@\\@z@?^?L?t@?\\?ZAl@?XA^?VAt@Cp@Ar@ATAp@AFAn@?LAb@Ah@AF?j@AZATAn@Ap@Ap@Cp@Az@Ad@CpA?PE`BAdAA\\C~@AfA?JAl@?r@?p@?R@n@@pABrBJvGDfD@\\@p@@X?ZBjB@b@@TB`A@n@D|@?@Dl@@RHv@Df@Fh@Fb@@H^nCDb@@@Hj@Hn@^lCHn@Hj@DTDXTdB`@vCF^NfANfABPVfBh@~DHn@BNR|ADZT|AHn@@@Hn@Ff@D`@D`@D^Dp@Dl@?BBp@?@@j@@f@?N?L?l@A`@A\\Ad@ADCh@C\\ARGn@Il@Gb@CJIj@EPG^GZGZYpAMf@?BMl@Ml@GVETMf@ADMj@[zAMl@I^AHMp@Ol@Ml@Mj@G\\CNI\\GZOz@CTCNSvAQtAKv@Gf@S|AOrAAFi@`EYbCS|AM|@E\\G^G\\Mp@Ml@I\\Md@Sn@O`@IVUl@[t@IPs@dBSd@gAnCc@fA[r@g@lASf@qA~Ca@bAMZKXGPQf@K\\K^IXIZGXK`@GZG`@GVGb@E^G`@CVGl@Gv@C^C^AXCl@?XAh@An@@`@?l@@`@@X@l@Bb@@VDd@?JFj@?BFh@@NPlAJl@FZBPNl@FZH\\J\\Pl@Ph@JZVx@Pj@\\hAHTf@~A~@vCN`@L`@Nh@L^BJFRFT@DHXBJDPFZH^BLHh@DTD\\?BD\\BRB`@?F@N@ZBt@@n@?@?^A^A\\?DA\\CXCb@AJCRCZG`@E\\CLMn@I\\IZI\\KZKZIRWn@Ub@IPQXOTCDOR[b@a@b@MJMLYVUNQLSNGDSL}@j@mAt@_@VMFcAn@_Al@MHy@f@e@Xq@b@c@VIFm@^i@\\]Ta@Xg@^A@SPa@\\QNIH]ZGDgD~CSRONSPq@r@UXOPORU^QVOVOXMXMXMXM\\Od@GRIZI\\G\\I\\G^EVGf@C^E`@El@ARAn@An@Af@@^@Z@^@\\Bd@BNDf@Dd@Hj@Nz@Ll@FTNh@L`@JXJVLXN\\NXZj@HLHLh@r@HLTZ~@hARTx@dA\\f@^j@LTJNR^NZHPN\\Nb@P`@Ld@L`@J`@FXNn@Hf@Hb@D`@Hl@Dd@Dh@Dp@Br@?DB|@?|@?RAf@Ab@AJAb@?DC`@Ed@Gt@Gj@CJANIb@}@|FcArGG^ETAHYhBs@rEu@rEQdAUzAUrAg@bDIh@Ij@QbAO`AQ`ASpAId@G^WzAmAnHK`@GRGVOl@[jAOj@a@vAQj@WbAY~@Qp@_@pAmAhEK\\m@zBGVUz@IXGXG^AFKj@?@Ih@E\\EVKz@IdAEv@EbAAf@?XAx@?~@@b@@`@B~@Bh@B\\BZ@TBV@JHp@Hp@PjALp@Jf@Lf@Nl@Pn@^jAr@~Bv@bCHVDPPh@FRBDPh@d@~A\\dARr@L\\FRXx@Z|@Xr@Zl@DHLZFJDFHNR`@`@p@Xd@RXFJLN^d@RXNPDBPTRTLL@@`@b@jAjA|@z@b@b@p@l@r@n@v@p@z@t@x@p@nA~@v@j@@@l@b@f@\\n@`@TPNHfBfAhAn@p@`@`@RbAj@j@VDBp@Zf@Tb@PD@l@Rt@T^J\\Fn@Ln@HXBZDp@B|@Dl@?l@Ar@Ah@Ej@Gl@Gd@Ix@Oj@O~@Y\\KLERGb@MJEh@Qf@On@STIREZITE@?TEVERC@?VCJAHAJ?HAVAT?NAZ?X@P@b@@H@r@HVBRDl@LVFTFl@R@?`@Nh@VZPTLDBNHNJXPd@\\\\VRLrBvATNFDvA`APLJH^V^XPLHFf@`@d@`@XXZZDFHHTZPRLRPTLVHHDJ@?NXLTLXNXLXRf@N^JZHVPd@HTVt@J^LXDN\\`AJ\\L\\DLJZZ|@Pb@Pb@NZLXLVLVNVPVNTDDJN`@j@FDHJPRPPPPTPZV\\TBBNJZR\\P\\P`Ah@|BjAh@VVLnAp@rAp@JFTJ`B|@NFNJ\\R@@^TJFRPHFB@`@^PNRRPPd@f@PRNPPVRV\\f@NVXb@R^Vd@Td@Tj@Vj@N`@DNRj@Pl@Lb@Rz@Pt@n@lC@HZpAXdAHVRn@LZHVHPVl@Tf@R`@Xd@LRJPZd@^f@d@l@\\\\NPXVt@l@n@d@^Tj@ZjE|B|Az@bB~@pAp@f@Xl@ZnBdA~A|@~@f@vAt@zEhCtAt@FDf@V|Az@~Ax@p@^RHXLb@PFBTJB@NFPDZJDBh@NPD`@J^HRFJBb@Hd@HZFF@b@H|@P^H@@b@HJBh@HNBF@n@N`@Jh@NFBRHRHPHf@T`@TJFZRRNb@\\`@^ZXPP\\^X^Z`@DDJPNTNTJRJNHPLVVh@HNHRRf@Ph@Nb@Nh@DP@@Rv@RbABHRdATlAHb@Ll@Px@`@rBNx@^fBLj@\\tAJ\\J^@DNd@@DL\\`@nAN^JTJXh@nAh@jAh@jALVh@jAh@lAZp@\\r@\\p@\\n@T^HLJRRXLTPTNTJLFHb@f@@@p@r@h@h@^Z\\Zb@Zf@Z?@h@\\h@Xd@VTJDBh@Pz@ZZJD@XH@?ZHtAZJ@JBfARvAXXDd@J|@Pt@NJBb@Hb@HH@VFXFj@JVDTFRDj@J^H`@H`@Ff@JdAPRBp@F`@Bb@@T?T?t@CLAZEVE`@Gh@KJCJEZKDARIFCNEPKVKZQj@_@@?ZUJIt@k@ROhA}@dAy@\\Y\\WNMLKVQ^Yd@_@\\WDCHGPMPIXQRIFEXK\\MVKLCXGHCb@IZE`@GF?@AN?TAVAF?RAF?@?^@@?V@XB\\DXBXFH@^JPFVHPDZLLFHBRJTLLFDD^THFf@^DD`@^`@`@^d@VZV^RVX^LPTZFJLNV^@@`@j@b@h@V^PTHJp@`AFJf@z@h@`A`@v@d@fAPb@Vr@J\\LZPn@Nj@FTDJJb@H\\P`AJd@Jl@VzADN?B\\fBF\\VxAl@fDFh@Hl@Hn@@?@NZhCXxBZvBFb@Jl@?BDTDP?BDTn@vCd@pBn@bCJZLl@TlADNXxALl@H^Z|ALf@DPPz@FTDNH\\?@Nj@Nl@XbANh@FNJ^BJTt@J\\Ph@@BNd@Ph@DHL\\Rh@Pf@HRHRRf@FNJVXr@NZLZLXNXFLTf@^v@@Df@`AJTR`@n@pAJRh@dALX^t@b@|@FJ`@x@h@dANX\\t@n@lARd@LTHNTd@Td@Vd@Tf@BFVf@l@jAn@rAR^LXPZ@DHPPZZn@NXDJ^t@Vf@JTJTBDJRf@bA^t@Td@BBBDJRNZdAtBDHP\\b@~@N\\@B@@FNHP@BDJBDZx@JXXz@Ph@DLFPDLLd@Jd@HVLf@BNDNHb@Lh@Fb@Lp@FZD\\Fb@F\\Fh@@NDZFr@Fd@Dj@@R@JB`@B^Bp@@P@R@\\@`@Bp@@bA@l@@n@@`ABrA?L@nADhC@~@?`@@N?n@@h@?bA?f@?NAX?l@CdAC`ACv@Ch@Ct@Cj@Ex@Ej@GdAGv@Ej@CVCZCXI`AIt@CXE`@G`@Gl@Gd@M`AE\\CLIj@Gf@G^EVCPMp@O|@G`@I`@Or@Ib@UfACLKf@Oj@[tAOp@ENK`@M\\IZMb@Md@Mb@Ob@EPEJGRWt@Y|@Yt@Sj@]~@Qd@Qb@GPO\\_@~@Sf@ELCDy@tBg@jAIRWl@a@~@y@nBo@zAc@bASh@Wl@KT]|@MZMZ[t@CHa@fA?@g@pASh@Qh@A?CFa@jAQf@Qj@A@Oh@GP[~@M`@M`@_@pAYdAK^_@xAEJMf@S|@e@vBENOt@ERIXIf@Mj@Q~@EZIb@Ov@QbAQlAG^G^Kp@Ir@Ih@EZOlAEb@E\\In@O~ACRMvAIx@I`AAZM|AEp@AVEj@Ch@Ez@Ep@?PEr@Cx@EdAEtAC|AAv@A^Ad@?d@AX?R?FAh@?d@AvA@bB?bB@vAB~A@`@@d@BpABfA@b@F|AB`@HrBFnAHtAJbBDd@B^H|@Fz@BVXdDDb@@J@LFj@Ht@JjALfAJ`A@JFj@BTJ~@Fl@LnAL`AJ`AV`CHv@TxBLhALrA`@dEBTBZHn@H|@BVNjBLxAFr@B^BZB^T`DDf@Dv@LlBDv@@JJrBHzAHrBDtAD`ADvAD`BD`CDtBBlA@bA?p@@p@?P?^?X@V?|@?T?v@@R?p@?d@?J?\\?P?p@?X?B?R?\\?l@?V?vA?H?N?~@?RA~A?vC?Z?R?\\?^AV?`D?H?p@?xA?x@?f@@`@?Z?hABxA?T@j@?`@@V?T@Z@TBfABt@DbB@J@f@Bl@@JBb@@\\DbA@?D~@B`@Dd@@JLtBBZD^?DFj@Dh@Fh@@N?BFf@?DTvB?DDXFd@@HPzAFd@PpABN@DDVLx@PfA@JZlBFXFXP`ATfAJl@DNJj@\\zABJT~@@HRv@VdA^tA@B\\nAFVFTZbAl@tB`@tAl@rBDJRn@^jABL\\fANh@Nd@Nh@DNVdAV~@Lj@BJFXJb@H\\F\\Jn@Hd@PbAJz@L`AJ`AJ~@JzADj@Dz@Dn@Br@@ZBdA@bA?P?jA?`AAdAAdACbAEz@ARG~@ItAMpAKlAGh@Gl@OnA?DS~AWlBMz@SzAE\\Mx@_@tCSvAGb@Kt@o@|EWnBG\\Kx@E\\YnBOfAOjAIl@S|AStA?FCLEXAFAJQjAM~@E`@G^E\\Gb@EVE^i@xDObAKz@G^E\\M|@Mz@E`@U|AQxAM|@Mx@M|@M`Aq@dFCPCPQpAY|BStAUlBS`BK~@Ir@MdAIr@Ir@Ej@K~@E`@Gn@KpAGj@ANQtBIrAMlBGbAIrACx@Ep@AXEvAC|@ARChAArAAXAv@A~A?@?pB?L@~A@`A?NBdA@dA@`@@X?F@J?PB\\DdABn@Fz@FdAH`ABb@@JBTDb@LrA?BHn@@LF^BZ@H@?@NT~ALx@Hh@Jl@RbAH`@DRLl@Lh@H`@Lh@Nn@@DJ`@L`@BJLb@L`@HZDNTp@Lb@Z|@BDRl@l@dBXt@L\\Rf@BJTh@LZVr@N^r@fBjB|EXt@x@|BNb@HTHRRf@Ph@d@tA@DNb@JZXx@FRh@dBBDNj@Ph@DNPl@@BFTRt@`@xAJ^Lf@f@rBFVZpAH\\R`ANp@Jh@XtAPbAP~@\\fBHf@V~ALz@BR@BDVPrAVlB@DFh@Hn@@FNtA@@Fl@Fn@Hn@Fl@Dh@?@@JBTFf@PzBFr@@THbAFlAFfADp@?BDfABjADpABtA?B@bA?x@?T?V?r@Az@Cx@Cz@CdAEdAA\\A\\En@ARC\\Cf@?FEj@Cb@C`@YrFCp@?BCh@A|@Af@?jB?vA@B?`@Bx@@d@BXBh@Df@Fz@Fl@BRBZFb@Fd@F`@F`@F^VrAJ`@Hb@Pn@FRHXNd@Rp@Tl@FRZx@FLFPJTLXFLN^DFNZJTHPjA`CXl@JRf@dAFNTh@FJXt@Tl@BFZv@?BTr@Tt@BHNb@@FNj@@FNf@Pv@Ln@FZDRJp@Lr@BRDPFb@J`AJx@JlAFv@BZBR?LB`@@BDfABv@@H@f@@v@@V?V?\\?j@Aj@?l@?ZAz@A\\?\\Ab@?HAv@AZAz@?PARAj@ATAv@Ah@?BEbBAj@?D?n@?@Ah@Ab@?RAp@?JAt@ApA?X?|@?v@?x@B~A@h@?D@h@Bn@B`ABj@Bl@@d@Dh@@R@PDj@B\\?BBZ@TDh@D`@BR@ND^Fn@Fj@@LHn@Fd@?DFb@@FFb@Jn@Hf@@HF`@DPF^BJDVLl@DVLl@J^BLFTBP@B?@Rz@Tv@ZjAHZDJHX@BFTXx@L`@Nb@Rj@Vl@DLHTFLLX^~@LT\\v@h@fAP\\BDXh@T`@\\l@\\j@FJFJHLFJXb@RZr@fAn@bAbBfCR\\h@v@f@v@PXHLVb@Zh@JRLRFLHPPZP\\r@vATh@\\v@JTZr@^~@Vp@Tr@^dA\\dANh@FNRr@Tv@f@pBBHLj@R~@Pt@DTTfAVnA\\hBh@tC\\vBHl@N`ANbAL~@F`@L~@Fr@FZVfCHv@@@Fl@?@?Dh@pFVpCLnAj@`HDj@Dj@Fn@h@jHFt@L~AFp@B^NrANrAHl@PbAJl@Lv@Jd@H\\XlATx@HZVx@Tp@@BPd@FPJV?@Zt@^x@Zn@PZJRLVT^\\h@^j@`@j@Z`@LNFJNPb@d@f@h@^\\RRLJZVNL^XNJn@d@HD\\Tp@\\ZNf@VPF`@P`@N@@VHfA\\VFRFVFNBLDJ@RDTDTDTD\\F`@DXFv@Hb@B@?P@X@XBh@@^?lA@\\?^Ab@ATATAXATAHAJAl@Ej@ILATCNCNAVERCn@Kh@KTEdAUZGJCTGJCLCVGTGd@IZIZIf@M^IJCFCFA\\IJCFCFANGJCTGXIb@IJCZINCbAQJCPCNCNAFADAB?RCVCVAj@E\\AV?b@AH?H?H?H?J@H?J@N?V@@@P@ZBTBT@NBH@XDRBTFPBHBB@TDLBJDLBJBB@RFJDTHD@JDHBRJTHXLPHVNTLB@LHTLVPRLJFFDZVLHRPHFFFVRPPTRRPf@d@@@PRPPPRRRRTPRJNDDRRPVPRZ`@FHNTDF@@HLr@dAFJHJR^NTR^BFJNFN^x@BFJTDJZv@HTDPHVL^Jb@FTJ`@J`@FXP`ANz@LdADb@BZBPBX?BB^Dl@@N@XDx@@`@?B@b@Bf@@dABjBBp@@n@?H@XD|ABz@Dz@B`@@LBh@Dh@Fj@?JJ|@L|@Lz@Ll@BRFTLh@Lh@@DNj@XbA\\hAVv@Tt@Pf@FNb@pA?@Rj@HVRl@\\jANl@HZH\\Nn@Jj@Jj@N~@?DHt@Fd@Db@F`A@J@^@NBp@B|@?tA?r@At@E`AGjAIrAALI|@CV?FAJCNEh@QlBEb@Gt@AHGh@Ej@I`AI~@APOzAIhAG|@C\\ATEd@E|@El@Ct@Ez@Cx@Cp@Ap@AVAj@CnA?l@At@?hA?R?d@?V?N?j@@z@BbB@t@@b@?@Bh@@f@Bv@D|@Dr@Bd@HhAB\\B^@NDl@Hr@Df@JhANtAF`@BLJ~@Jn@VbBBNBPHd@VrADVDTP|@F\\ZzA@B^`BPt@Pt@Lf@Pr@BFLh@Lb@Rt@@FVz@V~@Pl@`@lA@DHXXx@Rl@Vv@^`ARj@Vr@^bAXr@p@fBf@nAVn@Vn@h@nAh@pAPb@N\\b@fA^~@`A~Bd@fARf@h@nAHR`@~@Rf@p@~A\\x@FNz@pBJX@@z@tBLZ^|@Vl@P`@N`@d@fANZXt@Zr@L\\BBn@|AN\\BHdAfCDJTj@b@`AN`@\\z@JVL\\Pf@Rl@HVBFPn@JZHXFXHXFVPx@Pv@Nt@Hd@P`ANfANjAFh@H|@JhADp@J`BDdAH~BHrDBtATnK`@tRJjFTvKDvA?J@`@@`@@\\BtABfA@XBbBFpB?`@B~@DrABjB@f@JxD@p@@r@DzA?NFzB@|@BdA?\\Bx@@r@@~B@jB@rA?L?fA@L?p@@`@?~@?bA?P@`B@p@?lB@r@?dA@`A?v@@z@?b@?X@XBzBBhABlBFzD@n@@z@@`@@ZBrA@d@@d@@b@BnB@t@B|A@l@BtABdABxA?^BhAB|@D|AB~@?HD~@B`AFvAD`ALxBBb@@VH`A@VLpAJhADh@Ht@@HHv@Jv@Hr@NdA@LDPFb@XdBV|ALr@Lt@VlA@BZ`BJb@Nr@Pp@Ll@Pr@Nn@Rv@BLFXV`ABFZnA\\rADRHVNl@Nj@DLBJDJRv@Nj@Pj@@F\\nA^vANl@@?Lj@HZBPLh@Lp@Hb@?@H^Fh@L`AHv@Ff@@VBV@TBZBh@B|@Bj@@V?V@F?T?R?X?@ALAp@AX?\\ARA\\AREn@?JEd@En@ABI`AEX?DSxAIn@Il@E\\Mv@AFKv@If@ADGj@ABK|@K~@AHEl@E`@Gv@?HAXC^AVC|@Ap@?P?f@?X?z@@L?N@n@@Z@D@`@Dp@F`ADf@BRFn@Fb@Fd@@FHf@DXDRDTLl@H`@HZHZDNLf@Nf@Pl@DJFRPj@HTPh@J\\Xz@^fAZfAHVDNRx@L`@DPH`@Jb@H^F`@FXF\\BRJn@DVJ|@Ht@Dp@DZ@\\BZB`@@Z@^Bj@@r@@b@?\\?\\?\\?v@Aj@A^Ct@?JAN?ZUvFIhBElAEbAAr@C`ACpAAhA?d@?|@?`@?b@@\\?`@@f@?HBp@Br@@^Dj@B`@@XBVBd@B`@BZFx@Dd@D^@NJ`AJnAFj@Fb@?@@LP~A@PH|@@NBNB^Bd@@JBX?D?BB`@@Z@\\?@Bp@?H@^?^?\\?d@?DA|@?BCp@A^A^C`@A^AFG~@CXEt@Kx@Gp@In@Mx@Mz@ERKf@CNERMp@Ol@WdA[nA]hA_@bAw@xBKXc@~@Q\\MV]l@QX]f@SX_@f@UXUX[ZOPk@j@UR_@Ze@d@k@d@q@l@k@h@YXc@f@[ZQVq@z@U\\i@z@MTIRGHUd@a@~@_@`AM`@Y~@Qj@S`AOn@I`@Kj@Q`Ak@lDSjAOx@Ml@ABMf@CLI\\?@K\\Sr@KVITOd@]x@Wp@_@~@[r@m@zAQd@IRKZWv@Wz@Qt@K`@I\\Q|@Kp@Mz@MbAKz@E`@Gl@CVGx@ALKdBAVIbBCbAAZCfA?XAzA?dA@bA@bA?T@h@DhABt@HjBH`ADh@B`@BRF|@N|AVrBBVX|BZ|BTbBTbBHj@h@~D?@VfBVlBPtABJHf@R~AJ~@LdAJz@NpAFn@JhA@N?@P~BJpAF|@?LHjAHzA?L@H?@@P?HB`@FzATxGFvADpAHvBJlCH|BH`CHhCJnCH|BJnCP`FF~A@TDdAPtF@F@f@Bp@DhAHfBFtB?@D`AH~B@HB~@@TBr@FvABp@JrCBx@LzDF~A?@H`CHxCBdA?B@VBpA@h@@p@@l@?^@|@@p@?bBA|AAzAA`A?BCnACr@?NGdBEtAKfBAJ?LIhAIrAM`BGx@ALGv@KfAAHIt@I|@Kz@W`CQvAe@rDUbBQnAk@dEe@bD]`CMv@E^If@YzBOpAIp@ABKfAIv@KlACVALC^ANEl@E~@AVAVAX?JAb@Cj@?PA|@?V?v@?lA@Z@d@?Z@R@n@F`ABd@@`@LnBJjAD\\D\\Fj@L~@F^DVHb@DT@HNz@H\\F^Pv@Pv@Rv@HZJ`@\\nARt@Nf@X|@Pj@ZdAFNLb@JZHT@DHVJZJX?@JXHXJX@DFTTt@Tt@FRV|@Tx@Pv@VlAR`ANz@Jz@Fd@Dj@Db@B^@NDb@Bj@BbA@r@?v@?h@?L?`@?@A\\AR?LA\\C`@AZEr@IxAEl@C^Gv@CXKdAKv@Kz@OdAADIp@ABUlAOv@G\\Op@CHOt@Sv@Mb@Sx@M`@ITIXQb@GRQf@a@dASf@KVO\\MZGLKVKTMV]r@[n@Sb@Yh@Yj@MTQ\\KRGJEHOZOVS`@MTSb@GNSb@KRQ`@IPO\\KVGREFWr@Ob@Sl@IXKZIZIXGTABI^GZIXAHERI\\EVG\\EPALEPGd@G`@E\\Gd@E\\CVCZE\\CZC\\ATABEr@Cj@Cb@An@AJAZ?^A^?D?d@Aj@?n@?R?T@`@@\\@b@?R?DBx@Bn@?D@TBb@DfABf@@LTdDJ~AD^Dl@L`B@DDf@Fp@Fz@Dh@Dj@RdDB`@Bl@@J@P?F?RBr@?V@X?D?L?d@@\\Ad@?`@AP?L?HAL?D?LAJCj@CZAZALALCTANEf@CJ?DCTCRADETG`@If@?@GZG\\Qv@S`AM`@Op@Qr@[nAAFa@bBCPGZGVCLAJK`@G\\Gb@Ih@If@Ip@?FGd@Ef@Gv@Iz@En@Et@G|@Ep@IjAEh@ALCb@Gv@Gn@CVEd@CRKz@Kx@G^Il@Kj@G\\EXI\\GZI\\GZGXKd@IXI\\I\\IVGXGRe@~AKb@GNEPQj@Of@Y`AGPOh@ELIZMb@ELCLGNM`@Sv@I\\Qr@K\\Mf@Mj@Qt@Kl@ABKh@Id@Kj@G\\Kv@?BOfAGj@Gb@El@AF?DCRG|@Cd@C`@Et@A^Af@C`@?\\A^Ap@?d@Ar@@d@?d@?\\Bz@?PDlABr@Dx@FhAJrABZ@HJtA@DDh@?@Hp@LrALpAJfADf@H|@Ff@Fr@Bb@Df@B^Dd@BXDv@FdADv@FpABn@?LB|@Bn@@Z@|@?H?r@@l@?L?|@?VAd@?z@?@A|@A^?BCx@AZ?JCp@GhAInBG|@C\\CRAJC\\C\\I|@C\\Kx@I|@E\\CVADE\\AJIp@Kx@CTGd@]vCALCNE^M~@Ir@E`@EZE\\E\\E`@OxAOxAI|@Gn@KpAEh@IbAGz@MfBAZGlA?HCd@IvBGzA?ZAL?JG|BCp@E~BAl@Av@A\\Cz@Ab@EjBATCj@El@Cd@IhAEb@E`@CZIt@G`@Il@Ij@I^QfAOv@CLI^UdACLGXI^Sz@I^Kd@AHIXI^G\\I`@GTO~@Gb@CNE\\E\\E\\EXGn@Er@Cb@C\\C^APAl@E~@Cv@CbAAf@Cr@Cf@AZCZC`@C\\CZC^CVE\\Iz@G\\EZG\\Kj@Kb@CLGTGZI\\IVM`@IXQl@?@KXWv@GLGRKXc@hA]~@ABQd@_@bAa@hAY~@Ur@]hAUbACJI^Mb@Or@w@hEOp@GXOv@Qz@UdAMp@Qx@Ot@IZGZSx@Sx@K^ITI\\KXOd@CHCHKXe@lAKXKVMXOZKVMVMXMXMV?@KTINCFMVMXMXKVMVMXKXMXKVKXKZKXKXIXKZENCJIZI\\I\\GVGZG\\I\\E\\EXEZEZCNANGl@Gj@Ev@Ch@Cp@ClAAf@?d@?n@@X@fABp@B\\F`AH|@JdAJ|@RlABLHj@Lp@Lh@R`Aj@fCVbALf@Ll@Nl@Jf@Px@Lj@Jl@Lr@RlAHt@Hj@@HDb@B^@DF`ADl@@R@V@^@T@X?b@@^?H?`@?t@AV?TCjACn@CT?JARGt@Ed@Cb@It@?@In@Gh@ALQpAQhAIf@EXSpAEZGVKt@W|AMx@Kv@QdAOlACLOjAGf@Il@AHE^K|@Gf@OxAGt@AHCj@Eb@El@?DCh@El@AN?NAJCp@AHAd@A\\A\\AV?RA^?p@AP@\\A`A@p@?n@@@@lABj@@v@@H@XBd@Bd@Bb@?F@HDp@Dt@HfA@FDf@Dp@Fj@BXBZFt@@HD^PpBJxADd@Bb@BZ?BF~@Dx@B^B`@Bx@@\\Bv@?J@^?P@d@?f@?^@^Ap@AfBAj@AZCjAEhAE~@Ej@K|AGv@KbAMlAUhBSrAG^Mr@UfAUhAGVGVOr@Sv@Md@c@bBw@|Cc@bBMb@Qv@GVIXOt@GV[tA?@Id@Mr@Kp@Kn@QlAM~@CRKfAKfACZGt@Cf@SbEAn@AbAAj@CbB?j@?j@?jA?R@x@BzADfBBp@D~A?D@\\@\\B^?JDz@@N@N@X@D?J@P@R@L@V@HB^B^B`@B^B`@B^D`@@ZDb@Db@B^D^@J@R?@BZFf@Dd@Db@Dd@Dd@D`@Dd@BXDZBTBT@J@JBLBTD^D^D^D^D^D^D^F^D^D^D^D^D^F^D^D^D^D\\D^D^D^F^D^D`@D^BP@JD^BNBRD\\@NBND\\D\\@JBRDZD^D\\D\\DZD^D\\DZBVBRP~AfAdJ@NPxAD^RdBBNBNBTB\\D\\D^BL@N@LBRH|@JhADl@D^@X@BB^B\\@^B\\@P@L@^B^@\\@`@@Z@J@R@^?N?J@T@Z?b@@r@@t@?\\@^?^?^?\\?^?^?b@?v@A^?X?^?^?\\A^?^?\\?^Al@A|AAlB?f@?V?\\A^?\\?^?^?^?Z?^?^?`@?^?^@\\?^?\\?^@\\?^?`@@\\?^?^@\\?^?^?^@^?\\@\\?`@?^@\\?^?^@\\?^?^@^?\\?^@^?\\?\\@^?\\?^@^?^?^@\\?^?^?^@\\?\\?`@?\\@\\?^?`@?\\?^?\\?\\?\\?\\?\\?\\?\\?\\?\\?\\?^?\\?\\A\\?\\?^?\\A\\?\\A\\?\\?\\A^?^A^A^?\\A^A^A^?\\A^A^A\\A^A^A^A^A^AZC`@A\\AXCd@A\\C^A\\C^A^CZC`@A\\ANALC\\Cb@CZC`@C\\CZC^Gn@Ep@E^E`@C^E^E^Iv@Ef@G^E^C\\G^E^E\\E^G^G`@E^E\\E\\G^E^G^E\\G^Kz@G`@M|@O|@E^G\\c@|CCXADG^E\\G^G\\E^G^E\\G^E^G^E\\G^E\\E^G^E^E\\E^G^E^E\\E^E\\E^E^E^E^C\\G`@C\\K`AE\\O~AC^E^C`@E\\E^C^E^C`@I~@K`BGv@ADK`BC^C^C^C`@C`@C^C^C\\C`@C`@A^I~AC`@C^G`BE|@A^Cd@?JALAJCbAATA\\C~@AXA^Cp@Cz@C|@?@Cp@Cz@Ar@AZAXEpAE`BCpACf@?VAVC~@GdCEvAEpACxAElAS~He@zQQfGKnBAVEv@El@IvACVGp@Eb@AREXIv@ANGd@AHS|AIl@QjAABObAIf@EXId@Y`BKj@Ij@_@fCEVG^EZMdAEXE\\Gd@E\\E`@E`@C^EVCd@E`@C^C^C^A^C`@A^APEnAA`@A\\A`@A`@A^?`@A^?h@Av@?`@?`@A|@@bA?^?`@@^?X?F@^?`@@^@`@@`@?\\@^FnBJtB@\\B`@B^@^B^B\\Db@Dn@Dp@B^BXBTHbANpBDj@BNB`@D^D^B^D^B^BXNvA@R?B@B@NBZ@JFv@@@HjAB^BRDl@BPB\\B^B^V|D@\\@N@PLfC@`@DzAFjB@l@?`@@^?^@`A@`A?d@?V?t@?`@?fAA`@?\\?\\A`@A\\?`@A^AZCvAEhAAL?L?BARCj@C\\A^C`@C\\AZ?@C^C`@C^ANANEf@ATE`@C\\E^C^E\\APALE`@EZCRAJE\\?@ANCLCPAJE^E^E\\CNCLE^G^EV?DG^?@GXE^G\\G\\G\\ABAHCPGZ?@GZENCNI^EZIZI\\G\\GRETGTENQp@I\\Oh@KZK\\M`@ELEJYv@ENKV[x@A@MXMXMXMXOXMVQ^MRMVOXOVWf@GHMVQXOXKPCDOZMTOXQ\\KPIPQ`@INCFMXMZKZKZM\\GPAHM\\IZOl@CJADMj@Ml@CPOp@EXGZKx@G\\EZEXABE\\E\\G\\G\\ANCNG\\G\\G\\EVAJGXG\\G\\I^GXIb@ADK`@Kb@Ux@Mb@A@Sp@Un@CFWp@MXMXMXMVOXMVOVMTOVOTQXW`@Yb@sAhBQX]b@MRc@l@]d@_@j@OT[f@S\\A@QVGLOTMTMTOVMTKVOVKTMXMVKVIPUh@GLKXKVKXKXIXKXKXIXKZIXK\\IZIZIZK\\GZI\\ABGVGZIZGZGZGZG\\GZG\\GZG\\G\\EZG\\E\\GZE^EZG\\E^E\\EZE^E\\C\\E\\E`@C\\EZALAPC\\C\\?@Iz@APALC^C^C\\A^C`@C\\A^C^A\\C^E|@A^C~@A^C^A\\?\\C\\?\\A^AZA^AZA^?^A^A^C|A?`@A^A^?VAp@AR?\\Ab@?JEnBC`C?PAp@Cz@CrB?@An@Cv@Ab@A\\A\\A^AZA\\A^A\\A\\C\\?@AZA^E|@C^A\\C\\C^C\\A^KxAE\\C\\C\\?@CZC\\E\\CXE\\CZKz@AFCRC\\G\\EZEZE\\GZEZABAJCLGZGZG^IZGZI\\IZIZIX?@KZIZKXKXUr@MXKXMXMXMXMVINCHOVABKROVOVOTOTOTOPQVSV]d@UVQRa@d@SRABOLQRQREDKLQRYXKJc@f@OPIHGHSRQRQRORCBMLMPA@QRGFY\\KLCDQTOPORORKJEFEHGFQVA@MPOT_@l@_@j@OROVSZO\\ILMTEDGLOVMTILCHMTUd@c@v@KVCDIPMVKVEHIP_@|@Uf@MXSh@EJA@MXITIPUr@Sf@Od@KZUt@Y~@Qj@GRIXMd@Sv@EPU`AS|@IVc@rB]dBMl@G\\WpASbAYxAKj@GZId@a@rBMj@Qz@Qz@Sz@Qt@[nAOh@Sr@Oj@Qh@M`@KZKZWv@_@dAe@nAWl@Uj@O\\MXELUh@Sf@S`@u@bBc@`A[r@k@nAKVUf@Sb@Sb@aCnFm@rAqClGA@m@vAUf@u@fBKVeAbCeAhCq@~Ag@lA{CtHM^{AxDGNc@jAUl@Sh@A@i@vA_@dACFo@dBc@nASj@c@lASf@Qj@Ob@{AjEKZ_@bAQj@KXi@`Bw@`CGRGPGPADGRM\\iB~FQd@q@zBMb@M^ELENMd@GP_@jAi@lBIV[bAs@dCSv@M^Oh@Ql@Uz@_AjDeAxDIZu@rCYfA?@[pAEJSx@Md@?@e@hB]vAU|@Kb@On@w@bDMd@w@hD[xAU~@EPw@lDWnAS`Ae@tBGZCNENGZQx@IZG^k@rCQv@s@vDQx@UnAUdAETa@xBQ`AKh@m@hDi@zCGX_@zBOz@]xB_@vBOz@e@vC[nBKr@Ij@QjAg@dDOdAIh@If@SxASxAIh@Kr@CT_@lCOnAU~AEb@Gd@WrBEZOhAMjAE\\GZEf@K|@QzAS|AUxB]|COtAKbAq@pGKdAOxAMxAOzAIz@Gz@OxAQxBEZMzAKzAMzAKzAOfBIpAC\\Cb@Gv@M|BKjBG`AGnAAT?NOdDAl@GxAAj@?DCp@Ah@EvAAz@CxA?H?^AbAA^?b@?z@?n@?jA?xB@z@?L@bA?v@D`B@f@?b@DrBDzAB~@H|BHfCBp@J|BHhBHpBBl@f@rLBv@B~@J~C@l@@n@B~@@^@~@@z@?~@?z@?~@?X?p@ApAC~AC|@A~@E~AEbAEdAIxAIlAQbCM|AEd@Gn@AFGf@Gn@K`AK|@M|@Mx@AHETANKj@?BKl@G\\Y`B]lBWjAMj@AFMh@Or@I\\Kb@Oh@Kb@GTSv@Sv@Ux@Sp@Ql@Sr@]dA?@Of@Sl@AFc@tA]dAe@rA[~@A@e@tAO^CHQh@O`@O`@w@xBO`@e@nAg@rA[x@a@hAYr@M^Qb@[~@q@hBg@vAITQj@g@zASl@a@nAQn@AB[fAQl@e@`BGVOh@Mj@a@dBERG\\A?G\\ETQv@QfAOz@M|@QhAG`@KbAOpAIr@E`@QdCGz@Cd@G~@EdAEnACjAA^C~AAt@?H?p@?l@?L?`@?n@@t@@t@@t@?DB`ABl@DrA@ZRlDPxBFt@HfAB`@BV@BB`@Fl@Hv@Dd@TbCJ`AJnAZpDL~AL~ARnC?HBd@Dj@Dp@Dv@?H@RFlA@\\@d@B|@@b@Bt@@^@|A@`A?b@?d@?r@?`@A~@?z@A`@A^A|@C~@A^A^A^A\\A^C\\A`@CZAVCh@G~@K|AKzAQnBAJOrA?FQxASzAMz@M|@ObAEREXKn@CPGZMt@Ib@GZWtAYzASbAKj@G\\S`AYvAOx@Ox@Qz@ALSjAOx@Mz@M~@Kz@Kz@?@MzAI|@C\\AVANEr@?@GnAALExA?BC~@?^A|AA~AB~A?LBpABt@@d@FnA?JDx@Db@@TDn@BTD^H|@LjAL`A@FNnARjADPVzA@FXrALl@Rz@FTJ`@FV^~AHX^|A^~APr@HZDPLf@@HZrAPr@XvAZrALl@Pz@DVP|@R`A\\jBJn@N`ATpAD^Hf@D^Hn@Jv@TfBJz@TtBN|ARtBL~ANvBFdAJhBDp@B^@f@@TDn@H|BBxADbBBl@?B@z@@TBzA?B@l@@d@@v@?B@p@Br@@l@@fA@z@@P@r@@j@@|@@F@h@BbABn@?@Bl@?@FnADf@@XDf@L|A?BHt@PxA?FHl@Hf@Lv@T|ABLFZP~@Nl@DR?BBFLj@DPFRNn@f@jBJZFVTv@Tt@J^FTHT@FHVDLBLJZJZDLNh@DJ^tABJf@bBn@hCDNNp@BDDT@DLh@@FH^XvAFXDZJf@Hf@@FFZD^NbA@FNlAHt@F`@BX@JBPB\\@DBVHbA@V@F@NDj@@VH|AJxBBt@DpA@T@T?PBf@?B?TFnB@VHrB?LB`@@^@Z@\\B^@^@ZDz@Bd@B\\F|@JxAL~AHz@DXD\\@N@L@HBTF^Jx@D^Fb@Hl@Jv@L~@Hf@?DLp@@BV`BJt@N`ALx@Lz@T|ABRFf@NbAXbCBNHx@N|AHz@F|@Dj@@BD~@B^Bf@@RBZBx@DjA@b@@|@@r@?\\@f@?F?@@nA?R?fA?|A?xAA`B?|A?z@?`BA~A?rB?xBAxA?z@@x@?h@?n@@Z@jC?d@@h@@p@?B@|@?`@@p@?H@^BvA?P@T?N@J?H@Z?H@j@?J@X@`@DzA@P?N@XBh@DhBFnB@DBrABd@Bv@@T?VFzABz@?D@h@D|@B|@?D@X@\\?FDxA@T?^Bx@@f@BhA@v@@j@?@BtA@l@@x@BxA?V?V@\\?`A@`C?@@fA?|A?`@?D?f@?F?T?VAjB?`@?`@?ZAR?p@C|BAf@C|CCfAA\\?PCzACj@A|@CbAAJAl@AVGxAEvAANGjBA^OpCGbBOhCAFCd@ANCf@?@Cd@C^CXCb@Ed@Cj@C\\ABEr@Ej@Eb@M|ACXARE\\QtBAJAFMzAEZQfBEh@Gb@MpAEf@Kz@In@CPCXEVGn@M|@MfAMx@]hCKp@YnBQhAMt@ObAW|AADKl@Kn@Kl@Kl@CPMn@Kl@Kn@Q`AGXId@AFW|AMl@Gd@Ov@Ox@AFShA[hBSnACJYbBGZKh@Ih@AFUnAc@nCMt@ABIf@QfAEVETEZERKl@UrAMt@ALERc@nC?Dc@pCKn@QhA]vBUbBKn@CTYhBCXMt@Il@[zBIj@CNCTET?BEREZQlAQtAUzAYtBK|@M~@YxB?@QxAUhBMlAK~@Kx@E\\KfAOvAa@bEQvBM~ACX?@I`AO`CMpBUzDGjAGpAGvAKfCAR?JM|DMnEGpBCt@AZEzA?@GzBAD?H?NAF?H?LAD?XAD?XAD?XA\\C`@A^A^?BIxCA\\CfACz@AZABAV?D?FEtA?B?@A@?BErA?FWbHCp@C^?DAVAV?FAFAT?FAV?FCV?DK~BGvA?BC`@AX?HARAB?@?B?FAN?D?@?BAJAZCd@Cb@C`@?FE`AAZAVC\\?FAV?FAV?FAVAR?J?FAL?L?B?FAn@A^?BA\\?`@?Z?D?x@?^?J?P?^?D?F@d@@p@@^?T@H?X?@?B@F?V@F?V?F@V?F@V?@?@?@@@?L?@?@?@?@?@@DBjABx@Bb@@b@FpCFhB@l@?X@Z@j@?TBbA@dA?X?^?L?nB?dA?b@AJ?NAv@Ad@CbAClACb@Cv@I|AA^AREf@IdAEn@QtBCPU`CCVCTMdAK|@K|@MbAOtAE\\E\\E\\K`AK~@WtBE^C\\Kz@AHGt@K~@C\\E`@CZAPEn@Cb@Et@ALATCp@Cj@Al@AN?\\Ch@?XAn@Al@Ah@AP?Z?^AP?`@AhA?BEpFC`CAX?b@AtBC|DAdAAhD?FAxA?tA?LClDCpCApA?RAzAA|@A|AAdA?F?v@A|@AbA?lAAj@AfA?z@AdA?b@Av@An@?n@AlBEnFC`BA`BArAAz@C|DAr@AxACjBAn@?^Al@Ah@ADAv@An@A`@A\\AZAXARAR?DATAZA^Cp@Cp@EhAEhAEfAEh@?@G|@El@Ed@E`@Y`CM|@WtBOnAGh@E`@G\\AFGd@G^Kp@SlAc@rCWpA{@jD"
                        },
                        startLocation: {
                            lat: 43.6679237,
                            lng: 7.1963449
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "91 m",
                            value: 91
                        },
                        duration: {
                            text: "1 minute",
                            value: 7
                        },
                        endLocation: {
                            lat: 43.484018,
                            lng: 5.538086
                        },
                        htmlInstructions: "Prendre la sortie \u003cb\u003e32-Gardanne\u003c/b\u003e vers \u003cb\u003eGardanne\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eFuveau\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMeyreuil\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRoute à péage\u003c/div\u003e",
                        maneuver: "ramp-right",
                        polyline: {
                            points: "q{khGuyx`@e@\\CBABA@A@ALIn@UjA"
                        },
                        startLocation: {
                            lat: 43.4836056,
                            lng: 5.5389855
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,4 km",
                            value: 393
                        },
                        duration: {
                            text: "1 minute",
                            value: 39
                        },
                        endLocation: {
                            lat: 43.4839013,
                            lng: 5.533898799999999
                        },
                        htmlInstructions: "Rester à \u003cb\u003edroite\u003c/b\u003e à l'embranchement pour continuer vers \u003cb\u003eD96\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRoute à péage\u003c/div\u003e",
                        maneuver: "fork-right",
                        polyline: {
                            points: "c~khGatx`@Mb@ADCJCDKXKVEFCF?@QZEFAD[j@KPCFCDCFABCFEPCLCN?BAD?B?FAT@R?@@PBP@HBHHV@FN`@@BRb@P\\P`@HTJZBFDPFZBHRv@R|@"
                        },
                        startLocation: {
                            lat: 43.484018,
                            lng: 5.538086
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,8 km",
                            value: 797
                        },
                        duration: {
                            text: "2 minutes",
                            value: 101
                        },
                        endLocation: {
                            lat: 43.4782286,
                            lng: 5.5381222
                        },
                        htmlInstructions: "Prendre \u003cb\u003eà gauche\u003c/b\u003e sur \u003cb\u003eD96\u003c/b\u003e (panneaux vers \u003cb\u003eMeyreuil\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eFuveau\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGardanne\u003c/b\u003e)",
                        maneuver: "turn-left",
                        polyline: {
                            points: "k}khG{yw`@Nj@FR@PH?^AZ@TBVBH@R?ZDXBTBL@N?LAJANAJCXINGPKNKDCHIJKFILQn@y@pAgBJOV[RYhA{A^g@x@gAR[NQLSjA{A~@qADGzAsBd@m@"
                        },
                        startLocation: {
                            lat: 43.4839013,
                            lng: 5.533898799999999
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "1,1 km",
                            value: 1104
                        },
                        duration: {
                            text: "1 minute",
                            value: 81
                        },
                        endLocation: {
                            lat: 43.47535449999999,
                            lng: 5.5252962
                        },
                        htmlInstructions: "Prendre \u003cb\u003eà droite\u003c/b\u003e sur \u003cb\u003eRte de Gardanne\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD6C\u003c/b\u003e",
                        maneuver: "turn-right",
                        polyline: {
                            points: "}yjhGgtx`@BLBL@F@J@JBb@B`@@F@d@@p@@H?H?L@f@@X@h@?LBZ@ZBZ@N@L@\\Bz@?^?R@XAH@V?dA@P?T@r@@N?Z@Z?B?D?N@P@T@J?TBXBVBXDXBXDVDXBXHn@DZF`@Hf@FXLj@BDJ`@Tt@d@xAZ`AHTFTPh@HTPh@Pj@Ph@Ph@FRHT`@pAFRHTDNFPDPJ^DRBPBNF\\BLBT@D@DJTBFDPFVDXBX@Z@XFR"
                        },
                        startLocation: {
                            lat: 43.4782286,
                            lng: 5.5381222
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "9,1 km",
                            value: 9140
                        },
                        duration: {
                            text: "6 minutes",
                            value: 341
                        },
                        endLocation: {
                            lat: 43.4417207,
                            lng: 5.434781800000001
                        },
                        htmlInstructions: "Prendre légèrement \u003cb\u003eà droite\u003c/b\u003e sur \u003cb\u003eD6\u003c/b\u003e",
                        maneuver: "turn-slight-right",
                        polyline: {
                            points: "}gjhGcdv`@CfEAr@?@?lBAhBAlAAhAAbDDlB@NFbAHx@Hr@DV@FDVFX@JJd@Pp@XdAHZl@dCdAdEVjATfA@DRnAP|AFv@HhA@^Br@@l@@dA?@?lAARAp@A`@E~@C`@ALCp@EbAAZCb@EjAAd@?NAp@?v@?f@@h@@r@Bv@@^Bh@?FDp@Bl@Ft@Dd@RdBHn@Jl@Jn@Jn@Hn@Jj@?DHf@BHJp@Jp@F^BRFXBVLr@Jr@BLFb@Jr@@DHj@Hp@DZBR?@BNHjABTBh@@TB^@l@@PBp@@z@?@?dBAr@AfACp@ARE`AEz@I`BC`@ANUnFEt@Ep@ALG~@IvACp@AFCf@A\\GbAK`BC^AZAf@GzACt@Cp@?HAP?TCjBAf@?f@At@?x@Ax@?d@?bC?x@?x@?H?n@?h@?P?z@?z@?z@?z@?d@?T?d@?f@?`@A`A?rBAf@?Z?JAn@An@CbBE`AAb@GtAGdBShDGpAAVAb@A~AA`@?N@z@?bB@`AD~@D`AD`ADr@HdABXD^BV@@LbAHl@V|AHd@?@@FHb@RbAH`@Hb@DVTlAVtAXpALd@^xAd@bB@@Rl@?@Nd@Vn@Rb@r@|ALVLV`@r@RZLRj@x@d@n@p@v@`@b@`@b@f@d@LJvCbClBpAlAv@j@^lAt@l@\\n@\\r@Z|Ap@LFTJNFn@VD@VJj@PHBRDd@H\\D@?F@D?TBNB^@z@@R?j@?T?fA?|@?F?`@?\\?`BAj@?z@?h@?f@@P@V@TBVBVDB@TDVDVHTHl@Rn@Xv@b@TJHFJFNLb@^Z\\LLBBd@h@X^b@r@@BR\\r@pALVNX`AfBDF^p@b@|@R`@Tf@JXHTN`@L`@JZRv@R~@l@tCb@xBZzANp@Lh@J^Nn@d@zAb@vAb@tA^hAb@tAFNHXXz@JXd@rA\\v@N\\PXBD`@n@TZPP@BLNBBTTNLFFh@b@BDDBz@r@vAjABBFDZXNNVZVXX^RZb@l@FJJT`@v@d@bAN\\Xv@d@pA`@jAL^^fA|@bCp@lBpApDTp@@Bf@vAv@`C^hAb@rAhBrFb@rA^hAZ~@Vt@f@rAZt@Vj@r@tAXj@Zh@NTh@z@V`@rApBrBzCFHxCnEh@t@|@tAfA~Ab@n@NT^l@RXDF`@j@"
                        },
                        startLocation: {
                            lat: 43.47535449999999,
                            lng: 5.5252962
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,1 km",
                            value: 120
                        },
                        duration: {
                            text: "1 minute",
                            value: 4
                        },
                        endLocation: {
                            lat: 43.44095060000001,
                            lng: 5.433733399999999
                        },
                        htmlInstructions: "Rester sur la file de \u003cb\u003egauche\u003c/b\u003e pour continuer sur \u003cb\u003eD6\u003c/b\u003e",
                        maneuver: "keep-left",
                        polyline: {
                            points: "wuchGknd`@PVj@z@T\\TZT^HJNV"
                        },
                        startLocation: {
                            lat: 43.4417207,
                            lng: 5.434781800000001
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "2,4 km",
                            value: 2374
                        },
                        duration: {
                            text: "1 minute",
                            value: 85
                        },
                        endLocation: {
                            lat: 43.4295423,
                            lng: 5.4093255
                        },
                        htmlInstructions: "Continuer tout droit sur \u003cb\u003eD6\u003c/b\u003e",
                        maneuver: "straight",
                        polyline: {
                            points: "}pchGygd`@NTlBnCjEtG|A~BJN@@FJlAfBBBrAtB|AbC\\l@JPFLR\\n@dAp@lAFHdAvBZn@NZZn@Xl@?@JRTf@j@nAP`@@DTf@f@hA@DRh@Rj@Xt@f@xADHr@pBPj@Rj@Tn@v@|BBHHXd@xABLl@pBBHPp@`@vAHZR|@Tz@DPd@pBRz@\\dBH^DNrArGJh@nBlJp@fDLj@BNrArGbAfFJd@DNVlA"
                        },
                        startLocation: {
                            lat: 43.44095060000001,
                            lng: 5.433733399999999
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "2,0 km",
                            value: 1970
                        },
                        duration: {
                            text: "1 minute",
                            value: 81
                        },
                        endLocation: {
                            lat: 43.4283822,
                            lng: 5.3873938
                        },
                        htmlInstructions: "Rester sur la file de \u003cb\u003egauche\u003c/b\u003e pour continuer sur \u003cb\u003eA515\u003c/b\u003e",
                        maneuver: "keep-left",
                        polyline: {
                            points: "siahGio_`@FZR~@rAxGNt@\\`B\\fB@FFZF`@F\\D^Jz@D^B`@B^BZ@b@@Z?B@X@Z?T?F?B?X?b@A^?ZA\\A`@AFATA\\C\\I|@EZE\\E\\AFCRG\\Ox@IZGZIX?@IXIZ?BIXGXIZIXGVIXI\\KZI\\I\\IZI\\IZIZGZEPCLI\\GZG\\GZENMn@Q`AOv@Ml@AFKj@Y`BG`@Mp@Oz@Kd@EZGZOx@Ox@UzAETGf@Gf@ANAL?LCh@CZ@L?N@L@N@L@PBN@JBNBNBJ@BBJBLFPBJDLFLDJFJFJFLDHFJFLFHHJDJHJHHFJNRLNDFPVBBFH\\b@HJV\\RVFHPVPTNVJRBD\\n@?@Vj@JXFPFPJ^FRHRNl@@@TR"
                        },
                        startLocation: {
                            lat: 43.4295423,
                            lng: 5.4093255
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "5,2 km",
                            value: 5171
                        },
                        duration: {
                            text: "4 minutes",
                            value: 210
                        },
                        endLocation: {
                            lat: 43.3938497,
                            lng: 5.3510067
                        },
                        htmlInstructions: "Rejoindre \u003cb\u003eA51\u003c/b\u003e",
                        maneuver: "merge",
                        polyline: {
                            points: "kbahGef{_@Nl@FZFXH^FZ@DDTBFBNBRBT@JPv@F\\F\\FX@D@FDTVtADNDXJh@Jh@Lt@FXF^FXF^F\\DTHb@F\\F\\H`@DVF\\?@F\\F\\FZFZF\\FZF^Nz@TrA`@|BF`@DRH`@F^FZFZH^HX?@H\\Pt@HXH^JZLb@FRJXJZJZ@BHTJVL\\LVHVN\\LVLXLV?@NXLXLXLVJVNZZn@LZXn@JR@DZr@LXNZJTLXd@bAJT@BFLJTf@hATd@Rd@JPXl@NZlAnCZn@P^LXvA|Cb@z@h@fAf@~@lAjBtBpCHHNNTVh@h@@@DBRPPPLJ`@Zn@f@\\T\\TnAt@LFd@VVLTJXLNDRJJDh@P`@LD@VFLDj@LH@LDRDVDRDPB^FlBR`BPVBL@RBRBp@F`@FVBXBjCTv@HhBPPBT@bAJJ@t@Ht@Fr@Jh@Hf@Jj@L^J|Bp@B@HD`@N`@Ph@TFBNJj@XRL@?RJNHVNb@ZB@\\VZVPLDFDBXTJHDFTRv@z@\\^X^LL@Bb@n@X`@Xf@RZBFJNFJHLLPnAtBBF`@p@NVVb@\\h@v@tAHNT^\\h@T^V`@NTJNLRPVFJDHv@hAl@v@TVTVLNLNZZVVNRf@b@BBVRXTzAjA@?ZVFDZV\\XDBh@`@l@b@\\Xf@`@VPDDzAhAt@j@LJdAv@PLdBnA@@?@PHZNl@\\\\PXLTJTJPFNFHBZJNDXH\\J^H`@Hl@Jl@Fl@FV@V@V@V@V?L?^?VAXANATA"
                        },
                        startLocation: {
                            lat: 43.4283822,
                            lng: 5.3873938
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "6,5 km",
                            value: 6469
                        },
                        duration: {
                            text: "5 minutes",
                            value: 295
                        },
                        endLocation: {
                            lat: 43.3416565,
                            lng: 5.3762324
                        },
                        htmlInstructions: "Continuer sur \u003cb\u003eA7\u003c/b\u003e",
                        polyline: {
                            points: "qjzgGybt_@d@CLALAPCPA@@@?NBj@AVAT?^?V?V?N?N@V?R?@?J@F?J?P@H?r@@rBDP?vABr@@d@@X?H@b@?P@P?|ABX@\\?l@@P@dAD`@@b@@d@@`@?b@@B?hA?Z@zA@x@@L?|@?Z?^?NA^AJ?h@CRC@?d@Ed@EfAQ`@Id@I@?d@Mn@QNEh@Q`@QTINGNIPIDCHEFC^SZQLIRKh@_@t@k@XUt@o@RSx@{@l@q@\\e@PSX_@HODEFK@ADGFMHKHMLUVa@Zi@Rc@JQn@yALYb@kAZw@Xw@BGJW@?HW@ABIN]JYLYZo@Ve@HQh@aAXe@p@cANS\\a@Za@BC`@c@`@_@ZYJIl@e@XUj@]\\Sf@Yj@Wj@Ub@QRGn@Qf@MXGj@I\\G`@Ef@EVAZCV?RAR?N?H?d@@x@B~@Dd@@L@Z@xAFrBFX@ZBrADx@BnBHD?T@rDJj@B|GXP?jABB?^@B?`@?@@n@Cf@?bAGFATAFATCd@Gd@IREh@INEPEVGjAY@?JCp@QZIdDy@NC~Aa@NErA[lA[FAfBc@ZInBe@XI`GyAPE^KTE\\IbAWXI^KHCTGh@Qf@SLEDALGHEv@]\\Qd@Wb@Ub@Yl@_@PMd@_@d@]RQb@_@RQ`@a@RUHIPQPQTWb@k@`@g@b@g@NQb@k@PS\\c@^e@r@y@p@{@TWJOLOjAuAtBiCHKfAsAHKpA_B\\a@V]@AX]@AV[HKTYRW\\_@X[j@q@d@m@JOt@{@LQ@CX[r@{@fAsAZ]j@q@r@w@f@i@^_@r@o@l@e@TQ\\U^WTOv@c@`@STK`@QVKHEb@Q\\M`@MHCh@Qb@Kd@K\\G^I"
                        },
                        startLocation: {
                            lat: 43.3938497,
                            lng: 5.3510067
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "2,0 km",
                            value: 2006
                        },
                        duration: {
                            text: "2 minutes",
                            value: 97
                        },
                        endLocation: {
                            lat: 43.3237014,
                            lng: 5.3781992
                        },
                        htmlInstructions: "Rester à \u003cb\u003edroite\u003c/b\u003e à l'embranchement pour continuer sur \u003cb\u003eA7\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eFermeture possible de portions de cette route certains jours ou à certaines heures.\u003c/div\u003e",
                        maneuver: "fork-right",
                        polyline: {
                            points: "kdpgGm`y_@JBH?NCj@GXCb@Ab@Al@Av@GZCd@Gb@Gb@GNCVC`@IPCPAb@GRCb@Eh@EdAGfAGp@E`@CfBMTA\\CfCQTAp@EzBOtJo@`Ga@PAPAB?\\CjBMLANAXCb@CVA@AnAGJAfBMlAIb@CRCD?RAr@EFAfBMxAIn@ELAfAIJAb@Cd@CNALAj@E`@ATAj@?l@@@?h@@VBJ@^Bf@DrAL"
                        },
                        startLocation: {
                            lat: 43.3416565,
                            lng: 5.3762324
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "2,1 km",
                            value: 2138
                        },
                        duration: {
                            text: "2 minutes",
                            value: 112
                        },
                        endLocation: {
                            lat: 43.3046263,
                            lng: 5.374964599999999
                        },
                        htmlInstructions: "Rester à \u003cb\u003egauche\u003c/b\u003e à l'embranchement pour continuer sur \u003cb\u003eA7\u003c/b\u003e",
                        maneuver: "fork-left",
                        polyline: {
                            points: "ctlgGwly_@\\?VBz@HdAJr@F`@D~@HhALh@DdAJz@HB@b@DxALJ@b@Dr@H|@HN@f@DB@`@JlEb@`DXtBTD?pFh@zANF?f@FfCV\\Bt@Hd@DD@j@Dn@HB?PBd@DVBpEb@XBpALn@Fp@FjHp@J@hGl@r@Ft@FfAFJ@n@Ft@FD@p@FNB`AJ\\Bb@DVBRF"
                        },
                        startLocation: {
                            lat: 43.3237014,
                            lng: 5.3781992
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,1 km",
                            value: 149
                        },
                        duration: {
                            text: "1 minute",
                            value: 34
                        },
                        endLocation: {
                            lat: 43.3049849,
                            lng: 5.3732083
                        },
                        htmlInstructions: "Prendre \u003cb\u003eà droite\u003c/b\u003e sur \u003cb\u003eAv. du Général Leclerc\u003c/b\u003e",
                        maneuver: "turn-right",
                        polyline: {
                            points: "}|hgGoxx_@CZAd@YhCCVIJ?@ABAFEVE^Gf@"
                        },
                        startLocation: {
                            lat: 43.3046263,
                            lng: 5.374964599999999
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,4 km",
                            value: 414
                        },
                        duration: {
                            text: "1 minute",
                            value: 83
                        },
                        endLocation: {
                            lat: 43.3024875,
                            lng: 5.3744239
                        },
                        htmlInstructions: "Au rond-point, prendre la \u003cb\u003e3e\u003c/b\u003e sortie sur \u003cb\u003eAv. Camille Pelletan\u003c/b\u003e en direction de \u003cb\u003eCentre Ville\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGrands Carmes\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eLa Joliette\u003c/b\u003e",
                        maneuver: "roundabout-right",
                        polyline: {
                            points: "c_igGqmx_@E?CAE?C?C@C@E@CBA@A@A@?@A@A@A@?@CHADAD?D?D?B?D@D?D@D@B@B@BBB@BB@@BB@B@F@B?B?BAB?DABC@ABCBC@EDG?E@E@E?E?E?E?Ef@YFKZORKvAq@dCkA~@g@vAu@"
                        },
                        startLocation: {
                            lat: 43.3049849,
                            lng: 5.3732083
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,1 km",
                            value: 106
                        },
                        duration: {
                            text: "1 minute",
                            value: 35
                        },
                        endLocation: {
                            lat: 43.3015863,
                            lng: 5.3739876
                        },
                        htmlInstructions: "\u003cb\u003eAv. Camille Pelletan\u003c/b\u003e tourne à \u003cb\u003edroite\u003c/b\u003e et devient \u003cb\u003eBd des Dames\u003c/b\u003e",
                        polyline: {
                            points: "qohgGcux_@nBr@r@VNH"
                        },
                        startLocation: {
                            lat: 43.3024875,
                            lng: 5.3744239
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,3 km",
                            value: 271
                        },
                        duration: {
                            text: "1 minute",
                            value: 64
                        },
                        endLocation: {
                            lat: 43.2992654,
                            lng: 5.374130999999999
                        },
                        htmlInstructions: "Continuer tout droit sur \u003cb\u003eRue Sainte-Barbe\u003c/b\u003e",
                        maneuver: "straight",
                        polyline: {
                            points: "}ihgGmrx_@RR^EHEj@[@?f@Yn@[JCDABAJ?H?F@D?d@LZF\\FB@H@JBLBTEPD`@H"
                        },
                        startLocation: {
                            lat: 43.3015863,
                            lng: 5.3739876
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "56 m",
                            value: 56
                        },
                        duration: {
                            text: "1 minute",
                            value: 14
                        },
                        endLocation: {
                            lat: 43.2987632,
                            lng: 5.374064499999999
                        },
                        htmlInstructions: "Continuer tout droit sur \u003cb\u003ePl. de l'Hôtel des Postes\u003c/b\u003e",
                        maneuver: "straight",
                        polyline: {
                            points: "m{ggGisx_@H@B?ZBZB^B"
                        },
                        startLocation: {
                            lat: 43.2992654,
                            lng: 5.374130999999999
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,1 km",
                            value: 115
                        },
                        duration: {
                            text: "1 minute",
                            value: 26
                        },
                        endLocation: {
                            lat: 43.2977289,
                            lng: 5.374078
                        },
                        htmlInstructions: "Continuer sur \u003cb\u003eRue Henri Barbusse\u003c/b\u003e",
                        polyline: {
                            points: "gxggG{rx_@~@?X?l@AdAA"
                        },
                        startLocation: {
                            lat: 43.2987632,
                            lng: 5.374064499999999
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "91 m",
                            value: 91
                        },
                        duration: {
                            text: "1 minute",
                            value: 30
                        },
                        endLocation: {
                            lat: 43.2977548,
                            lng: 5.3729501
                        },
                        htmlInstructions: "Prendre \u003cb\u003eà droite\u003c/b\u003e sur \u003cb\u003eRue Henri Fiocca\u003c/b\u003e",
                        maneuver: "turn-right",
                        polyline: {
                            points: "yqggG_sx_@?JCbD?p@"
                        },
                        startLocation: {
                            lat: 43.2977289,
                            lng: 5.374078
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,2 km",
                            value: 214
                        },
                        duration: {
                            text: "1 minute",
                            value: 84
                        },
                        endLocation: {
                            lat: 43.29607,
                            lng: 5.3740032
                        },
                        htmlInstructions: "Tourner \u003cb\u003eà gauche\u003c/b\u003e au 1er croisement et continuer sur \u003cb\u003eRue de la République\u003c/b\u003e",
                        maneuver: "turn-left",
                        polyline: {
                            points: "}qggG}kx_@~CmCrA_ADEJGHEFAF?D?H?HBHDJF"
                        },
                        startLocation: {
                            lat: 43.2977548,
                            lng: 5.3729501
                        },
                        travelMode: "DRIVING"
                    },
                    {
                        distance: {
                            text: "0,3 km",
                            value: 344
                        },
                        duration: {
                            text: "1 minute",
                            value: 78
                        },
                        endLocation: {
                            lat: 43.2960907,
                            lng: 5.3698541
                        },
                        htmlInstructions: "Prendre \u003cb\u003eà droite\u003c/b\u003e sur \u003cb\u003eQuai du Port\u003c/b\u003e",
                        maneuver: "turn-right",
                        polyline: {
                            points: "mgggGorx_@w@nEARAN?R@RNzC@XT~E@RJvB"
                        },
                        startLocation: {
                            lat: 43.29607,
                            lng: 5.3740032
                        },
                        travelMode: "DRIVING"
                    }
                ],
                trafficSpeedEntry: [],
                viaWaypoint: []
            }],
            overviewPolyline: {
                points: "ycxiGyiik@fFfKtDT`NbCzB~GjJhEtO~[xTnZn^f]r]jg@fu@hdAnUnQ`KdV|CJzH`QyDzjA|HbCyDdNTgElEpAzLhd@fJlv@xQ~zAzKt^t@p_@yAz]|C|_@tM~R~WjOl|@pdAxZ|]~]pQ~Ohf@tPvSbiAnFl\\z^xMj{@h]jbAnL|dA{Frx@|Bzh@lMd`@na@tw@~Fbe@bO|`@~d@fq@nTlz@dCbVmKfRaKvQaBje@dDpq@bJ~R`^ri@xNnd@tStTnv@dRdRn]jPfg@Iv_AnG~VvPhMtUPpQzJ|VdXxLbYCxaAvSjiApLl}@Sjc@Zz|@xKxy@qAh`@qKlp@uTpq@o@pa@zL~c@oAzWg\\lXgVl[pDl`@lOvd@qb@zcCrJzn@zUn_@`k@vYj^sFrXvIdRlT`ObZr]dTnRzf@p|@`i@|WtGtQ|X`Ufr@|X`R~b@pFpXqPhRgAxRhRzPnm@hOru@pd@fcA|N~[lEda@eA~q@}Ite@af@vvA_Hdq@hA~|@xN|~BxBdrA`\\t_B{Ed~@_L|y@sLngAXhp@v_@xsA`Nrq@rCtn@g@po@|Nfc@nI|a@Mdd@dIddAvj@toAhOrsAjQte@nYxMd]oAle@mD|^h]nQtmAdCpj@}Cho@tErm@dQhm@zl@raBdHrxD`Cbz@tLlp@fIba@iBt_@g@z`@dKda@jC~uAn@tZyQbl@gOtPcIb\\{Mng@lEzdAfHv_AlF`|AaAf~@}KraAnDrh@nMxd@_@bi@_[r|@\\thAsJn|@oStfAlDvvAyKzbBqMfjAc]pkAmHnZlIfu@{HtmAvChjAoNb{@yAfv@pHlw@hJndASfbCuVjrCyNjcClCljATbmA{Nzn@qSrs@{^pv@cO|aCe[xi@a]bz@{Qdq@wj@rsAsq@|aCwd@`|CoGlgArCpqAeDdz@wObn@yVbu@eGft@fFtlBsLbw@o@zn@zNrt@pIrcA|B|h@zJba@~L|oAbInn@r@pz@hCvsAyF`fBmWxbB{V`oCyCn~AiHfcBsBhkCeEbk@qJb]nDrR~Gz@~HsHhOoQ`@`LhApXjKv_@tBll@zGpb@k@pS`F~g@mAx`Bw@xz@hMpm@|WzV`OvFt`@rCfm@jpA|^p~@pf@xw@pa@|s@vYjiA`Mlx@oE`Y}I`f@nBlM|Spn@~Uhz@r]bl@v]hJdd@jJzRvVvWj[r\\xR`|@dAlYmEhVq\\bW}X`k@?ph@iEjk@mRd_AsbAtzAsMhe@Ah{@nI~g@vExGn@[|FaAvBElAjKqFpPyArGz@dGrD~GqDj@nY"
            },
            summary: "A8",
            warnings: [],
            waypointOrder: []
        }],
        status: "OK"
    }
})