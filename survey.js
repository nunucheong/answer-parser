const survey = {
    "surveyID" : "SV_ID9",
    "surveyMeta" : {
        "surveyName" : "Test Matrix Display Logic",
        "surveyDescription" : "This is a test survey testing display logic of matrix question type",
        "reward" : 1,
        "country" : "my",
        "languages" : [
            "en",
            "my"
        ],
        "status" : "close",
	"testMode" : "disabled"
    },
    "surveyQuestions" : [
        {
            "questionID" : "QID1",
            "questionLabel" : "What is your name? (a word or set of words by which a person or thing is known, addressed, or referred to.) This question is so long! Please bear with me.",
            "questionType" : "TE",
            "defaultText" : "johndoe",
            "rule" : {
                "required" : true,
                "data_type" : "string"
            },
            "language" : {
                "MY" : {
                    "questionLabel" : "Siapakan nama anda?",
                    "defaultText" : "alibinahmad"
                }
            }
        },
        {
            "questionID" : "QID2",
            "questionLabel" : "What is your gender?[ the state of being male or female (typically used with reference to social and cultural differences rather than biological ones)].",
            "questionType" : "MC",
            "selector" : "SAVR",
            "choices" : {
                "1" : {
                    "display" : "Male. of or denoting the sex that produces gametes, especially spermatozoa, with which a female may be fertilized or inseminated to produce offspring.A male person, plant, or animal."
                },
                "2" : {
                    "display" : "Female"
                }
            },
            "choiceOrder" : [
                "1",
                "2"
            ],
            "rule" : {
                "required" : true
            },
            "language" : {
                "MY" : {
                    "questionLabel" : "Apakah jantina anda?",
                    "choices" : {
                        "1" : {
                            "display" : "Lelaki"
                        },
                        "2" : {
                            "display" : "Perempuan"
                        }
                    }
                }
            },
            "configuration" : {
                "choicesRandomization" : true,
                "noneOfAboveAsChoice" : false,
                "otherAsChoice" : false
            }
        },
        {
            "questionID" : "QID3",
            "questionLabel" : "Do you play any sport frequently? You can choose multiple.",
            "questionType" : "MC",
            "selector" : "MAVR",
            "choices" : {
                "1" : {
                    "display" : "Tennis. Tennis is a racket sport that can be played individually against a single opponent or between two teams of two players each. Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent's court."
                },
                "2" : {
                    "display" : "Basketball"
                },
                "3" : {
                    "display" : "Badminton"
                },
                "4" : {
                    "display" : "Swimming. Swim in the seaaaaaaa."
                },
                "5" : {
                    "display" : "Jogging"
                }
            },
            "choiceOrder" : [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "rule" : {
                "required" : true,
                "min_choice" : 2
            },
            "language" : {
                "MY" : {
                    "questionLabel" : "Adakah anda kerap menjalani aktiviti sukan? Anda boleh pilih lebih dari satu.",
                    "choices" : {
                        "1" : {
                            "display" : "Tenis"
                        },
                        "2" : {
                            "display" : "Bola Keranjang"
                        },
                        "3" : {
                            "display" : "Bulu tangkis"
                        },
                        "4" : {
                            "display" : "Berenang"
                        },
                        "5" : {
                            "display" : "Berjoging"
                        }
                    }
                }
            },
            "configuration" : {
                "choicesRandomization" : true,
                "noneOfAboveAsChoice" : true,
                "otherAsChoice" : true
            }
        },
        {
            "questionID" : "QID4",
            "questionLabel" : "Tennis is the best!",
            "questionType" : "MC",
            "selector" : "SAVR",
            "choices" : {
                "1" : {
                    "display" : "Absolutely!"
                },
                "2" : {
                    "display" : "NO! an expression or feeling of disapproval or opposition a reason for disagreeing."
                }
            },
            "choiceOrder" : [
                "1",
                "2"
            ],
            "rule" : {
                "required" : true
            },
            "language" : {
                "MY" : {
                    "questionLabel" : "Tenis adalah yang terbaik!",
                    "choices" : {
                        "1" : {
                            "display" : "Setuju!"
                        },
                        "2" : {
                            "display" : "Oh Sememangnya!"
                        }
                    }
                }
            },
            "configuration" : {
                "choicesRandomization" : true,
                "noneOfAboveAsChoice" : false,
                "otherAsChoice" : false
            }
        },
        {
            "questionID" : "QID5",
            "questionLabel" : "How many days do you exercise in a week?",
            "questionType" : "Slider",
            "selector" : "CSLIDER",
            "labels" : [

            ],
            "rule" : {
                "required" : true
            },
            "language" : {
                "MY" : {
                    "questionLabel" : "Berapa harikah anda bersenam dalam seminggu?",
                    "labels" : [

                    ]
                }
            },
            "configuration" : {
                "isRanged" : true,
                "sliderMax" : 7,
                "sliderMin" : 1,
                "step" : 1,
                "gridLines" : 3,
                "showValue" : true,
                "sliderStartPositions" : 0.5,
                "snapToGrid" : false
            }
        },
        {
            "questionID" : "QID6",
            "questionLabel" : "Please rank how likely these options will get you to be active.",
            "questionType" : "Ranking",
            "choices" : {
                "1" : {
                    "display" : "Indulgence of food without worry.Eater is the one-stop-shop for food and restaurant obsessives, coming to you from 24 cities across North America with new adventures around the world."
                },
                "2" : {
                    "display" : "Fitting in clothes confidently"
                },
                "3" : {
                    "display" : "Acquiring the latest sport equipments"
                },
                "4" : {
                    "display" : "Meeting new and supportive people"
                },
                "5" : {
                    "display" : "Trying new sports. Sports (American English) includes all forms of competitive physical activity or games which,[1] through casual or organised participation, aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment for spectators.[2] Hundreds of sports exist, from those between single contestants, through to those with hundreds of simultaneous participants, either in teams or competing as individuals. In certain sports such as racing, many contestants may compete,"
                }
            },
            "choiceOrder" : [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "rule" : {
                "required" : true
            },
            "language" : {
                "MY" : {
                    "questionLabel" : "Sila menimbangkan pilihan di bawah mengikut kemungkinannya mempengaruhi anda untuk bersukan",
                    "choices" : {
                        "1" : {
                            "display" : "Makan tanpa risau"
                        },
                        "2" : {
                            "display" : "Pakai baju penuh konfiden"
                        },
                        "3" : {
                            "display" : "Memiliki peralatan sukan terbaru"
                        },
                        "4" : {
                            "display" : "Berkenalan dengan sahabat baru"
                        },
                        "5" : {
                            "display" : "Mencuba sukan yang baru"
                        }
                    }
                }
            }
        },
        {
            "questionID" : "QID7",
            "questionLabel" : "Please select your favourite fruit",
            "questionType" : "Dropdown",
            "selector" : "SAVR",
            "choices" : {
                "1" : {
                    "display" : "Banana.A banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called \"plantains\", distinguishing them from dessert bananas."
                },
                "2" : {
                    "display" : "Apple"
                },
                "3" : {
                    "display" : "Orange"
                },
                "4" : {
                    "display" : "Watermelon. A fruit without water nor melon."
                },
                "5" : {
                    "display" : "Pineapple"
                }
            },
            "choiceOrder" : [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "rule" : [
                "required"
            ],
            "language" : {
                "MY" : {
                    "questionLabel" : "Sila pilih buah-buahan kegemaran anda",
                    "choices" : {
                        "1" : {
                            "display" : "Pisang"
                        },
                        "2" : {
                            "display" : "Epal"
                        },
                        "3" : {
                            "display" : "Oren"
                        },
                        "4" : {
                            "display" : "Tembikai"
                        },
                        "5" : {
                            "display" : "Nanas"
                        }
                    }
                }
            },
            "configuration" : {
                "choicesRandomization" : true,
                "noneOfAboveAsChoice" : false,
                "otherAsChoice" : false
            }
        },
        {
            "questionID" : "QID8",
            "questionLabel" : "Please select your favourite brands",
            "questionType" : "Dropdown",
            "selector" : "MAVR",
            "choices" : {
                "1" : {
                    "display" : "Nike"
                },
                "2" : {
                    "display" : "Adidas"
                },
                "3" : {
                    "display" : "Reebok"
                },
                "4" : {
                    "display" : "Lining"
                },
                "5" : {
                    "display" : "Asics.ASICS is a Japanese multinational corporation which produces footwear and sports equipment designed for a wide range of sports, generally in the upper price range. The name is an acronym for the Latin phrase anima sana in corpore sano, which translates as \"Healthy soul in a healthy body\""
                }
            },
            "choiceOrder" : [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "rule" : [
                "required"
            ],
            "language" : {
                "MY" : {
                    "questionLabel" : "Sila pilih jename kegemaran anda",
                    "choices" : {
                        "1" : {
                            "display" : "Nike"
                        },
                        "2" : {
                            "display" : "Adidas"
                        },
                        "3" : {
                            "display" : "Reebok"
                        },
                        "4" : {
                            "display" : "Lining"
                        },
                        "5" : {
                            "display" : "Asics"
                        }
                    }
                }
            },
            "configuration" : {
                "choicesRandomization" : true,
                "noneOfAboveAsChoice" : false,
                "otherAsChoice" : false
            }
        },
        {
            "questionID" : "QID9",
            "questionLabel" : "Please indicate how much you like and dislike the following desserts",
            "questionType" : "Matrix",
            "selector" : "SAVR",
            "rule" : {

            },
            "answers" : {
                "1" : {
                    "display" : "Like a great deal. Favourite has been the preferred spelling in British English for several centuries, but this does not mean that favorite is a late arrival to the language or even American in origin."
                },
                "2" : {
                    "display" : "Neither like or dislike"
                },
                "3" : {
                    "display" : "Dislike a great deal"
                }
            },
            "answerOrder" : [
                "1",
                "2",
                "3"
            ],
            "choices" : {
                "1" : {
                    "display" : "Carrot Cake. Carrot cake is a cake that contains carrots mixed into the batter."
                },
                "2" : {
                    "display" : "Ice cream"
                },
                "3" : {
                    "display" : "Apple pie with no apple"
                },
                "4" : {
                    "display" : "Cookie and Milk"
                },
                "5" : {
                    "display" : "Cheese cake"
                }
            },
            "choiceOrder" : [
                "2",
                "3",
                "1",
                "5",
                "4"
            ],
            "language" : {
                "MY" : {
                    "questionLabel" : "Sila nyatakan pendapat anda tentang pencuci mulut di bawah",
                    "answers" : {
                        "1" : {
                            "display" : "Sangat suka"
                        },
                        "2" : {
                            "display" : "Tiada pendapat"
                        },
                        "3" : {
                            "display" : "Sangat tidak suka"
                        }
                    },
                    "choices" : {
                        "1" : {
                            "display" : "Kek lobak"
                        },
                        "2" : {
                            "display" : "Aiskrim"
                        },
                        "3" : {
                            "display" : "Pai Epal"
                        },
                        "4" : {
                            "display" : "Biskuit dan Susu"
                        },
                        "5" : {
                            "display" : "Kek Keju"
                        }
                    }
                }
            },
            "configuration" : {
                "noneOfAboveAsChoice" : false,
                "otherAsChoice" : true,
                "choicesRandomization" : true
            }
        },
        {
            "questionID" : "QID10",
            "questionLabel" : "How satisfied or dissatisfied are you with each of the following?",
            "questionType" : "Matrix",
            "selector" : "MAVR",
            "rule" : {

            },
            "answers" : {
                "1" : {
                    "display" : "Very satisfied"
                },
                "2" : {
                    "display" : "Somewhat satisfied"
                },
                "3" : {
                    "display" : "Neither satisfied nor dissatisfied"
                },
                "4" : {
                    "display" : "Somewhat dissatisfied"
                },
                "5" : {
                    "display" : "Very dissatisfied. of the poorest quality or the lowest standard least good or desirable."
                }
            },
            "answerOrder" : [
                "1",
                "2",
                "3",
                "4",
                "5"
            ],
            "choices" : {
                "1" : {
                    "display" : "The interaction with the sales staff"
                },
                "2" : {
                    "display" : "Your experience at the register"
                },
                "3" : {
                    "display" : "The price of the product.involving high cost or sacrifice an expensive hobby. 2a : commanding a high price and especially one that is not based on intrinsic worth or is beyond a prospective buyer's means. b : characterized by high prices expensive shops"
                }
            },
            "choiceOrder" : [
                "2",
                "3",
                "1"
            ],
            "language" : {
                "MY" : {
                    "questionLabel" : "Sila nyatakan pendapat anda tentang perkara di bawah",
                    "answers" : {
                        "1" : {
                            "display" : "Sangat puas hati"
                        },
                        "2" : {
                            "display" : "Sedikit puas hati"
                        },
                        "3" : {
                            "display" : "Tiada pendapat"
                        },
                        "4" : {
                            "display" : "Sedikit tidak puas hati"
                        },
                        "5" : {
                            "display" : "Sangat tidak puas hati"
                        }
                    },
                    "choices" : {
                        "1" : {
                            "display" : "Interaksi dengan staf penjual"
                        },
                        "2" : {
                            "display" : "Pengalaman anda di kaunter"
                        },
                        "3" : {
                            "display" : "Harga produk"
                        }
                    }
                }
            },
            "configuration" : {
                "noneOfAboveAsChoice" : false,
                "otherAsChoice" : true,
                "choicesRandomization" : true
            }
        }
    ],
    "pages" : [
        {
            "pageID" : "PG_ID1",
            "pageName" : "About You",
            "pageDescription" : "This page is intended to understand you better. Don't worry, we won't go facebook on your data... Maybe( Dont trust me)",
            "language" : {
                "MY" : {
                    "pageName" : "Tentang Anda",
                    "pageDescription" : "Muka surat ini adalah untuk mengenal anda secara lebih rapat. Informasi anda adalah selamat dengan kami."
                }
            },
            "pageQuestions" : [
                "QID1",
                "QID2",
                "QID3"
            ]
        },
        {
            "pageID" : "PG_ID2",
            "pageName" : "Sports = Life",
            "pageDescription" : "This page is intended to encourage you to continue your good effort.",
            "language" : {
                "MY" : {
                    "pageName" : "Badan Cergas Otak Cerdas",
                    "pageDescription" : "Muka surat ini adalah untuk mengucapkan syabas atas usaha anda dalam berhidupan sihat."
                }
            },
            "pageQuestions" : [
                "QID4",
                "QID5"
            ]
        },
        {
            "pageID" : "PG_ID3",
            "pageName" : "Please get healthy",
            "pageDescription" : "This page is intended to encourage you to get into sport.",
            "language" : {
                "MY" : {
                    "pageName" : "Jemput bersukan",
                    "pageDescription" : "Muka surat ini adalah untuk memujuk anda pergi bersenam."
                }
            },
            "pageQuestions" : [
                "QID6",
                "QID7",
                "QID8",
                "QID9",
                "QID10"
            ]
        }
    ],
    "flow" : [
        {
            "flowID" : "F_ID1",
            "pageID" : "PG_ID1"
        },
        {
            "flowID" : "F_ID2"
        },
        {
            "flowID" : "F_ID4"
        }
    ]
}

module.exports = survey
