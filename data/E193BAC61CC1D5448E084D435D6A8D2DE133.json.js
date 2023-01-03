GS.dataCache['E193BAC61CC1D5448E084D435D6A8D2DE133'] = {
    "uid": "E193BAC61CC1D5448E084D435D6A8D2DE133",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Laplace",
        "type": "vn.scene",
        "parentId": "BCC1BA1F4407C749A6691EA4885E93DB76DE",
        "chapterUid": "BCC1BA1F4407C749A6691EA4885E93DB76DE",
        "order": 3,
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
                        "name": "laplaceAngelChatter",
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
                        "defaultText": "Has Aria brought you here? We may be bored but constant meddling in mortal affairs may have unforeseen consequences.&No one knows how or when we started to falter in our duties. To cure boredom some have resorted to manipulating the creations we were tasked to safeguard. Others view Angel intervention in the mortal world to be heretical.&The pages of human history are littered with Angelic Intervention…&Some angels have chosen champions throughout time to represent their ideals. Are these champions cursed or blessed?&While it is not often, even Angels will clash with one another. It is unavoidable.&Life began as organic, the Cytokind Angels believe life can be much more with technology.& You might want to stay away from the one called Judea. "
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "E1AF266A333255488B2878395159E1CA8A9B",
                "expanded": true
            },
            {
                "id": "gs.ListFromText",
                "params": {
                    "separator": "&",
                    "textVariable": {
                        "name": "laplaceAngelChatter",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "laplaceAngelChatList",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "D2841B0E6F2972474C69323043DF079EA09A"
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "laplaceBg.png",
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
                    "characterId": "FD977B8B4406C244312897287455AF8ED2AA",
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
                        "x": 510,
                        "y": 129.19475639453844,
                        "angle": 0,
                        "zoom": 0,
                        "horizontalFlip": false,
                        "data": {
                            "zoom": 0.4754417919910041
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
                    "duration": 30,
                    "waitForCompletion": 1,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1
                    },
                    "previewBackground": {
                        "name": "",
                        "folderPath": ""
                    }
                },
                "indent": 0,
                "uid": "3799C06932479543F66AA6A6C06910E044E5",
                "expanded": false
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": 0,
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
                "uid": "6FB2F2CF11F1C54D3E1A1F575C2B39B2B535"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 30
                },
                "indent": 0,
                "uid": "F8212CE53D4558406778E251A371BF461F39"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "convoMain"
                },
                "indent": 0,
                "uid": "8D68DC606E1D574EF71BBE71339755BFF863"
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
                        "defaultText": "I am Laplace the Moved. I divine Design from Noise, eternally bound to becoming.…Forgive me, it has been eternities since I have spoken so personally to a human. Though, I must confess, I watch over your kind frequently."
                    },
                    "position": 0,
                    "characterId": "FD977B8B4406C244312897287455AF8ED2AA",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "211CB1B0546DD347BD4A29F5F7E3D80BAB38",
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
                        "label": "design",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "What is Design?"
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
                "uid": "C30DF8A60ACFD3405C3896088E9CBB4C487D"
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
                        "label": "designNoise",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "How do you find Design in The Noise?"
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
                "indent": 1,
                "uid": "38661BA03B5B124D360B14E52E63E70F446A"
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
                        "label": "otherAngels",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Thoughts on other Angels?"
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
                "uid": "C2BF52230A84D44AE9586A54CD5C3724608B"
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
                        "defaultText": "Visit another Angel"
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
                "uid": "F3C0A29D163A54432D9AC6C6096BC6C8624A"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "23E936247777864B4F281605223487DAD0B2"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "design"
                },
                "indent": 0,
                "uid": "9E51EF2004EED542157A1B37E3C9EC2B3119"
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
                        "defaultText": "You find yourself in front of me and ask what is Design? Think about every decision, every chance encounter. "
                    },
                    "position": 0,
                    "characterId": "FD977B8B4406C244312897287455AF8ED2AA",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "AC45A05828FC5548E54BD5B751BD85D211AC",
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
                "uid": "FA5656316C7C954FBF1855B3EFD72C9F4461"
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
                        "defaultText": "Did you come here of your own free will or what is fate that brought you here? We can never truly know which one is in control, and sometimes it can feel like we're just pawns in some grand game being played out by the universe. "
                    },
                    "position": 0,
                    "characterId": "FD977B8B4406C244312897287455AF8ED2AA",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "A84429C814343648C35A9E593CAF54B64AE3",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 0,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "indent": 0,
                "uid": "2AE338FA43A7C248D06AD5E71FAE4A5D8BC7"
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
                        "defaultText": "Or maybe that is just an excuse. Maybe we're not just helpless bystanders in the face of fate. Maybe we have the power to shape our own destiny, to make our own choices and forge our own path."
                    },
                    "position": 0,
                    "characterId": "FD977B8B4406C244312897287455AF8ED2AA",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "439A0FBB2AF7E14CC28A2F73EF98C2B05758",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 0,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "indent": 0,
                "uid": "1F7E35A43F51534F9B6AFAB6E7634A5708BA"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "convoMain",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "5EAA91A86913F74FD3497CC1AF6801919D63"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "designNoise"
                },
                "indent": 1,
                "uid": "A3DED3C39250A4473D3B45D948AAE5D90216"
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
                        "defaultText": ""
                    },
                    "position": 0,
                    "characterId": "FD977B8B4406C244312897287455AF8ED2AA",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 1,
                "uid": "F784B53A38BCD848C1486AC1124CA2ACA00C",
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
                "indent": 1,
                "uid": "BA88E61D191A4547BE7BBDA1478DAA3EECB3"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "convoMain",
                    "target": "activeContext"
                },
                "indent": 1,
                "uid": "FA2B52AF093A87480B69E6941CCB528811A5"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "otherAngels"
                },
                "indent": 0,
                "uid": "BF63F59E07997745406AC331DE16770BC252"
            },
            {
                "id": "gs.ListShuffle",
                "params": {
                    "listVariable": {
                        "name": "laplaceAngelChatList",
                        "index": 0,
                        "scope": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C071EB821CE8B44E791ACEF3D292C2AA6114"
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
                    "characterId": "FD977B8B4406C244312897287455AF8ED2AA",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": [],
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "7E4CA2F04E8059406C997F0529287877612E",
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
                "uid": "51194A527F96C843A76836C62C4B9495F112"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "convoMain",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "22615C4A7CE79546743B94C71FD2D49D280B"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "visitOtherAngels"
                },
                "indent": 0,
                "uid": "6866F4402C3BA44F5C2BD463DC571CAA5F26"
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
                        "defaultText": "Which Angel do you want to visit? "
                    },
                    "position": 0,
                    "characterId": "FD977B8B4406C244312897287455AF8ED2AA",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "3D1856A8788B87438E18BDE34A4918CDABF1",
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
                "uid": "243F237B1E0BD0498C28895091877E8E1EB8"
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
                "uid": "9894453A6D42B549B33B16C508A1C8E870B6"
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
                "uid": "9E4108463268B24AEE29F2135AD28124117B"
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
                        "defaultText": "Sirius the Journeyed "
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
                "uid": "E7798F5D1B323341BA2A6298E8A22F53C226"
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
                        "label": "convoMain",
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
                "uid": "3E4D6E211AC9264E2B7BCF68A5E3A5334D07"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "463E5ECF32E3C448160B7A222B8307747FCC"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpAria"
                },
                "indent": 0,
                "uid": "5717BA7D2470B747C07917E6EDE30D3AE747"
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
                "uid": "F2099A1B4E5B4146548BC60214AFCB764BB7"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpJudea"
                },
                "indent": 0,
                "uid": "2DF775BA384DE148F54BDE714D1B424D8EFF"
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
                "uid": "9A10228959541244AE2B6A994E5C727ED663"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpPenelope"
                },
                "indent": 0,
                "uid": "5678EA7F683EC94E47285C13A9D2A09C358A"
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
                "uid": "EA73CD1301467342E929F261F4CFA5159E96"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "jumpSirius"
                },
                "indent": 0,
                "uid": "974E44963BDAC543811A9671648FA45B1408"
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
                "uid": "C2566F3977E754483A085B05E30A54ECF681"
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "laplaceAngelChatter",
                "index": 0,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            }
        ],
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "listVariables": [
            {
                "name": "laplaceAngelChatList",
                "index": 0,
                "scope": 0,
                "domain": "com.degica.vnm.default"
            }
        ],
        "localizableStrings": {}
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