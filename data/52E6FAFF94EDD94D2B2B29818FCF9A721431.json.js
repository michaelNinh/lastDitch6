GS.dataCache['52E6FAFF94EDD94D2B2B29818FCF9A721431'] = {
    "uid": "52E6FAFF94EDD94D2B2B29818FCF9A721431",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "type": "vn.scene",
        "name": "Penelope",
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
                        "name": "penelopeBg.png",
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
                "indent": 0
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": null,
                    "characterId": "503674B13ADD61403E9884D7740D617EEE72",
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
                "uid": "CE0D41806B7906474F2B83F50A4D77252759"
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
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "main"
                },
                "indent": 0,
                "uid": "99853F0A15652343AD6900131C88FE5A121D"
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
                        "defaultText": "My name’s Penelope the Ocular. I’m an Angel—though sometimes I find myself wishing I wasn’t. You’re human, aren’t you? How did you get here?"
                    },
                    "position": 0,
                    "characterId": "503674B13ADD61403E9884D7740D617EEE72",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "FC9875E02CE78543122926037B41F8C6FE83",
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
                        "label": "didYouKnow",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Did you know Aria brought me here? "
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
                "uid": "E126175E8E76D4417B2B0D66BA7AF989850D"
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
                        "label": "whyNot",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "You wish you weren’t an Angel? Why?"
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
                "uid": "60DFA9EF1C8C3942CF68B7A7C2EAE112B1BE"
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
                "uid": "C6EB40F9447EC84A945A9C745CD2D15429F8"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "F629C3BF097E34421C8BE53168F07631A87F"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "didYouKnow"
                },
                "indent": 0,
                "uid": "F3485EB83692C740EA5AC8F9CBE062B1F050"
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
                        "defaultText": "Aria is adventurous that way. I prefer to watch you humans from afar. Seeing you in front of me now… You’re so fragile. Like fine China from The Noise’s personal cabinet."
                    },
                    "position": 0,
                    "characterId": "503674B13ADD61403E9884D7740D617EEE72",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "B78FFCC01FCA574E051950F7FBA634529DAE",
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
                "uid": "C442FBC85AB25141C58873A7CFA847FF24A9"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "main",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "8102910B96EA444E3A8819C1E9AFB3E64D5F"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "whyNot"
                },
                "indent": 0,
                "uid": "5DD59C2318EB34434D6A31932093CE2C7999"
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
                        "defaultText": "That wish comes and goes. When it comes, I do wonder where it comes from. Aria says it’s boredom—and she may be right. Forever is a long time, human. In fact, it’s all of it. To die, to fold back into The Noise and the endless bloom of becoming—it’s strangely comforting. It’s a fate that eludes most Angels. … Yet, to be mortal… It’s what makes your kind so interesting. But as much as it tempts me, it scares me."
                    },
                    "position": 0,
                    "characterId": "503674B13ADD61403E9884D7740D617EEE72",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "C5F959444A3A92455849CD97674EFE84F29C",
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
                "uid": "6449590C69B5F04A2B6B08A4AEC9F7BE57C3"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "main",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "43810E790D9BE149DA686A1793B31673BEA4"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "visitOtherAngels"
                },
                "indent": 0,
                "uid": "CF62D47788568347585988F52C84444588E2"
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
                        "defaultText": "Whom do you wish to visit? "
                    },
                    "position": 0,
                    "characterId": "503674B13ADD61403E9884D7740D617EEE72",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "165C04CE7760E64D4F4BA5E1166FC0422903",
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
                "uid": "21B3C6A897A3434DFF799C2690D59F1C2BE4"
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
                "uid": "36250F768329934C1E592842C2546C25080D"
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
                "uid": "53067CC82FD1B14B0E8B0EB8BF86C94192DB"
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
                        "label": "jumpSirius",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Sirius the Journeyed"
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
                "uid": "57988EEB38D92743F618ACA79446EEF22957"
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
                "uid": "BD3341F6716FA34F4C789CC8F620E808D6D2"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "15DDEF886EA7714507790511087B34FD574B"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpLaplace"
                },
                "indent": 0,
                "uid": "E1E38B4C698D744388798C06A38CEE703EC5"
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
                "uid": "6EA2C47D2C16694CDC1BDEC4C565A2B2140E"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpJudea"
                },
                "indent": 0,
                "uid": "2B92978E17DDF645B578F4750A4EE69D43D1"
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
                "uid": "E76429E3899253498D8A274526321A3D46D1"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpAria"
                },
                "indent": 0,
                "uid": "9FDCF5857A1D1846243B8B118B1032227DE6"
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
                "uid": "49CB0E920BA2D746E33B37B08FB72AD8751B"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpSirius"
                },
                "indent": 0,
                "uid": "20EB5BEF834B5141FC780085597DDA7A9FDC"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "3657A9C98D7C474B23493DF64A8D827B3619",
                        "name": "Sirius"
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
                "uid": "39FE14B87749C74A857AEA773CA6124E3BBE"
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