GS.dataCache['F955BDCB295F2342458BF4035887396B02D2'] = {
    "uid": "F955BDCB295F2342458BF4035887396B02D2",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "New Document",
        "type": "vn.scene",
        "parentId": "1280CABD5D75D5407F9B81822E7E0F271E88",
        "chapterUid": "1280CABD5D75D5407F9B81822E7E0F271E88",
        "order": 0,
        "commands": [
            {
                "id": "gs.ChangeStringVariables",
                "params": {
                    "source": 0,
                    "target": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "listInput",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "operation": 0,
                    "valueType": 0,
                    "textValue": {
                        "lcId": null,
                        "defaultText": "An Angel has nothing but time. What do you seek?, No cap. As an Angel I know this project bussin fr fr. Sorry, that appears to be the common language on Earth these days.,Do you have anything of interest to say? What do you want to know?, What story shall we look at today? Will you uncover what lies beneath the world?\n\n"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ListFromText",
                "params": {
                    "separator": ",",
                    "textVariable": {
                        "name": "listInput",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "list1",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "AAA2C6F6623B5240D168228774D7340188DA"
            },
            {
                "id": "gs.ListShuffle",
                "params": {
                    "listVariable": {
                        "name": "list1",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "6F04C1468AD66146EE2B09D9E2A11487D143"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "{LL:1,0}"
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "C3462DB2508557418E9A40E9AED4EDBFEA45",
                "expanded": true
            }
        ],
        "livePreviewDisabled": false,
        "listVariables": [
            {
                "name": "list1",
                "index": 0,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            }
        ],
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            }
        ],
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "listInput",
                "index": 0,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "",
                "index": 1,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "",
                "index": 2,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            },
            {
                "name": "",
                "index": 3,
                "scope": 1
            },
            {
                "name": "",
                "index": 4,
                "scope": 1
            },
            {
                "name": "",
                "index": 5,
                "scope": 1
            },
            {
                "name": "",
                "index": 6,
                "scope": 1
            },
            {
                "name": "",
                "index": 7,
                "scope": 1
            },
            {
                "name": "",
                "index": 8,
                "scope": 1
            },
            {
                "name": "",
                "index": 9,
                "scope": 1
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}