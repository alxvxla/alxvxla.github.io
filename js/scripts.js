document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.scroll-down').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#timeline-embed').scrollIntoView({ behavior: 'smooth' });
    });

    var timelineData = {
        "title": {
          "media": {
            "url": "images/cover.jpg",
            "caption": "Развитие атомной энергетики"
          },
          "text": {
            "headline": "История атомной энергетики",
            "text": "<p>Развитие атомной энергетики началось относительно недавно, но эта индустрия уже очень сильно развита и продолжает идти вперед семимильными шагами. Этот проект создан с целью помочь разобраться в том, как зародилось и развивалось такое важное и интересное направление науки.</p>"
          }
        },
        "events": [
            {
              "media": {
                "url": "images/beckerkel.jpg",
                "caption": "Антуан Анри Беккерель"
              },
              "start_date": {
                "year": "1896",
                "month": "03",
                "day": "01"
              },
              "text": {
                "headline": "Открытие радиоактивности",
                "text": "<p>Антуан Анри Беккерель обнаруживает радиоактивность, экспериментируя с ураном. Это открытие стало основой для дальнейших исследований в области ядерной физики, положив начало многим новым изобретениям.</p>"
              }
            },
            {
              "media": {
                "url": "images/curie.jpg",
                "caption": "Мария и Пьер Кюри"
              },
              "start_date": {
                "year": "1898",
                "month": "12",
                "day": "21"
              },
              "text": {
                "headline": "Открытие радия и полония",
                "text": "<p>Мария и Пьер Кюри объявляют об открытии новых элементов - радия и полония. Их работа расширила понимание радиоактивности и привела к значительным открытиям, которые впоследствии использовались в медицине и энергетике.</p>"
              }
            },
            {
              "media": {
                "url": "images/einstein.jpg",
                "caption": "Альберт Эйнштейн"
              },
              "start_date": {
                "year": "1905",
                "month": "11",
                "day": "21"
              },
              "text": {
                "headline": "Теория относительности",
                "text": "<p>Альберт Эйнштейн публикует свою теорию относительности, включая знаменитое уравнение E=mc². Это уравнение продемонстрировало взаимосвязь массы и энергии и стало фундаментом для понимания ядерных реакций, что является основой атомной энергетики.</p>"
              }
            },
            {
              "media": {
                "url": "images/chadwick.jpg",
                "caption": "Нейтрон"
              },
              "start_date": {
                "year": "1932",
                "month": "02",
                "day": "27"
              },
              "text": {
                "headline": "Открытие нейтрона",
                "text": "<p>Джеймс Чедвик обнаруживает нейтрон. Это открытие сыграло ключевую роль в развитии ядерной физики и технологии, используемой в атомной энергетике, поскольку нейтроны стали основным элементом для инициирования ядерных реакций.</p>"
              }
            },
            {
              "media": {
                "url": "images/han.jpg",
                "caption": "Деления ядра урана U-235"
              },
              "start_date": {
                "year": "1938",
                "month": "12",
                "day": "17"
              },
              "text": {
                "headline": "Открытие ядерного деления",
                "text": "<p>Отто Ган и Фриц Штрассман открывают ядерное деление, экспериментируя с ураном. Это открытие продемонстрировало возможность разделения атомных ядер и освобождения огромного количества энергии, что стало основой для разработки ядерных реакторов и атомных бомб.</p>"
              }
            },
            {
              "media": {
                "url": "images/fermi.jpg",
                "caption": "Энрико Ферми"
              },
              "start_date": {
                "year": "1942",
                "month": "12",
                "day": "02"
              },
              "text": {
                "headline": "Первая управляемая цепная реакция",
                "text": "<p>Энрико Ферми и его команда успешно проводят первую управляемую цепную реакцию в ядерном реакторе Чикаго-1. Это событие стало важной вехой в развитии атомной энергетики и привело к созданию первых атомных электростанций.</p>"
              }
            },
            {
              "media": {
                "url": "images/hiroshima.jpg",
                "caption": "Хиросима после атомной бомбардировки"
              },
              "start_date": {
                "year": "1945",
                "month": "08",
                "day": "06"
              },
              "text": {
                "headline": "Атомная бомбардировка Хиросимы",
                "text": "<p>США сбрасывают атомную бомбу на японский город Хиросима. Это первое использование ядерного оружия в военных действиях продемонстрировало разрушительную силу ядерной энергии и существенно повлияло на мировую политику и развитие атомных технологий.</p>"
              }
            },
            {
              "media": {
                "url": "images/nagasaki.jpg",
                "caption": "Нагасаки после атомной бомбардировки"
              },
              "start_date": {
                "year": "1945",
                "month": "08",
                "day": "09"
              },
              "text": {
                "headline": "Атомная бомбардировка Нагасаки",
                "text": "<p>США сбрасывают вторую атомную бомбу на японский город Нагасаки. Это событие привело к капитуляции Японии и окончанию Второй мировой войны, а также оказало значительное влияние на последующее развитие международных отношений и ядерных технологий.</p>"
              }
            },
            {
              "media": {
                "url": "images/us-atomic-energy-commission.jpg",
                "caption": "Комиссия по атомной энергии США"
              },
              "start_date": {
                "year": "1946",
                "month": "08",
                "day": "01"
              },
              "text": {
                "headline": "Создание Комиссии по атомной энергии США",
                "text": "<p>В США создается Комиссия по атомной энергии (AEC), ответственная за контроль и развитие атомных технологий в мирных и военных целях. Это учреждение сыграло ключевую роль в развитии атомной энергетики и регулировании ядерной безопасности.</p>"
              }
            },
            {
              "media": {
                "url": "images/first-nuclear-reactor.jpg",
                "caption": "Первый ядерный реактор для производства электроэнергии"
              },
              "start_date": {
                "year": "1946",
                "month": "12",
                "day": "20"
              },
              "text": {
                "headline": "Первый ядерный реактор для производства электроэнергии",
                "text": "<p>В США запускается первый ядерный реактор для производства электроэнергии. Это событие ознаменовало начало использования ядерной энергии в мирных целях и положило начало развитию атомной энергетики.</p>"
              }
            },
            {
              "media": {
                "url": "images/soviet-atomic-bomb.jpg",
                "caption": "Первое испытание советской атомной бомбы"
              },
              "start_date": {
                "year": "1949",
                "month": "08",
                "day": "29"
              },
              "text": {
                "headline": "Первое испытание советской атомной бомбы",
                "text": "<p>СССР проводит первое успешное испытание атомной бомбы. Это событие продемонстрировало достижение ядерного паритета между СССР и США и способствовало началу ядерной гонки в рамках холодной войны.</p>"
              }
            },
            {
              "media": {
                "url": "images/obninsk.jpg",
                "caption": "Первая в мире АЭС в Обнинске"
              },
              "start_date": {
                "year": "1954",
                "month": "06",
                "day": "27"
              },
              "text": {
                "headline": "Запуск первой в мире АЭС в Обнинске",
                "text": "<p>В СССР запускается первая в мире атомная электростанция в Обнинске. Она стала первой, произведшей электроэнергию для коммерческого использования и ознаменовала начало эпохи атомной энергетики.</p>"
              }
            },
            {
              "media": {
                "url": "images/geneva-conference.jpg",
                "caption": "Первая конференция по мирному использованию атомной энергии"
              },
              "start_date": {
                "year": "1955",
                "month": "08",
                "day": "08"
              },
              "text": {
                "headline": "Первая конференция по мирному использованию атомной энергии",
                "text": "<p>В Женеве проходит первая конференция по мирному использованию атомной энергии. Это событие собрало ученых и политиков со всего мира для обсуждения возможностей и рисков использования ядерной энергии в мирных целях.</p>"
              }
            },
            {
              "media": {
                "url": "images/iaea.jpg",
                "caption": "Международное агентство по атомной энергии (МАГАТЭ)"
              },
              "start_date": {
                "year": "1957",
                "month": "07",
                "day": "29"
              },
              "text": {
                "headline": "Создание МАГАТЭ",
                "text": "<p>Создается Международное агентство по атомной энергии (МАГАТЭ), призванное содействовать мирному использованию ядерной энергии и предотвращению её использования в военных целях. МАГАТЭ играет ключевую роль в регулировании и обеспечении безопасности атомной энергетики.</p>"
              }
            },
            {
              "media": {
                "url": "images/lenin-icebreaker.jpg",
                "caption": "Атомный ледокол Ленин"
              },
              "start_date": {
                "year": "1957",
                "month": "12",
                "day": "03"
              },
              "text": {
                "headline": "Запуск первого атомного ледокола Ленин",
                "text": "<p>В СССР спущен на воду первый в мире атомный ледокол Ленин. Это событие показало возможность использования ядерной энергии в судоходстве и значительно улучшило возможности по освоению Арктики.</p>"
              }
            },
            {
              "media": {
                "url": "images/kyshtym-disaster.jpg",
                "caption": "Авария на химкомбинате Маяк"
              },
              "start_date": {
                "year": "1957",
                "month": "09",
                "day": "29"
              },
              "text": {
                "headline": "Авария на химическом комбинате Маяк в Кыштыме",
                "text": "<p>29 сентября 1957 года на химическом комбинате Маяк в Кыштыме происходит радиационная авария, известная как Кыштымская катастрофа. Это одна из крупнейших ядерных катастроф в истории, приведшая к значительному загрязнению окружающей среды.</p>"
              }
            },
            {
              "media": {
                "url": "images/sl-1.jpg",
                "caption": "АЭС SL-1"
              },
              "start_date": {
                "year": "1961",
                "month": "01",
                "day": "03"
              },
              "text": {
                "headline": "Авария на АЭС SL-1",
                "text": "<p>В США происходит авария на экспериментальной ядерной электростанции SL-1. Это была первая авария с летальным исходом в истории атомной энергетики, приведшая к гибели трех операторов и значительному радиоактивному загрязнению.</p>"
              }
            },
            {
              "media": {
                "url": "images/rapsodie.jpg",
                "caption": "Реактор на быстрых нейтронах Rapsodie"
              },
              "start_date": {
                "year": "1964",
                "month": "01",
                "day": "28"
              },
              "text": {
                "headline": "Пуск первого реактора на быстрых нейтронах",
                "text": "<p>Во Франции запускается первый реактор на быстрых нейтронах Rapsodie. Это событие ознаменовало новый этап в развитии ядерных технологий, позволив эффективнее использовать ядерное топливо и уменьшить количество радиоактивных отходов.</p>"
              }
            },
            {
              "media": {
                "url": "images/440.jpg",
                "caption": "ВВЭР-440"
              },
              "start_date": {
                "year": "1967",
                "month": "12",
                "day": "20"
              },
              "text": {
                "headline": "Запуск первого ВВЭР-440",
                "text": "<p>В СССР запускается первый реактор типа ВВЭР-440. Этот тип реактора стал широко использоваться в атомной энергетике благодаря своей надежности и безопасности.</p>"
              }
            },
            {
              "media": {
                "url": "images/energy-crisis.jpg",
                "caption": "Энергетический кризис 1973 года"
              },
              "start_date": {
                "year": "1973",
                "month": "10",
                "day": "17"
              },
              "text": {
                "headline": "Энергетический кризис 1973 года",
                "text": "<p>Начинается энергетический кризис, вызванный резким увеличением цен на нефть. Этот кризис стимулировал развитие альтернативных источников энергии, включая атомную энергетику, как способ снижения зависимости от нефти.</p>"
              }
            },
            {
              "media": {
                "url": "images/1000.jpg",
                "caption": "Первый реактор ВВЭР-1000"
              },
              "start_date": {
                "year": "1976",
                "month": "05",
                "day": "05"
              },
              "text": {
                "headline": "Запуск первого реактора ВВЭР-1000",
                "text": "<p>В СССР запускается первый реактор типа ВВЭР-1000. Этот реактор стал основой для многих атомных электростанций в различных странах благодаря своей высокой мощности и эффективности.</p>"
              }
            },
            {
              "media": {
                "url": "images/three-mile-island.jpg",
                "caption": "Авария на АЭС Три-Майл-Айленд"
              },
              "start_date": {
                "year": "1979",
                "month": "03",
                "day": "28"
              },
              "text": {
                "headline": "Авария на АЭС Три-Майл-Айленд",
                "text": "<p>В США происходит авария на атомной электростанции Три-Майл-Айленд. Это событие стало крупнейшей аварией в истории атомной энергетики США, вызвавшей широкую общественную реакцию и изменение политики в области ядерной безопасности.</p>"
              }
            },
            {
              "media": {
                "url": "images/chernobyl.jpg",
                "caption": "Авария на Чернобыльской АЭС"
              },
              "start_date": {
                "year": "1986",
                "month": "04",
                "day": "26"
              },
              "text": {
                "headline": "Авария на Чернобыльской АЭС",
                "text": "<p>В СССР происходит авария на Чернобыльской АЭС. Это крупнейшая ядерная катастрофа в истории, приведшая к значительным человеческим жертвам и радиоактивному загрязнению обширных территорий. Авария оказала огромное влияние на восприятие ядерной энергетики в мире и привела к ужесточению мер безопасности.</p>"
              }
            },
            {
              "media": {
                "url": "images/komsomolec.jpg",
                "caption": "АПЛ Комсомолец"
              },
              "start_date": {
                "year": "1989",
                "month": "10",
                "day": "06"
              },
              "text": {
                "headline": "Инцидент с советской атомной подводной лодкой Комсомолец",
                "text": "<p>Происходит инцидент с советской атомной подводной лодкой Комсомолец, в результате которого лодка затонула. Это событие привлекло внимание к проблемам безопасности и экологии, связанным с использованием атомной энергии в военных целях.</p>"
              }
            },
            {
              "media": {
                "url": "images/fukushima.jpg",
                "caption": "Авария на АЭС Фукусима-1"
              },
              "start_date": {
                "year": "2011",
                "month": "03",
                "day": "11"
              },
              "text": {
                "headline": "Авария на АЭС Фукусима-1",
                "text": "<p>В Японии происходит авария на АЭС Фукусима-1 в результате землетрясения и цунами. Это событие стало крупнейшей ядерной катастрофой со времен Чернобыля, вызвавшей серьезные последствия для окружающей среды и глобального восприятия ядерной энергетики.</p>"
              }
            },
                {
                  "media": {
                    "url": "images/szilard.jpg",
                    "caption": "Лео Силард"
                  },
                  "start_date": {
                    "year": "1933",
                    "month": "09",
                    "day": "12"
                  },
                  "text": {
                    "headline": "Патент на цепную ядерную реакцию",
                    "text": "<p>Лео Силард подает заявку на патент, описывающий цепную ядерную реакцию. Это концептуальное открытие стало основой для разработки ядерных реакторов и атомной энергетики.</p>"
                  }
                },
                {
                  "media": {
                    "url": "images/manhattan-project.jpg",
                    "caption": "Проект Манхэттен"
                  },
                  "start_date": {
                    "year": "1942",
                    "month": "06",
                    "day": "17"
                  },
                  "text": {
                    "headline": "Начало проекта Манхэттен",
                    "text": "<p>В США начинается проект Манхэттен, направленный на разработку атомной бомбы. Этот секретный проект объединяет лучшие научные умы и приводит к созданию первых ядерных оружий, а также закладывает основы для мирного использования ядерной энергии.</p>"
                  }
                },
                {
                  "media": {
                    "url": "images/uranverein.jpg",
                    "caption": "Урановый клуб"
                  },
                  "start_date": {
                    "year": "1939",
                    "month": "09",
                    "day": "01"
                  },
                  "text": {
                    "headline": "Создание немецкого Уранового клуба",
                    "text": "<p>В Германии создается Урановый клуб — программа исследований ядерной энергии для военных целей. Это событие демонстрирует интерес крупных держав к потенциалу атомной энергии в военной сфере.</p>"
                  }
                },
                {
                  "media": {
                    "url": "images/suez-crisis.jpg",
                    "caption": "Суэцкий кризис"
                  },
                  "start_date": {
                    "year": "1956",
                    "month": "10",
                    "day": "29"
                  },
                  "text": {
                    "headline": "Суэцкий кризис",
                    "text": "<p>Начинается Суэцкий кризис, который приводит к глобальному энергетическому кризису. Этот инцидент ускорил развитие атомной энергетики как альтернативного источника энергии для уменьшения зависимости от нефти.</p>"
                  }
                },
                {
                  "media": {
                    "url": "images/eisenhower.jpg",
                    "caption": "Дуайт Эйзенхауэр"
                  },
                  "start_date": {
                    "year": "1953",
                    "month": "12",
                    "day": "08"
                  },
                  "text": {
                    "headline": "Речь Эйзенхауэра «Атом для мира»",
                    "text": "<p>Президент США Дуайт Эйзенхауэр выступает с речью «Атом для мира» на Генеральной Ассамблее ООН. Эта речь заложила основу для мирного использования ядерной энергии и создания МАГАТЭ.</p>"
                  }
                },
                {
                  "media": {
                    "url": "images/atomic-bomb-test.jpg",
                    "caption": "Испытание водородной бомбы"
                  },
                  "start_date": {
                    "year": "1952",
                    "month": "11",
                    "day": "01"
                  },
                  "text": {
                    "headline": "Первое испытание водородной бомбы",
                    "text": "<p>США проводят первое испытание водородной бомбы на атолле Эниветок. Это событие показало новую, еще более разрушительную силу ядерного оружия и стимулировало гонку вооружений.</p>"
                  }
                },
                {
                  "media": {
                    "url": "images/partial-test-ban-treaty.jpg",
                    "caption": "Подписание Договора о запрещении ядерных испытаний в атмосфере, в космосе и под водой"
                  },
                  "start_date": {
                    "year": "1963",
                    "month": "08",
                    "day": "05"
                  },
                  "text": {
                    "headline": "Подписание Договора о частичном запрещении ядерных испытаний",
                    "text": "<p>США, СССР и Великобритания подписывают Договор о частичном запрещении ядерных испытаний. Договор запрещает ядерные испытания в атмосфере, космосе и под водой, что стало важным шагом в направлении ограничения ядерных вооружений.</p>"
                  }
                },
                {
                  "media": {
                    "url": "images/non-proliferation-treaty.jpg",
                    "caption": "Договор о нераспространении ядерного оружия"
                  },
                  "start_date": {
                    "year": "1968",
                    "month": "07",
                    "day": "01"
                  },
                  "text": {
                    "headline": "Подписание Договора о нераспространении ядерного оружия (ДНЯО)",
                    "text": "<p>Подписывается Договор о нераспространении ядерного оружия (ДНЯО). Договор стремится предотвратить распространение ядерного оружия и способствовать мирному использованию ядерной энергии. ДНЯО стал основным международным соглашением по ядерному разоружению.</p>"
                  }
                },
                    {
                      "media": {
                        "url": "images/cern-ps.jpg",
                        "caption": "Пуск Протонного синхротрона в CERN"
                      },
                      "start_date": {
                        "year": "1980",
                        "month": "01",
                        "day": "11"
                      },
                      "text": {
                        "headline": "Пуск Протонного синхротрона в CERN",
                        "text": "<p>В CERN запускается Протонный синхротрон (PS). Это важное событие в ядерной физике, предоставляющее возможности для исследований элементарных частиц и изучения свойств материи.</p>"
                      }
                    },
                    {
                      "media": {
                        "url": "images/iter.jpg",
                        "caption": "Начало строительства ITER"
                      },
                      "start_date": {
                        "year": "2007",
                        "month": "11",
                        "day": "21"
                      },
                      "text": {
                        "headline": "Начало строительства ITER",
                        "text": "<p>Во Франции начинается строительство Международного термоядерного экспериментального реактора (ITER). Этот проект представляет собой крупнейшую международную кооперацию в области ядерного синтеза, целью которой является демонстрация возможности коммерческого использования термоядерной энергии.</p>"
                      }
                    },
                    {
                      "media": {
                        "url": "images/rosatom.jpg",
                        "caption": "Международный Форум по атомной энергии"
                      },
                      "start_date": {
                        "year": "2014",
                        "month": "06",
                        "day": "23"
                      },
                      "text": {
                        "headline": "Международный Форум по атомной энергии в России",
                        "text": "<p>В России проходит Международный Форум по атомной энергии, организованный Росатомом. Это событие становится важной платформой для обмена опытом и обсуждения перспектив развития мировой атомной энергетики.</p>"
                      }
                    },
                    {
                      "media": {
                        "url": "images/nuclear-renaissance.jpg",
                        "caption": "Эра ядерного возрождения"
                      },
                      "start_date": {
                        "year": "2000",
                        "month": "01",
                        "day": "01"
                      },
                      "text": {
                        "headline": "Начало эры ядерного возрождения",
                        "text": "<p>С начала 2000-х годов начинается эра ядерного возрождения, характеризующаяся увеличением интереса к ядерной энергетике как к чистому и устойчивому источнику энергии. Множество стран планируют строительство новых атомных электростанций.</p>"
                      }
                    },
                      {
                        "media": {
                          "url": "images/akkuyu.jpg",
                          "caption": "Строительство АЭС Аккую в Турции"
                        },
                        "start_date": {
                          "year": "2012",
                          "month": "05",
                          "day": "12"
                        },
                        "text": {
                          "headline": "Россия запускает проект строительства АЭС Аккую в Турции",
                          "text": "<p>12 мая 2012 года Россия официально запускает проект строительства АЭС Аккую в Турции. Это первый в мире проект сооружения атомной электростанции на принципах «строительство – владение – эксплуатация». Ожидается, что АЭС Аккую станет важным шагом в обеспечении энергетической безопасности Турции и усилит двусторонние отношения между Россией и Турцией в области энергетики.</p>"
                        }
                      },
                      {
                        "media": {
                          "url": "images/rostov-npp.jpg",
                          "caption": "Запуск новых реакторов на Ростовской АЭС"
                        },
                        "start_date": {
                          "year": "2014",
                          "month": "03",
                          "day": "18"
                        },
                        "text": {
                          "headline": "Запуск новых реакторов на Ростовской АЭС",
                          "text": "<p>В России запускаются новые энергоблоки на Ростовской АЭС. Введение в эксплуатацию новых реакторов существенно увеличивает производственные мощности станции, делая её одной из крупнейших в стране. Это событие является важным этапом в развитии российской ядерной энергетики.</p>"
                        }
                      },
                      {
                        "media": {
                          "url": "images/belarus-npp.jpg",
                          "caption": "Старт строительства Белорусской АЭС"
                        },
                        "start_date": {
                          "year": "2016",
                          "month": "11",
                          "day": "02"
                        },
                        "text": {
                          "headline": "Старт строительства Белорусской АЭС",
                          "text": "<p>2 ноября 2016 года начинается строительство Белорусской АЭС. Эта станция, расположенная в Островце, станет первой атомной электростанцией в Беларуси. Проект осуществляется при поддержке России и нацелен на обеспечение энергетической безопасности и независимости Беларуси.</p>"
                        }
                      },
                      {
                        "media": {
                          "url": "images/leningrad-npp.jpg",
                          "caption": "Начало строительства новых блоков на Ленинградской АЭС"
                        },
                        "start_date": {
                          "year": "2018",
                          "month": "04",
                          "day": "05"
                        },
                        "text": {
                          "headline": "Россия начинает строительство новых блоков на Ленинградской АЭС",
                          "text": "<p>5 апреля 2018 года в России начинается строительство новых энергоблоков на Ленинградской АЭС. Эти новые блоки с реакторами ВВЭР-1200 предназначены для замены старых блоков и увеличения общей мощности станции. Это важный шаг в модернизации российской ядерной энергетики.</p>"
                        }
                      },
                      {
                        "media": {
                          "url": "images/akademik-lomonosov.jpg",
                          "caption": "Запуск первой в мире плавучей атомной электростанции \"Академик Ломоносов\""
                        },
                        "start_date": {
                          "year": "2019",
                          "month": "05",
                          "day": "22"
                        },
                        "text": {
                          "headline": "Россия запускает первую в мире плавучую атомную электростанцию \"Академик Ломоносов\"",
                          "text": "<p>22 мая 2019 года Россия запускает первую в мире плавучую атомную электростанцию \"Академик Ломоносов\". Эта уникальная станция предназначена для снабжения электроэнергией отдалённых и труднодоступных районов, таких как Чукотка. «Академик Ломоносов» представляет собой важный шаг в развитии мобильной ядерной энергетики.</p>"
                        }
                      },
                      {
                        "media": {
                          "url": "images/rosat.jpg",
                          "caption": "Росатом"
                        },
                        "start_date": {
                          "year": "1994",
                          "month": "09",
                          "day": "07"
                        },
                        "text": {
                          "headline": "Создание Российского атомного агентства",
                          "text": "<p>Создаётся Российское атомное агентство (Росатом). Организация ответственна за управление ядерной энергетикой и промышленностью в России, а также за международное сотрудничество в области ядерных технологий. Росатом играет ключевую роль в развитии и регулировании ядерной отрасли страны.</p>"
                        }
                      },
                      {
                        "media": {
                          "url": "images/bn-600.jpg",
                          "caption": "Коммерческая эксплуатация реактора на быстрых нейтронах BN-600"
                        },
                        "start_date": {
                          "year": "1996",
                          "month": "04",
                          "day": "28"
                        },
                        "text": {
                          "headline": "Первая в мире коммерческая эксплуатация реактора на быстрых нейтронах (BN-600)",
                          "text": "<p>На Белоярской АЭС в России начинается первая в мире коммерческая эксплуатация реактора на быстрых нейтронах BN-600. Этот реактор представляет собой важный шаг в развитии технологий для переработки ядерного топлива и улучшения эффективности ядерной энергетики.</p>"
                        }
                      },
                      {
                        "media": {
                          "url": "images/nuclear-safety-convention.jpg",
                          "caption": "Принятие Конвенции о ядерной безопасности"
                        },
                        "start_date": {
                          "year": "1997",
                          "month": "10",
                          "day": "24"
                        },
                        "text": {
                          "headline": "Принятие Конвенции о ядерной безопасности",
                          "text": "<p>Вступает в силу Конвенция о ядерной безопасности – международный договор, направленный на повышение безопасности атомных электростанций по всему миру. Конвенция обязывает подписавшие её страны соблюдать строгие стандарты безопасности и регулярно отчитываться о выполнении своих обязательств.</p>"
                        }
                      },
                      {
                        "media": {
                          "url": "images/conclusion.jpg",
                          "caption": "Будущее атомной энергетики"
                        },
                        "start_date": {
                          "year": "2025",
                          "month": "01",
                          "day": "01"
                        },
                        "text": {
                          "headline": "Заключение",
                          "text": "<p>Атомная энергетика прошла долгий путь от первых научных открытий до современных высокоэффективных и безопасных технологий. В течение десятилетий она играет ключевую роль в обеспечении энергетической безопасности и снижении выбросов углекислого газа. Однако аварии на АЭС, такие как Чернобыль и Фукусима, показали важность строгих стандартов безопасности. Атомная энергетика продолжает развиваться в качетсве альтернативы грязным источникам выработки энергиии и с каждым годом увеличивает свою долю на этом рынке. Главной целью развития атомной энергетики в ближайшем будущем является повышение безопасности и эффективности производства.</p>"
                        }
                      }
                    ]
    };

    window.timeline = new TL.Timeline('timeline-embed', timelineData);
});
