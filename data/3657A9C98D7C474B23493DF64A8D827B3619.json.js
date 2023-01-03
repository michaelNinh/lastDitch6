GS.dataCache['3657A9C98D7C474B23493DF64A8D827B3619'] = {
    "uid": "3657A9C98D7C474B23493DF64A8D827B3619",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "type": "vn.scene",
        "name": "Sirius",
        "parentId": "BCC1BA1F4407C749A6691EA4885E93DB76DE",
        "localizableStrings": {},
        "chapterUid": "BCC1BA1F4407C749A6691EA4885E93DB76DE",
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "siriusBg.png",
                        "folderPath": "Graphics/Backgrounds/BG",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "4543A3D914A6B54A8338D658D90A90322B87"
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": null,
                    "characterId": "719478A54E79F84D9049F7E2A2A9D68561A6",
                    "zOrder": 0,
                    "origin": 0,
                    "blendMode": 0,
                    "positionType": 1,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 464,
                        "y": 106,
                        "angle": 0,
                        "zoom": 0,
                        "horizontalFlip": false,
                        "data": {
                            "zoom": 0.9479895949803575
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 0,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "",
                        "folderPath": ""
                    }
                },
                "indent": 0,
                "uid": "A13431F070994440E00B534391D0C41EDAC2"
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 1,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "F0530E11655FD24C701B63936FC71E9802B2"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "main"
                },
                "indent": 0,
                "uid": "BB546C6B78FFB1406D0B8EF68CE661C1F561"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 0,
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
                        "defaultText": "I am Sirius the Jouneyed: stowaway sailing the endless—beginningless—slipstream we call Noise. You’ve caught me back at port, so to speak. These dimensions are all too familiar, though I can’t say I visit them often. I’ve found myself immersed in those far less intelligible. I fear they’ve made me the same."
                    },
                    "position": 0,
                    "characterId": "719478A54E79F84D9049F7E2A2A9D68561A6",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0FB444431E268146DD482B63BC49C33ABF9A",
                "expanded": true
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "differentParts",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "There are different parts of The Noise?"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "0719870A7B86144C8C0B84B790B388C02FA9"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "explore",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Why do you explore dangerous regions of The Noise?"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "3AB35C5F23230642BE88E85677CD4C8D1B21"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "visitOtherAngels",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Visit other Angels"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "43C39AB34EB388417B284AE3EB82AA6F1F82"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "8A1007FE54AAB24B912BFEF36CAFA47086FF"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "differentParts"
                },
                "indent": 0,
                "uid": "30F6680B33DC64455A2BA1C804D396F4F0B6"
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
                        "defaultText": "“Parts” isn’t the word I’d use—though, for an alternative, language fails us. The Noise convolutes, obfuscates, refracts, and reverberates in ways that defy explanation. Especially to a human. To immerse yourself at those intersections… Well, it’s sailing into a storm. A beautiful one, if I may be so figurative—but an eternally bewildering one. A dangerous one, too. Especially to a human."
                    },
                    "position": 0,
                    "characterId": "719478A54E79F84D9049F7E2A2A9D68561A6",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "5FC600F3669DC94F5879AAB15C4D184FB2CF",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 0,
                    "duration": 0,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "indent": 0,
                "uid": "B476CE795754A746FC4A084818D0BD7F716C"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "main",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "EB98907A12F2114CB16BBE029A36446D231F"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "explore"
                },
                "indent": 0,
                "uid": "6B8BDA6098D196410C690F223EDC931D9875"
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
                        "defaultText": "I’m afraid The Noise compels me. Or worse, it compels itself. I said I was a stowaway— and I’m certain that both the ship and the current are none other than The Noise. It leads me to its own chaos. I hope only to learn something along the way."
                    },
                    "position": 0,
                    "characterId": "719478A54E79F84D9049F7E2A2A9D68561A6",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "5A5D1D044BF0D14D783A537046E24067CE68",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 0,
                    "duration": 0,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "indent": 0,
                "uid": "F0B86C2837A9E6478328A7548C9143D60FE8"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "main",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "86389BA06A5F65442989F128FF442FE086AD"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "visitOtherAngels"
                },
                "indent": 0,
                "uid": "F746699C67A2114592180F363639E58E7399"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 0,
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
                        "defaultText": "A flow of time waits for no one. "
                    },
                    "position": 0,
                    "characterId": "719478A54E79F84D9049F7E2A2A9D68561A6",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "28DD912F5F390146AD79E780071E42F03317",
                "expanded": true
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "jumpLaplace",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Laplace the Moved"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "985AC8EB695B7046D21880482621D4A1C717"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "jumpJudea",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Judea the Wretched"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "005BBAFD75FCE44E1859FDC4A881E60F1E86"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "jumpAria",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Aria the Blade"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "23C7FA876758434FC7889AE404858D7AD0B3"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "jumpPenelope",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Penelope the Ocular"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "52715E247F90E74FA23BD001D22511CD0330"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "main",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Back"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "7FFC9BD8564F9849890923735EA15220BD1B"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "23E29359374D224FF378B6D1A63CDD44FEFC"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpLaplace"
                },
                "indent": 0,
                "uid": "417644779D04F841589A7B0454894D4AFB30"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "E193BAC61CC1D5448E084D435D6A8D2DE133",
                        "name": "Laplace"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "16DE925228F6D64DE78B8AF1465ACD3E2A63"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpJudea"
                },
                "indent": 0,
                "uid": "C6A812823C42A4479E0A11F81916BD5D8556"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "534E0CF44F4EA54A1F894B5696F9DA11BDFE",
                        "name": "Judea"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "A5D47FAC6CC1C645015A56991D4225652F1F"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpAria"
                },
                "indent": 0,
                "uid": "9FCB735668B2D447B1994DE05CA7FE41843D"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "61FBB30A0C2B724E10092DA88FB62243FD76",
                        "name": "intro"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "D448ED998BC1054EFB48BE343073690F38ED"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpPenelope"
                },
                "indent": 0,
                "uid": "ACFF028D0975A242981804385A2E52B3A1F0"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "52E6FAFF94EDD94D2B2B29818FCF9A721431",
                        "name": "Penelope"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "8CFE8D8A5C96834301982209E3C2E7435BDC"
            }
        ],
        "livePreviewDisabled": false,
        "order": 6,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "o",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}