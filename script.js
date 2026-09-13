// Master Product Inventory
const products = [
    {
        "id": 1,
        "name": "Armani Privé Rouge Malachite (100 ml)",
        "cat": "Femme",
        "price": 499.0,
        "popular": false,
        "desc": "Un floral blanc opulent et crémeux, avec une chaleur ambrée élégante et sensuelle.",
        "tags": [
            "floral",
            "warm",
            "elegant",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p1"
    },
    {
        "id": 2,
        "name": "Babycat Raw Bourbon (125 ml)",
        "cat": "Femme",
        "price": 499.0,
        "popular": false,
        "desc": "Une vanille bourbon sombre, épicée et légèrement cuirée, très enveloppante et sophistiquée.",
        "tags": [
            "warm",
            "sweet",
            "woody",
            "winter",
            "strong"
        ],
        "unisex": true,
        "imageKey": "femme/p2"
    },
    {
        "id": 3,
        "name": "Baccarat Rouge 540 (100 ml)",
        "cat": "Femme",
        "price": 349.0,
        "popular": true,
        "desc": "Safran aérien, ambre lumineux et bois secs composent un sillage moderne et très reconnaissable.",
        "tags": [
            "warm",
            "woody",
            "elegant",
            "versatile",
            "strong"
        ],
        "unisex": true,
        "imageKey": "femme/p3"
    },
    {
        "id": 4,
        "name": "Burberry Goddess",
        "cat": "Femme",
        "price": 399.0,
        "popular": true,
        "desc": "Une vanille lumineuse adoucie par la lavande, chaleureuse, féminine et facile à porter.",
        "tags": [
            "sweet",
            "warm",
            "elegant",
            "daily",
            "versatile"
        ],
        "unisex": false,
        "imageKey": "femme/p4"
    },
    {
        "id": 5,
        "name": "Burberry Her Eau de Parfum",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Un fruité floral gourmand aux fruits rouges et muscs doux, moderne et joyeux.",
        "tags": [
            "fruity",
            "floral",
            "sweet",
            "daily",
            "spring"
        ],
        "unisex": false,
        "imageKey": "femme/p5"
    },
    {
        "id": 6,
        "name": "Burberry Her Elixir",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Une version plus crémeuse et intense, mêlant fruits rouges, vanille et douceur ambrée.",
        "tags": [
            "fruity",
            "sweet",
            "warm",
            "romantic",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p6"
    },
    {
        "id": 7,
        "name": "My Burberry Blush (100 ml)",
        "cat": "Femme",
        "price": 319.0,
        "popular": false,
        "desc": "Grenade, rose et jasmin donnent un floral frais, pétillant et délicatement romantique.",
        "tags": [
            "floral",
            "fruity",
            "fresh",
            "spring",
            "romantic"
        ],
        "unisex": false,
        "imageKey": "femme/p7"
    },
    {
        "id": 8,
        "name": "Carolina Herrera Good Girl Blush",
        "cat": "Femme",
        "price": 399.0,
        "popular": true,
        "desc": "Pivoine, vanille et fleurs blanches créent un parfum doux, chic et séduisant.",
        "tags": [
            "floral",
            "sweet",
            "romantic",
            "elegant",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p8"
    },
    {
        "id": 9,
        "name": "Casamorati 1888 Lira (100 ml)",
        "cat": "Femme",
        "price": 799.0,
        "popular": false,
        "desc": "Citron gourmand, caramel et vanille épicée pour une signature pâtissière élégante et chaleureuse.",
        "tags": [
            "sweet",
            "warm",
            "elegant",
            "winter",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p9"
    },
    {
        "id": 10,
        "name": "Dolce & Gabbana Q Eau de Parfum",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Un fruité boisé vibrant autour des agrumes, de la cerise et d'un fond de cèdre.",
        "tags": [
            "fruity",
            "woody",
            "fresh",
            "daily",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p10"
    },
    {
        "id": 11,
        "name": "Dolce & Gabbana Devotion Eau de Parfum",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Agrumes confits, fleur d'oranger et vanille composent un gourmand solaire et réconfortant.",
        "tags": [
            "sweet",
            "floral",
            "warm",
            "romantic",
            "daily"
        ],
        "unisex": false,
        "imageKey": "femme/p11"
    },
    {
        "id": 12,
        "name": "Emporio Armani Stronger With You Amber",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Ambre doux, vanille et chaleur boisée offrent un parfum enveloppant au caractère unisexe.",
        "tags": [
            "warm",
            "sweet",
            "woody",
            "winter",
            "strong"
        ],
        "unisex": true,
        "imageKey": "femme/p12"
    },
    {
        "id": 13,
        "name": "Giorgio Armani My Way Parfum",
        "cat": "Femme",
        "price": 399.0,
        "popular": true,
        "desc": "Fleurs blanches, tubéreuse et vanille boisée créent une signature raffinée et lumineuse.",
        "tags": [
            "floral",
            "elegant",
            "romantic",
            "spring",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p13"
    },
    {
        "id": 14,
        "name": "Giorgio Armani Sì (100 ml)",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Cassis, rose et vanille s'équilibrent dans un chypré féminin, élégant et intemporel.",
        "tags": [
            "fruity",
            "floral",
            "elegant",
            "work",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p14"
    },
    {
        "id": 15,
        "name": "Giorgio Armani Sì Passione",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Un fruité floral sensuel, porté par le cassis, la rose et une douceur vanillée.",
        "tags": [
            "fruity",
            "floral",
            "romantic",
            "warm",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p15"
    },
    {
        "id": 16,
        "name": "Givenchy Irresistible Rose Velvet",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Une rose veloutée avec des facettes poudrées et boisées, douce et très élégante.",
        "tags": [
            "floral",
            "elegant",
            "romantic",
            "spring",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p16"
    },
    {
        "id": 17,
        "name": "God of Fire (50 ml)",
        "cat": "Femme",
        "price": 599.0,
        "popular": false,
        "desc": "Mangue juteuse, agrumes et bois chauds donnent un fruité exotique puissant et lumineux.",
        "tags": [
            "fruity",
            "fresh",
            "bold",
            "summer",
            "strong"
        ],
        "unisex": true,
        "imageKey": "femme/p17"
    },
    {
        "id": 18,
        "name": "Givenchy L'Interdit Intense",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Fleurs blanches, sésame et notes boisées forment une fragrance sombre, sensuelle et intense.",
        "tags": [
            "floral",
            "warm",
            "woody",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p18"
    },
    {
        "id": 19,
        "name": "Gucci Flora Gorgeous Gardenia",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Gardenia, jasmin et fruits doux créent un floral lumineux, féminin et facile à aimer.",
        "tags": [
            "floral",
            "sweet",
            "fruity",
            "spring",
            "daily"
        ],
        "unisex": false,
        "imageKey": "femme/p19"
    },
    {
        "id": 20,
        "name": "Jean Paul Gaultier Divine",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Un floral solaire et salin adouci par une vanille crémeuse, sensuel sans être lourd.",
        "tags": [
            "floral",
            "sweet",
            "warm",
            "summer",
            "romantic"
        ],
        "unisex": false,
        "imageKey": "femme/p20"
    },
    {
        "id": 21,
        "name": "Jean Paul Gaultier La Belle",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Poire juteuse, vanille et vétiver composent un gourmand fruité, féminin et séduisant.",
        "tags": [
            "fruity",
            "sweet",
            "warm",
            "romantic",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p21"
    },
    {
        "id": 22,
        "name": "Jean Paul Gaultier La Belle Fleur Terrible",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Un floral fruité lumineux avec une touche aquatique, délicat, moderne et original.",
        "tags": [
            "floral",
            "fruity",
            "fresh",
            "spring",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p22"
    },
    {
        "id": 23,
        "name": "Jean Paul Gaultier La Belle Paradise Garden",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Fleurs exotiques, douceur vanillée et fraîcheur tropicale pour une signature solaire et sensuelle.",
        "tags": [
            "floral",
            "sweet",
            "fruity",
            "summer",
            "romantic"
        ],
        "unisex": false,
        "imageKey": "femme/p23"
    },
    {
        "id": 24,
        "name": "Jean Paul Gaultier Scandal Absolu (100 ml)",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Un floral gourmand intense, fruité et boisé, pensé pour les soirées et les sillages remarqués.",
        "tags": [
            "sweet",
            "floral",
            "bold",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p24"
    },
    {
        "id": 25,
        "name": "Kayali Déjà Vu White Flower 57",
        "cat": "Femme",
        "price": 499.0,
        "popular": false,
        "desc": "Fleurs blanches, vanille et bois chauds forment un bouquet riche, sensuel et enveloppant.",
        "tags": [
            "floral",
            "warm",
            "sweet",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p25"
    },
    {
        "id": 26,
        "name": "Kayali Eden Juicy Apple 01",
        "cat": "Femme",
        "price": 499.0,
        "popular": false,
        "desc": "Pomme rouge croquante, fruits juteux et muscs doux pour un parfum frais et très joyeux.",
        "tags": [
            "fruity",
            "fresh",
            "daily",
            "summer",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p26"
    },
    {
        "id": 27,
        "name": "Kayali Eden Sparkling Lychee 39",
        "cat": "Femme",
        "price": 499.0,
        "popular": false,
        "desc": "Litchi pétillant, fruits rouges et fleurs délicates créent un fruité lumineux et moderne.",
        "tags": [
            "fruity",
            "floral",
            "fresh",
            "spring",
            "daily"
        ],
        "unisex": false,
        "imageKey": "femme/p27"
    },
    {
        "id": 28,
        "name": "Kayali Elixir 11",
        "cat": "Femme",
        "price": 499.0,
        "popular": false,
        "desc": "Un oriental floral sombre, fruité et ambré, avec une sensation riche et mystérieuse.",
        "tags": [
            "warm",
            "floral",
            "bold",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p28"
    },
    {
        "id": 29,
        "name": "Kayali Lovefest Burning Cherry 48",
        "cat": "Femme",
        "price": 499.0,
        "popular": false,
        "desc": "Cerise noire, bois fumés et douceur ambrée composent un gourmand sensuel et nocturne.",
        "tags": [
            "fruity",
            "sweet",
            "woody",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p29"
    },
    {
        "id": 30,
        "name": "Kayali Vanilla 28",
        "cat": "Femme",
        "price": 499.0,
        "popular": false,
        "desc": "Vanille brune, sucre et ambre chaud créent une signature gourmande, douce et addictive.",
        "tags": [
            "sweet",
            "warm",
            "winter",
            "romantic",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p30"
    },
    {
        "id": 31,
        "name": "Kayali Vanilla Candy Rock Sugar",
        "cat": "Femme",
        "price": 499.0,
        "popular": false,
        "desc": "Une vanille sucrée et pétillante aux accents de bonbon, fruités et musqués.",
        "tags": [
            "sweet",
            "fruity",
            "daily",
            "romantic",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p31"
    },
    {
        "id": 32,
        "name": "Kayali Yum Pistachio Gelato 33",
        "cat": "Femme",
        "price": 499.0,
        "popular": false,
        "desc": "Pistache crémeuse, douceur glacée et vanille pour un gourmand ludique, tendre et enveloppant.",
        "tags": [
            "sweet",
            "warm",
            "daily",
            "romantic",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p32"
    },
    {
        "id": 33,
        "name": "Kilian Rolling in Love",
        "cat": "Femme",
        "price": 449.0,
        "popular": false,
        "desc": "Amande, iris, muscs et fleurs blanches donnent une sensation douce, poudrée et intime.",
        "tags": [
            "floral",
            "sweet",
            "elegant",
            "romantic",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p33"
    },
    {
        "id": 34,
        "name": "L'Interdit Rouge (100 ml)",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Fleurs blanches et épices chaudes créent une interprétation plus audacieuse, sensuelle et vibrante.",
        "tags": [
            "floral",
            "warm",
            "bold",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p34"
    },
    {
        "id": 35,
        "name": "Lamisah Naima Shaikh Saeed",
        "cat": "Femme",
        "price": 319.0,
        "popular": false,
        "desc": "Un oriental floral musqué, doux et enveloppant, avec une élégance chaleureuse au quotidien.",
        "tags": [
            "floral",
            "warm",
            "elegant",
            "daily",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p35"
    },
    {
        "id": 36,
        "name": "Lancôme Idôle Le Grand",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Rose, jasmin et muscs propres composent un floral frais, moderne et très lumineux.",
        "tags": [
            "floral",
            "fresh",
            "elegant",
            "daily",
            "work"
        ],
        "unisex": false,
        "imageKey": "femme/p36"
    },
    {
        "id": 37,
        "name": "Lancôme La Vie Est Belle (100 ml)",
        "cat": "Femme",
        "price": 319.0,
        "popular": false,
        "desc": "Iris, praline et vanille créent un gourmand floral chaleureux, féminin et généreux.",
        "tags": [
            "sweet",
            "floral",
            "warm",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p37"
    },
    {
        "id": 38,
        "name": "Narciso Eau de Parfum Poudrée",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Musc, fleurs blanches et bois doux offrent un parfum poudré, crémeux et élégant.",
        "tags": [
            "floral",
            "elegant",
            "subtle",
            "romantic",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p38"
    },
    {
        "id": 39,
        "name": "Narciso Rouge",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Rose, iris, musc et bois donnent une signature poudrée plus intense et sensuelle.",
        "tags": [
            "floral",
            "warm",
            "elegant",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p39"
    },
    {
        "id": 40,
        "name": "Narciso Rodriguez For Her Pure Musc (100 ml)",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Un musc propre entouré de fleurs et de bois doux, minimaliste, chic et polyvalent.",
        "tags": [
            "fresh",
            "floral",
            "elegant",
            "work",
            "versatile"
        ],
        "unisex": false,
        "imageKey": "femme/p40"
    },
    {
        "id": 41,
        "name": "Narciso Rodriguez Narciso Ambrée",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Fleurs solaires, musc et ambre crémeux composent un parfum chaud, doux et rayonnant.",
        "tags": [
            "floral",
            "warm",
            "sweet",
            "summer",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p41"
    },
    {
        "id": 42,
        "name": "Paco Rabanne Olympea Legend (100 ml)",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Fruits mûrs, vanille et ambre salé forment un gourmand puissant, solaire et sensuel.",
        "tags": [
            "fruity",
            "sweet",
            "warm",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p42"
    },
    {
        "id": 43,
        "name": "Parfums de Marly Delina (75 ml)",
        "cat": "Femme",
        "price": 349.0,
        "popular": true,
        "desc": "Litchi, rhubarbe et rose turque composent un floral fruité frais, chic et très féminin.",
        "tags": [
            "floral",
            "fruity",
            "fresh",
            "romantic",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p43"
    },
    {
        "id": 44,
        "name": "Parfums de Marly Delina (100 ml)",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Une rose moderne entourée de litchi, muscs et douceur boisée pour un sillage raffiné.",
        "tags": [
            "floral",
            "fruity",
            "elegant",
            "romantic",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p44"
    },
    {
        "id": 45,
        "name": "Prada Paradoxe (100 ml)",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Néroli, fleurs blanches et ambre vanillé offrent une signature moderne, propre et sensuelle.",
        "tags": [
            "floral",
            "elegant",
            "warm",
            "daily",
            "versatile"
        ],
        "unisex": false,
        "imageKey": "femme/p45"
    },
    {
        "id": 46,
        "name": "Tom Ford Lost Cherry (100 ml)",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Cerise noire, amande et fève tonka donnent un gourmand profond, luxueux et provocant.",
        "tags": [
            "fruity",
            "sweet",
            "warm",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p46"
    },
    {
        "id": 47,
        "name": "Valentino Donna Born in Roma Pink",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Un floral fruité pétillant et tendre, avec une douceur moderne parfaite pour les beaux jours.",
        "tags": [
            "floral",
            "fruity",
            "fresh",
            "spring",
            "romantic"
        ],
        "unisex": false,
        "imageKey": "femme/p47"
    },
    {
        "id": 48,
        "name": "Versace Bright Crystal EDP (100 ml)",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Grenade, pivoine et muscs donnent un floral fruité frais, féminin et lumineux.",
        "tags": [
            "floral",
            "fruity",
            "fresh",
            "summer",
            "daily"
        ],
        "unisex": false,
        "imageKey": "femme/p48"
    },
    {
        "id": 49,
        "name": "Versace Bright Crystal EDT",
        "cat": "Femme",
        "price": 349.0,
        "popular": false,
        "desc": "Une version légère et cristalline, florale et fruitée, idéale pour le quotidien et la chaleur.",
        "tags": [
            "floral",
            "fresh",
            "summer",
            "daily",
            "subtle"
        ],
        "unisex": false,
        "imageKey": "femme/p49"
    },
    {
        "id": 50,
        "name": "Yves Saint Laurent Libre Intense",
        "cat": "Femme",
        "price": 399.0,
        "popular": true,
        "desc": "Lavande, fleur d'oranger et vanille ambrée forment un floral chaud, élégant et puissant.",
        "tags": [
            "floral",
            "warm",
            "elegant",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p50"
    },
    {
        "id": 51,
        "name": "Yves Saint Laurent Libre L'Absolu",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Une interprétation riche de Libre, florale, ambrée et chaleureuse avec un sillage sophistiqué.",
        "tags": [
            "floral",
            "warm",
            "elegant",
            "winter",
            "strong"
        ],
        "unisex": false,
        "imageKey": "femme/p51"
    },
    {
        "id": 52,
        "name": "Yves Saint Laurent Libre",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Lavande, fleur d'oranger et vanille s'unissent dans un floral moderne, chic et polyvalent.",
        "tags": [
            "floral",
            "elegant",
            "work",
            "versatile",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "femme/p52"
    },
    {
        "id": 53,
        "name": "Xerjoff Wardasina Rosso",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Rose épicée, chaleur ambrée et bois sombres composent une signature intense et mystérieuse.",
        "tags": [
            "floral",
            "warm",
            "woody",
            "evening",
            "strong"
        ],
        "unisex": true,
        "imageKey": "femme/p53"
    },
    {
        "id": 54,
        "name": "Xerjoff Erba Pura (100 ml)",
        "cat": "Femme",
        "price": 449.0,
        "popular": false,
        "desc": "Agrumes, fruits exotiques, muscs et vanille offrent un fruité puissant, solaire et addictif.",
        "tags": [
            "fruity",
            "sweet",
            "fresh",
            "summer",
            "strong"
        ],
        "unisex": true,
        "imageKey": "femme/p54"
    },
    {
        "id": 55,
        "name": "Xerjoff Naxos",
        "cat": "Femme",
        "price": 339.0,
        "popular": false,
        "desc": "Miel, tabac, lavande et agrumes créent un parfum riche, suave et élégant.",
        "tags": [
            "sweet",
            "warm",
            "woody",
            "winter",
            "strong"
        ],
        "unisex": true,
        "imageKey": "femme/p55"
    },
    {
        "id": 56,
        "name": "Xerjoff Accento Overdose",
        "cat": "Femme",
        "price": 399.0,
        "popular": false,
        "desc": "Un floral fruité vibrant, vert et musqué, avec une présence moderne et sophistiquée.",
        "tags": [
            "floral",
            "fruity",
            "fresh",
            "spring",
            "strong"
        ],
        "unisex": true,
        "imageKey": "femme/p56"
    },
    {
        "id": 57,
        "name": "1 Million Parfum (100 ml)",
        "cat": "Homme",
        "price": 380.0,
        "popular": false,
        "desc": "Un floral ambré solaire aux accents salés et cuirés, puissant, chaud et très charismatique.",
        "tags": [
            "warm",
            "bold",
            "evening",
            "strong",
            "winter"
        ],
        "unisex": false,
        "imageKey": "homme/p1"
    },
    {
        "id": 58,
        "name": "Acqua di Gio Profondo",
        "cat": "Homme",
        "price": 350.0,
        "popular": false,
        "desc": "Accords marins, agrumes et minéralité boisée pour une fraîcheur propre, profonde et moderne.",
        "tags": [
            "fresh",
            "summer",
            "daily",
            "work",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p2"
    },
    {
        "id": 59,
        "name": "Armani Code",
        "cat": "Homme",
        "price": 399.0,
        "popular": false,
        "desc": "Bergamote, notes aromatiques et fève tonka composent un parfum élégant, nocturne et séduisant.",
        "tags": [
            "elegant",
            "warm",
            "evening",
            "romantic",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p3"
    },
    {
        "id": 60,
        "name": "Armani Stronger With You Freeze",
        "cat": "Homme",
        "price": 399.0,
        "popular": false,
        "desc": "Une version fraîche et aromatique de Stronger With You, vive au départ et douce en fond.",
        "tags": [
            "fresh",
            "sweet",
            "daily",
            "spring",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p4"
    },
    {
        "id": 61,
        "name": "Babycat Raw Bourbon (125 ml)",
        "cat": "Homme",
        "price": 600.0,
        "popular": false,
        "desc": "Vanille bourbon, épices et facette cuirée créent un parfum sombre, chaud et très sensuel.",
        "tags": [
            "warm",
            "sweet",
            "woody",
            "winter",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p5"
    },
    {
        "id": 62,
        "name": "Baccarat Rouge 540 (200 ml)",
        "cat": "Homme",
        "price": 570.0,
        "popular": false,
        "desc": "Safran aérien, ambre lumineux et bois secs pour un sillage moderne, enveloppant et reconnaissable.",
        "tags": [
            "warm",
            "woody",
            "elegant",
            "versatile",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p6"
    },
    {
        "id": 63,
        "name": "Bleu de Chanel Parfum (100 ml)",
        "cat": "Homme",
        "price": 399.0,
        "popular": true,
        "desc": "Agrumes, cèdre et bois crémeux offrent une signature masculine raffinée, propre et polyvalente.",
        "tags": [
            "fresh",
            "woody",
            "elegant",
            "work",
            "versatile"
        ],
        "unisex": false,
        "imageKey": "homme/p7"
    },
    {
        "id": 64,
        "name": "Creed Absolu Aventus (75 ml)",
        "cat": "Homme",
        "price": 450.0,
        "popular": false,
        "desc": "Agrumes vifs, fruits et bois épicés donnent une version plus dense et audacieuse d'Aventus.",
        "tags": [
            "fruity",
            "fresh",
            "woody",
            "bold",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p8"
    },
    {
        "id": 65,
        "name": "Creed Aventus Eau de Parfum",
        "cat": "Homme",
        "price": 500.0,
        "popular": true,
        "desc": "Ananas, bergamote et bois fumés composent un classique frais, affirmé et très polyvalent.",
        "tags": [
            "fruity",
            "fresh",
            "woody",
            "versatile",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p9"
    },
    {
        "id": 66,
        "name": "Dior Homme Intense (100 ml)",
        "cat": "Homme",
        "price": 380.0,
        "popular": true,
        "desc": "Iris poudré, ambre et bois chauds créent une signature élégante, profonde et habillée.",
        "tags": [
            "elegant",
            "warm",
            "woody",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p10"
    },
    {
        "id": 67,
        "name": "Dior Sauvage Elixir",
        "cat": "Homme",
        "price": 350.0,
        "popular": false,
        "desc": "Épices, lavande et bois sombres offrent un parfum concentré, puissant et très charismatique.",
        "tags": [
            "bold",
            "woody",
            "warm",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p11"
    },
    {
        "id": 68,
        "name": "Dolce & Gabbana K (100 ml)",
        "cat": "Homme",
        "price": 370.0,
        "popular": false,
        "desc": "Agrumes, genièvre et bois aromatiques donnent une fraîcheur masculine élégante et facile à porter.",
        "tags": [
            "fresh",
            "woody",
            "daily",
            "work",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p12"
    },
    {
        "id": 69,
        "name": "Emporio Armani Stronger With You Amber",
        "cat": "Homme",
        "price": 399.0,
        "popular": false,
        "desc": "Ambre doux, vanille et bois chauds créent une chaleur enveloppante et élégante.",
        "tags": [
            "warm",
            "sweet",
            "woody",
            "winter",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p13"
    },
    {
        "id": 70,
        "name": "Emporio Armani Stronger With You",
        "cat": "Homme",
        "price": 349.0,
        "popular": false,
        "desc": "Châtaigne, vanille et notes aromatiques composent un parfum chaleureux, séduisant et gourmand.",
        "tags": [
            "sweet",
            "warm",
            "romantic",
            "winter",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p14"
    },
    {
        "id": 71,
        "name": "Emporio Armani Stronger With You Oud",
        "cat": "Homme",
        "price": 379.0,
        "popular": false,
        "desc": "Oud, ambre et douceur vanillée donnent une version plus sombre, riche et orientale.",
        "tags": [
            "woody",
            "warm",
            "bold",
            "winter",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p15"
    },
    {
        "id": 72,
        "name": "Emporio Armani Stronger With You Parfum (100 ml)",
        "cat": "Homme",
        "price": 379.0,
        "popular": false,
        "desc": "Une interprétation dense et ambrée, avec une douceur chaude et un fond boisé très enveloppant.",
        "tags": [
            "warm",
            "sweet",
            "woody",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p16"
    },
    {
        "id": 73,
        "name": "Emporio Armani Stronger With You Sandalwood",
        "cat": "Homme",
        "price": 379.0,
        "popular": false,
        "desc": "Bois de santal crémeux, ambre et douceur vanillée pour une chaleur élégante et confortable.",
        "tags": [
            "woody",
            "warm",
            "sweet",
            "winter",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p17"
    },
    {
        "id": 74,
        "name": "Givenchy Gentleman Intense",
        "cat": "Homme",
        "price": 349.0,
        "popular": false,
        "desc": "Iris, aromates et bois créent un parfum propre, élégant et moderne avec juste assez de profondeur.",
        "tags": [
            "elegant",
            "woody",
            "work",
            "balanced",
            "versatile"
        ],
        "unisex": false,
        "imageKey": "homme/p18"
    },
    {
        "id": 75,
        "name": "Givenchy Gentleman Boisée",
        "cat": "Homme",
        "price": 379.0,
        "popular": false,
        "desc": "Iris, cacao et bois crémeux donnent une signature douce, boisée et très raffinée.",
        "tags": [
            "elegant",
            "woody",
            "warm",
            "romantic",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p19"
    },
    {
        "id": 76,
        "name": "Jean Paul Gaultier Le Beau Paradise Fall",
        "cat": "Homme",
        "price": 499.0,
        "popular": false,
        "desc": "Un profil tropical, boisé et ambré, pensé pour une présence solaire, séduisante et originale.",
        "tags": [
            "fruity",
            "fresh",
            "warm",
            "summer",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p20"
    },
    {
        "id": 77,
        "name": "God of Fire",
        "cat": "Homme",
        "price": 799.0,
        "popular": false,
        "desc": "Mangue juteuse, agrumes et bois chauds composent un fruité exotique puissant et lumineux.",
        "tags": [
            "fruity",
            "fresh",
            "bold",
            "summer",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p21"
    },
    {
        "id": 78,
        "name": "Jean Paul Gaultier Le Beau EDT",
        "cat": "Homme",
        "price": 349.0,
        "popular": false,
        "desc": "Bergamote, noix de coco et fève tonka donnent une signature fraîche, douce et séduisante.",
        "tags": [
            "fresh",
            "sweet",
            "summer",
            "romantic",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p22"
    },
    {
        "id": 79,
        "name": "Jean Paul Gaultier Le Beau Le Parfum (125 ml)",
        "cat": "Homme",
        "price": 349.0,
        "popular": false,
        "desc": "Fruits tropicaux, coco, tonka et bois ambrés créent un parfum dense, sensuel et nocturne.",
        "tags": [
            "fruity",
            "sweet",
            "warm",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p23"
    },
    {
        "id": 80,
        "name": "Jean Paul Gaultier Le Beau Paradise Garden (125 ml)",
        "cat": "Homme",
        "price": 399.0,
        "popular": false,
        "desc": "Fraîcheur verte, accents tropicaux et bois doux pour un parfum exotique, moderne et solaire.",
        "tags": [
            "fresh",
            "fruity",
            "woody",
            "summer",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p24"
    },
    {
        "id": 81,
        "name": "Jean Paul Gaultier Le Male Elixir (125 ml)",
        "cat": "Homme",
        "price": 349.0,
        "popular": true,
        "desc": "Lavande, miel, vanille et tabac composent un gourmand chaud, puissant et très séduisant.",
        "tags": [
            "sweet",
            "warm",
            "evening",
            "winter",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p25"
    },
    {
        "id": 82,
        "name": "Jean Paul Gaultier Le Male Elixir Absolu",
        "cat": "Homme",
        "price": 349.0,
        "popular": false,
        "desc": "Une version plus riche et épicée, chaude et gourmande, conçue pour laisser une forte impression.",
        "tags": [
            "sweet",
            "warm",
            "bold",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p26"
    },
    {
        "id": 83,
        "name": "Jean Paul Gaultier Le Male (125 ml)",
        "cat": "Homme",
        "price": 349.0,
        "popular": false,
        "desc": "Lavande, menthe et vanille offrent une signature masculine fraîche, douce et immédiatement reconnaissable.",
        "tags": [
            "fresh",
            "sweet",
            "daily",
            "versatile",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p27"
    },
    {
        "id": 84,
        "name": "Jean Paul Gaultier Scandal (100 ml)",
        "cat": "Homme",
        "price": 499.0,
        "popular": false,
        "desc": "Caramel, tonka et notes aromatiques créent un parfum gourmand, énergique et très présent.",
        "tags": [
            "sweet",
            "warm",
            "bold",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p28"
    },
    {
        "id": 85,
        "name": "Louis Vuitton Imagination (100 ml)",
        "cat": "Homme",
        "price": 599.0,
        "popular": true,
        "desc": "Agrumes pétillants, gingembre et thé créent une fraîcheur luxueuse, aérienne et très raffinée.",
        "tags": [
            "fresh",
            "elegant",
            "summer",
            "daily",
            "versatile"
        ],
        "unisex": false,
        "imageKey": "homme/p29"
    },
    {
        "id": 86,
        "name": "YSL MYSLF Le Parfum",
        "cat": "Homme",
        "price": 349.0,
        "popular": false,
        "desc": "Fleur d'oranger, bois et vanille ambrée composent une version plus riche, élégante et sensuelle.",
        "tags": [
            "floral",
            "warm",
            "elegant",
            "evening",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p30"
    },
    {
        "id": 87,
        "name": "Nishane Hacivat",
        "cat": "Homme",
        "price": 499.0,
        "popular": false,
        "desc": "Ananas, agrumes et mousse boisée donnent une fraîcheur sèche, puissante et très sophistiquée.",
        "tags": [
            "fruity",
            "fresh",
            "woody",
            "versatile",
            "strong"
        ],
        "unisex": true,
        "imageKey": "homme/p31"
    },
    {
        "id": 88,
        "name": "Parfums de Marly Godolphin (100 ml)",
        "cat": "Homme",
        "price": 499.0,
        "popular": false,
        "desc": "Cuir, épices et fruits sombres créent un parfum élégant, profond et résolument masculin.",
        "tags": [
            "woody",
            "warm",
            "bold",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p32"
    },
    {
        "id": 89,
        "name": "Parfums de Marly Haltane",
        "cat": "Homme",
        "price": 499.0,
        "popular": false,
        "desc": "Aromates, safran et bois sombres offrent une signature riche, épicée et luxueuse.",
        "tags": [
            "woody",
            "warm",
            "elegant",
            "winter",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p33"
    },
    {
        "id": 90,
        "name": "Parfums de Marly Kalan (100 ml)",
        "cat": "Homme",
        "price": 499.0,
        "popular": false,
        "desc": "Agrumes rouges, épices et bois créent un contraste vif, sec et audacieux.",
        "tags": [
            "fresh",
            "warm",
            "woody",
            "bold",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p34"
    },
    {
        "id": 91,
        "name": "Parfums de Marly Layton Exclusif (100 ml)",
        "cat": "Homme",
        "price": 499.0,
        "popular": false,
        "desc": "Amande, bois sombres et notes ambrées donnent un parfum dense, noble et mystérieux.",
        "tags": [
            "woody",
            "warm",
            "elegant",
            "winter",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p35"
    },
    {
        "id": 92,
        "name": "Prada Paradigme (100 ml)",
        "cat": "Homme",
        "price": 379.0,
        "popular": false,
        "desc": "Un boisé ambré moderne, propre et structuré, pensé pour une élégance facile au quotidien.",
        "tags": [
            "woody",
            "elegant",
            "work",
            "daily",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p36"
    },
    {
        "id": 93,
        "name": "Prada Black (100 ml)",
        "cat": "Homme",
        "price": 399.0,
        "popular": false,
        "desc": "Bergamote, ambre et accords poudrés créent une signature douce, sombre et urbaine.",
        "tags": [
            "warm",
            "woody",
            "elegant",
            "evening",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p37"
    },
    {
        "id": 94,
        "name": "Valentino Uomo Born in Roma Intense",
        "cat": "Homme",
        "price": 449.0,
        "popular": false,
        "desc": "Vanille, lavande et vétiver créent un parfum chaud, moderne et séduisant avec une belle présence.",
        "tags": [
            "sweet",
            "warm",
            "romantic",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p38"
    },
    {
        "id": 95,
        "name": "Versace Eros (100 ml)",
        "cat": "Homme",
        "price": 349.0,
        "popular": false,
        "desc": "Menthe, pomme et vanille composent un parfum frais, gourmand et énergique, idéal pour sortir.",
        "tags": [
            "fresh",
            "sweet",
            "evening",
            "bold",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p39"
    },
    {
        "id": 96,
        "name": "Xerjoff Accento Overdose",
        "cat": "Homme",
        "price": 449.0,
        "popular": false,
        "desc": "Un floral fruité vibrant et musqué, élégant mais puissant, avec une signature très moderne.",
        "tags": [
            "floral",
            "fruity",
            "fresh",
            "elegant",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p40"
    },
    {
        "id": 97,
        "name": "Xerjoff Coro (100 ml)",
        "cat": "Homme",
        "price": 449.0,
        "popular": false,
        "desc": "Un fruité exotique vif, musqué et boisé, lumineux au départ et généreux dans le sillage.",
        "tags": [
            "fruity",
            "fresh",
            "summer",
            "bold",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p41"
    },
    {
        "id": 98,
        "name": "Xerjoff Erba Pura (100 ml)",
        "cat": "Homme",
        "price": 499.0,
        "popular": false,
        "desc": "Agrumes, fruits exotiques, muscs et vanille donnent un fruité puissant, solaire et addictif.",
        "tags": [
            "fruity",
            "sweet",
            "fresh",
            "summer",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p42"
    },
    {
        "id": 99,
        "name": "Xerjoff Naxos",
        "cat": "Homme",
        "price": 499.0,
        "popular": true,
        "desc": "Miel, tabac, lavande et agrumes composent un parfum riche, suave et très élégant.",
        "tags": [
            "sweet",
            "warm",
            "woody",
            "winter",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p43"
    },
    {
        "id": 100,
        "name": "Xerjoff Wardasina",
        "cat": "Homme",
        "price": 449.0,
        "popular": false,
        "desc": "Rose épicée, chaleur ambrée et bois sombres forment une signature intense et mystérieuse.",
        "tags": [
            "floral",
            "warm",
            "woody",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p44"
    },
    {
        "id": 101,
        "name": "YSL MYSLF Eau de Parfum (100 ml)",
        "cat": "Homme",
        "price": 449.0,
        "popular": false,
        "desc": "Fleur d'oranger et bois modernes créent une signature propre, élégante et facile à porter.",
        "tags": [
            "floral",
            "fresh",
            "elegant",
            "daily",
            "work"
        ],
        "unisex": false,
        "imageKey": "homme/p45"
    },
    {
        "id": 102,
        "name": "Yves Saint Laurent La Nuit de L'Homme",
        "cat": "Homme",
        "price": 399.0,
        "popular": false,
        "desc": "Cardamome, lavande et bois doux donnent un parfum intime, élégant et très séduisant.",
        "tags": [
            "warm",
            "elegant",
            "romantic",
            "evening",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p46"
    },
    {
        "id": 103,
        "name": "Yves Saint Laurent Y Eau de Parfum (100 ml)",
        "cat": "Homme",
        "price": 449.0,
        "popular": false,
        "desc": "Pomme, sauge et bois ambrés composent une fraîcheur moderne, propre et très polyvalente.",
        "tags": [
            "fresh",
            "woody",
            "work",
            "versatile",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p47"
    },
    {
        "id": 104,
        "name": "Yves Saint Laurent Y Eau Fraîche (100 ml)",
        "cat": "Homme",
        "price": 449.0,
        "popular": false,
        "desc": "Agrumes, gingembre et aromates donnent une version plus légère, vive et idéale par temps chaud.",
        "tags": [
            "fresh",
            "summer",
            "daily",
            "work",
            "balanced"
        ],
        "unisex": false,
        "imageKey": "homme/p48"
    },
    {
        "id": 105,
        "name": "Yves Saint Laurent Y Le Parfum",
        "cat": "Homme",
        "price": 449.0,
        "popular": false,
        "desc": "Aromates, bois sombres et tonka créent une version plus profonde, élégante et nocturne.",
        "tags": [
            "woody",
            "warm",
            "elegant",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p49"
    },
    {
        "id": 106,
        "name": "Yves Saint Laurent Y Elixir",
        "cat": "Homme",
        "price": 349.0,
        "popular": false,
        "desc": "Une interprétation concentrée, boisée et ambrée, avec une présence sombre et sophistiquée.",
        "tags": [
            "woody",
            "warm",
            "bold",
            "evening",
            "strong"
        ],
        "unisex": false,
        "imageKey": "homme/p50"
    }
];

const INVENTORY_VERSION = '2026-09-09-available-v1';
if (localStorage.getItem('elhm_inventory_version') !== INVENTORY_VERSION) {
    localStorage.removeItem('elhm_cart');
    localStorage.setItem('elhm_inventory_version', INVENTORY_VERSION);
}


/* ================================================================
   PRODUCT IMAGE SYSTEM
   image/homme/p1.1.png + p1.2.png + ...
   image/femme/p1.1.png + p1.2.png + ...
   ================================================================ */

function getProductImagePaths(product) {
    if (!product || !product.imageKey) return [];
    return [
        `image/${product.imageKey}.1.png`,
        `image/${product.imageKey}.2.png`
    ];
}

function getProductMainImage(product) {
    const images = getProductImagePaths(product);
    return images[0] || "";
}

function hideBrokenProductImage(img) {
    if (!img) return;
    img.style.display = "none";
    if (img.parentElement) img.parentElement.classList.add("image-missing");
}

function setProductModalImage(index) {
    const product = products.find(p => p.id === currentModalProductId);
    if (!product) return;

    const images = getProductImagePaths(product);
    const main = document.getElementById("pmMainImage");
    const thumbs = document.querySelector(".pm-thumbnails");
    if (!main || !thumbs || !images.length) return;

    const safeIndex = Math.max(0, Math.min(index, images.length - 1));

    main.classList.remove("image-missing");
    main.innerHTML = `
        <span class="image-fallback-mark">ELHM</span>
        <img
            src="${images[safeIndex]}"
            alt="${product.name}"
            class="pm-main-product-img"
            onerror="hideBrokenProductImage(this)"
        >
    `;

    thumbs.innerHTML = images.map((src, i) => `
        <button
            type="button"
            class="pm-thumb ${i === safeIndex ? "active" : ""}"
            onclick="setProductModalImage(${i})"
            aria-label="Voir l'image ${i + 1} de ${product.name}"
        >
            <span class="pm-thumb-fallback">HM</span>
            <img
                src="${src}"
                alt=""
                loading="lazy"
                onerror="this.style.display='none'; this.parentElement.classList.add('image-missing')"
            >
        </button>
    `).join("");
}

let cart = JSON.parse(localStorage.getItem('elhm_cart')) || [];
const shippingCost = 0.00;

function saveCart() {
    localStorage.setItem('elhm_cart', JSON.stringify(cart));
}

// --- UPDATE THIS FUNCTION ---
function renderProducts(searchQuery = "") {
    const grid = document.getElementById('productGrid');
    if (!grid) return; 

    const pageCategory = grid.getAttribute('data-category');
    let displayProducts = products;

    if (pageCategory === 'BestSellers') {
        displayProducts = products.filter(p => p.popular).slice(0, 12); 
    } else if (pageCategory === 'Homme' || pageCategory === 'Femme') {
        displayProducts = products.filter(p => p.cat.includes(pageCategory) || p.cat.includes('Unisex'));
    } else if (pageCategory) {
        displayProducts = products.filter(p => p.cat.includes(pageCategory));
    }

    if (searchQuery.trim() !== "") {
        displayProducts = displayProducts.filter(p => 
            (p.name + ' ' + (p.desc || '')).toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (displayProducts.length === 0) {
        grid.innerHTML = `<p class="catalog-empty-state">${searchQuery.trim() ? 'Aucun produit trouvé.' : 'Aucun produit disponible actuellement.'}</p>`;
        return;
    }

    // Notice the onclick events added to the image and title wrappers
    grid.innerHTML = displayProducts.map(p => `
        <div class="product-card">
            <div class="product-img-wrapper" onclick="openProductModal(${p.id})" style="cursor:pointer;">
                <div class="product-img-placeholder product-image-shell">
                    <span class="image-fallback-mark">ELHM</span>
                    <img
                        src="${getProductMainImage(p)}"
                        alt="${p.name}"
                        class="product-card-img"
                        loading="lazy"
                        onerror="hideBrokenProductImage(this)"
                    >
                </div>
            </div>
            <div class="product-title" onclick="openProductModal(${p.id})" style="cursor:pointer;">${p.name}</div>
            <div class="product-description">${p.desc || ''}</div>
            <div class="product-price">${p.price.toFixed(2)} DH</div>
            <button class="btn-add" onclick="addToCart(${p.id})">+ Ajouter au panier</button>
        </div>
    `).join('');
}

// --- ADD THESE NEW FUNCTIONS AT THE BOTTOM OF SCRIPT.JS ---
let currentModalProductId = null;
let currentModalQty = 1;

function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if(!product) return;
    
    currentModalProductId = id;
    currentModalQty = 1;
    
    document.getElementById('pmCategory').textContent = product.cat;
    document.getElementById('pmTitle').textContent = product.name;
    document.getElementById('pmPrice').textContent = `${product.price.toFixed(2)} DH`;
    const pmDescription = document.getElementById('pmDescription') || document.querySelector('.pm-description');
    if (pmDescription) pmDescription.textContent = product.desc || '';
    document.getElementById('pmQtyDisplay').textContent = currentModalQty;
    
    
    setProductModalImage(0);
    
    document.getElementById('productModal').style.display = 'flex';
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

function pmChangeQty(delta) {
    currentModalQty += delta;
    if(currentModalQty < 1) currentModalQty = 1;
    document.getElementById('pmQtyDisplay').textContent = currentModalQty;
}

function pmAddToCart() {
    if(!currentModalProductId) return;
    const product = products.find(p => p.id === currentModalProductId);
    const existing = cart.find(item => item.id === currentModalProductId);
    
    if (existing) {
        existing.qty += currentModalQty;
    } else {
        cart.push({ ...product, qty: currentModalQty });
    }
    
    saveCart();
    updateCartUI();
    closeProductModal();
    toggleCart(true); 
}

function pmOrderNow() {
    // Adds item to cart and immediately opens the checkout side-panel
    pmAddToCart();
    // Scroll to the bottom of the cart to show the form
    const cartModal = document.querySelector('.cart-modal');
    if(cartModal) {
        setTimeout(() => {
            cartModal.scrollTo({ top: cartModal.scrollHeight, behavior: 'smooth' });
        }, 100);
    }
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeProductModal();
    }
}

function handleSearch(event) {
    const query = event.target.value;
    renderProducts(query);
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    saveCart();
    updateCartUI();
    toggleCart(true); 
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const checkoutFormSection = document.getElementById('checkoutFormSection');
    
    if(!cartItems || !cartCount) return;

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const total = subtotal > 0 ? subtotal + shippingCost : 0;
    
    cartCount.textContent = totalQty;

    const cartItemsCount = document.getElementById('cartItemsCount');
    if (cartItemsCount) cartItemsCount.textContent = totalQty;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty-state">
                <div class="cart-empty-icon" aria-hidden="true">HM</div>
                <h4>Votre panier est vide</h4>
                <p>Ajoutez vos parfums préférés pour les retrouver ici.</p>
            </div>
        `;
        if(checkoutFormSection) checkoutFormSection.style.display = 'none';
        return;
    }

    if(checkoutFormSection) checkoutFormSection.style.display = 'block';

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-thumb">
                <span>HM</span>
                <img
                    src="${getProductMainImage(item)}"
                    alt="${item.name}"
                    loading="lazy"
                    onerror="hideBrokenProductImage(this)"
                >
            </div>

            <div class="cart-item-main">
                <div class="cart-item-topline">
                    <div class="cart-item-title">${item.name}</div>
                    <button class="remove-btn" type="button" onclick="removeFromCart(${item.id})" aria-label="Retirer cet article">&times;</button>
                </div>

                <div class="cart-item-meta">${item.price.toFixed(2)} DH / unité</div>

                <div class="cart-item-bottom">
                    <div class="qty-controls" aria-label="Quantité">
                        <button class="qty-btn" type="button" onclick="changeQty(${item.id}, -1)" aria-label="Diminuer la quantité">−</button>
                        <span class="qty-display">${item.qty}</span>
                        <button class="qty-btn" type="button" onclick="changeQty(${item.id}, 1)" aria-label="Augmenter la quantité">+</button>
                    </div>

                    <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} DH</div>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('subtotalPrice').textContent = `${subtotal.toFixed(2)} DH`;
    document.getElementById('shippingPrice').textContent = shippingCost === 0 ? 'Gratuite' : `${shippingCost.toFixed(2)} DH`;
    document.getElementById('totalPrice').textContent = `${total.toFixed(2)} DH`;
}

function toggleCart(forceOpen = false) {
    const modal = document.getElementById('cartOverlay');
    if (!modal) return;

    const shouldOpen = forceOpen || modal.style.display !== 'flex';
    modal.style.display = shouldOpen ? 'flex' : 'none';
    document.body.classList.toggle('cart-open', shouldOpen);
}

// Small UX enhancements only: click the backdrop or press Escape to close the cart.
document.addEventListener('click', (event) => {
    const modal = document.getElementById('cartOverlay');
    if (modal && modal.style.display === 'flex' && event.target === modal) {
        toggleCart();
    }
});

document.addEventListener('keydown', (event) => {
    const modal = document.getElementById('cartOverlay');
    if (event.key === 'Escape' && modal && modal.style.display === 'flex') {
        toggleCart();
    }
});

function toggleOtherCity() {
    const citySelect = document.getElementById('chkCity');
    const otherCityInput = document.getElementById('chkOtherCity');
    if (!citySelect || !otherCityInput) return;
    
    if (citySelect.value === "Autre") {
        otherCityInput.style.display = "block";
        otherCityInput.required = true;
    } else {
        otherCityInput.style.display = "none";
        otherCityInput.required = false;
        otherCityInput.value = "";
    }
}

function processCheckout(event) {
    event.preventDefault();
    if (cart.length === 0) return;

    const name = document.getElementById('chkName').value;
    const phone = document.getElementById('chkPhone').value;
    const citySelect = document.getElementById('chkCity').value;
    const otherCity = document.getElementById('chkOtherCity').value;
    const address = document.getElementById('chkAddress').value;
    
    const finalCity = (citySelect === 'Autre') ? otherCity : citySelect;

    let message = `*Nouvelle Commande 🛍️*\n`;
    message += `-------------------------\n`;
    message += `*Nom:* ${name}\n`;
    message += `*Téléphone:* ${phone}\n`;
    message += `*Ville:* ${finalCity}\n`;
    message += `*Adresse:* ${address}\n`;
    message += `-------------------------\n`;
    message += `*Détails de la commande:*\n`;

    let subtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        message += `- ${item.qty}x ${item.name} (${itemTotal.toFixed(2)} DH)\n`;
    });

    const total = subtotal + shippingCost;
    message += `-------------------------\n`;
    message += `*Sous-total:* ${subtotal.toFixed(2)} DH\n`;
    message += `*Livraison:* ${shippingCost === 0 ? 'Gratuite' : `${shippingCost.toFixed(2)} DH`}\n`;
    message += `*Total à payer:* ${total.toFixed(2)} DH\n`;

    const waUrl = `https://wa.me/212772735680?text=${encodeURIComponent(message)}`;

    window.open(waUrl, '_blank');
    
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
    document.getElementById('orderForm').reset();
    if (document.getElementById('chkOtherCity')) {
        document.getElementById('chkOtherCity').style.display = 'none';
    }
}


// ================================================================
// ELHM MULTILINGUAL PERFUME FINDER
// ================================================================
const quizTranslations = {
    fr: {
        introBadge: "CONSEIL PERSONNALISÉ",
        introTitle: "Trouvez une signature qui <span>vous ressemble.</span>",
        introSubtitle: "Répondez à 6 choix rapides. ELHM vous proposera ensuite 4 parfums de la boutique selon votre style, votre moment et l'intensité que vous aimez.",
        introPills: ["6 choix rapides", "Aucun prix de pack", "Choisissez vos favoris"],
        start: "Commencer le finder →",
        progress: "Question",
        questionLabel: "Votre profil",
        back: "← Retour",
        next: "Continuer →",
        seeResults: "Voir mes suggestions →",
        resultsBadge: "VOTRE SÉLECTION ELHM",
        resultsIntro: "Voici 4 parfums qui correspondent le mieux à vos réponses. Choisissez-en un, plusieurs, ou aucun — vous gardez le contrôle.",
        select: "Choisir",
        selected: "Sélectionné ✓",
        addSelected: "Ajouter la sélection au panier",
        addSelectedCount: "Ajouter {count} sélection(s) au panier",
        restart: "Recommencer",
        noSelection: "Choisissez au moins un parfum avant de l'ajouter au panier.",
        closeLabel: "Fermer le quiz",
        profileNames: {
            fresh: "Éclat net",
            warm: "Chaleur magnétique",
            elegant: "Élégance maîtrisée",
            bold: "Présence signature",
            floral: "Fleur contemporaine",
            woody: "Bois sophistiqué",
            sweet: "Gourmandise chic",
            versatile: "Signature équilibrée"
        },
        profileDescriptions: {
            fresh: "Vous aimez les parfums lumineux, propres et faciles à porter sans être fades.",
            warm: "Vous recherchez de la chaleur, du confort et une présence qui devient plus belle au fil des heures.",
            elegant: "Votre parfum idéal doit être soigné, raffiné et naturellement bien habillé.",
            bold: "Vous préférez une fragrance qui se remarque et laisse une vraie impression.",
            floral: "Vous êtes attiré par une expression florale moderne, lumineuse et travaillée.",
            woody: "Vous aimez les matières boisées, structurées et plus profondes.",
            sweet: "Vous cherchez un parfum enveloppant, gourmand et séduisant sans perdre en style.",
            versatile: "Vous privilégiez un parfum équilibré qui s'adapte facilement à plusieurs moments."
        },
        tagLabels: {
            fresh: "Frais", warm: "Chaleureux", elegant: "Élégant", bold: "Audacieux",
            floral: "Floral", woody: "Boisé", sweet: "Gourmand", fruity: "Fruité",
            summer: "Temps chaud", spring: "Temps doux", winter: "Temps froid",
            daily: "Quotidien", work: "Travail", romantic: "Rendez-vous", evening: "Soirée",
            subtle: "Discret", balanced: "Équilibré", strong: "Intense", versatile: "Polyvalent"
        },
        questions: [
            {
                title: "Pour qui choisissez-vous ce parfum ?",
                subtitle: "Cela nous aide à filtrer la sélection sans vous enfermer dans une seule catégorie.",
                options: [
                    { value: "men", icon: "🕴️", label: "Homme", desc: "Parfums de la collection homme", tags: [] },
                    { value: "women", icon: "🌷", label: "Femme", desc: "Parfums de la collection femme", tags: [] },
                    { value: "unisex", icon: "◐", label: "Mixte", desc: "Des signatures à porter librement", tags: [] },
                    { value: "any", icon: "✦", label: "Peu importe", desc: "Je veux surtout le bon style", tags: [] }
                ]
            },
            {
                title: "Quelle impression voulez-vous laisser ?",
                subtitle: "Pensez à ce que vous aimeriez que l'on ressente quand vous passez.",
                options: [
                    { value: "fresh", icon: "✨", label: "Net & lumineux", desc: "Propre, vif, moderne", tags: ["fresh", "elegant"] },
                    { value: "warm", icon: "🔥", label: "Chaleureux & attirant", desc: "Enveloppant, sensuel, confortable", tags: ["warm", "sweet"] },
                    { value: "elegant", icon: "♟", label: "Raffiné & posé", desc: "Élégant, structuré, soigné", tags: ["elegant", "woody"] },
                    { value: "bold", icon: "⚡", label: "Audacieux & mémorable", desc: "Présence forte, caractère assumé", tags: ["bold", "strong"] }
                ]
            },
            {
                title: "À quel moment doit-il être au meilleur de lui-même ?",
                subtitle: "Choisissez le contexte où vous comptez le porter le plus souvent.",
                options: [
                    { value: "daily", icon: "☀️", label: "Tous les jours", desc: "Facile, agréable, sans prise de tête", tags: ["daily", "versatile"] },
                    { value: "work", icon: "💼", label: "Travail & rendez-vous pro", desc: "Propre, précis, élégant", tags: ["work", "elegant", "balanced"] },
                    { value: "romantic", icon: "♥", label: "Date & moments à deux", desc: "Séduisant, chaleureux, proche", tags: ["romantic", "warm"] },
                    { value: "evening", icon: "🌙", label: "Soirées & événements", desc: "Plus marqué et plus spectaculaire", tags: ["evening", "bold", "strong"] }
                ]
            },
            {
                title: "Quelle présence vous convient le mieux ?",
                subtitle: "Il ne s'agit pas de performance absolue, mais de la sensation que vous recherchez.",
                options: [
                    { value: "subtle", icon: "◌", label: "Près de la peau", desc: "Discret et personnel", tags: ["subtle"] },
                    { value: "balanced", icon: "⚖️", label: "Présent mais maîtrisé", desc: "On le remarque sans excès", tags: ["balanced", "versatile"] },
                    { value: "strong", icon: "✹", label: "Je veux une vraie présence", desc: "Un parfum qui se fait remarquer", tags: ["strong", "bold"] },
                    { value: "adaptive", icon: "↔", label: "Ça dépend du moment", desc: "Je préfère une option polyvalente", tags: ["versatile"] }
                ]
            },
            {
                title: "Quel décor olfactif vous attire instinctivement ?",
                subtitle: "Choisissez l'univers qui vous donne le plus envie, sans trop réfléchir.",
                options: [
                    { value: "airy", icon: "🍋", label: "Agrumes & air frais", desc: "Clair, énergisant, aérien", tags: ["fresh", "summer"] },
                    { value: "woods", icon: "🌲", label: "Bois & épices", desc: "Profond, chic, texturé", tags: ["woody", "warm"] },
                    { value: "amber", icon: "🍯", label: "Vanille & ambre", desc: "Doux, enveloppant, gourmand", tags: ["sweet", "warm"] },
                    { value: "garden", icon: "🌺", label: "Fleurs & fruits", desc: "Lumineux, expressif, raffiné", tags: ["floral", "fruity"] }
                ]
            },
            {
                title: "Dans quelle météo l'imaginez-vous surtout ?",
                subtitle: "La température change beaucoup la manière dont un parfum se développe.",
                options: [
                    { value: "summer", icon: "🏖️", label: "Temps chaud", desc: "Soleil, journées légères, été", tags: ["summer", "fresh"] },
                    { value: "spring", icon: "🌤️", label: "Temps doux", desc: "Printemps, mi-saison, douceur", tags: ["spring", "floral"] },
                    { value: "winter", icon: "❄️", label: "Temps froid", desc: "Automne, hiver, soirées fraîches", tags: ["winter", "warm"] },
                    { value: "all", icon: "🗓️", label: "Toute l'année", desc: "Je veux quelque chose de polyvalent", tags: ["versatile"] }
                ]
            }
        ]
    },
    en: {
        introBadge: "PERSONAL SCENT GUIDE",
        introTitle: "Find a signature that <span>feels like you.</span>",
        introSubtitle: "Make 6 quick choices. ELHM will then suggest 4 fragrances from the store based on your style, your moments and the presence you enjoy.",
        introPills: ["6 quick choices", "No fixed bundle price", "Pick your favorites"],
        start: "Start the finder →",
        progress: "Question",
        questionLabel: "Your profile",
        back: "← Back",
        next: "Continue →",
        seeResults: "See my suggestions →",
        resultsBadge: "YOUR ELHM SELECTION",
        resultsIntro: "These 4 fragrances match your answers best. Pick one, several, or none — the final choice stays yours.",
        select: "Select",
        selected: "Selected ✓",
        addSelected: "Add selection to cart",
        addSelectedCount: "Add {count} selected to cart",
        restart: "Start again",
        noSelection: "Select at least one fragrance before adding it to your cart.",
        closeLabel: "Close quiz",
        profileNames: {
            fresh: "Clean radiance",
            warm: "Magnetic warmth",
            elegant: "Quiet elegance",
            bold: "Signature presence",
            floral: "Modern bloom",
            woody: "Polished woods",
            sweet: "Refined gourmand",
            versatile: "Balanced signature"
        },
        profileDescriptions: {
            fresh: "You lean toward bright, clean fragrances that feel easy to wear without disappearing.",
            warm: "You want warmth, comfort and a scent that becomes more attractive as it settles.",
            elegant: "Your ideal fragrance feels polished, refined and naturally well put together.",
            bold: "You prefer a fragrance that gets noticed and leaves a memorable impression.",
            floral: "You are drawn to a modern floral expression with light, color and detail.",
            woody: "You enjoy structured, deeper fragrances with a strong woody character.",
            sweet: "You want something enveloping, addictive and stylish rather than simply sugary.",
            versatile: "You favor a balanced fragrance that can move easily between different moments."
        },
        tagLabels: {
            fresh: "Fresh", warm: "Warm", elegant: "Elegant", bold: "Bold",
            floral: "Floral", woody: "Woody", sweet: "Gourmand", fruity: "Fruity",
            summer: "Hot weather", spring: "Mild weather", winter: "Cold weather",
            daily: "Daily", work: "Work", romantic: "Date night", evening: "Evening",
            subtle: "Subtle", balanced: "Balanced", strong: "Strong", versatile: "Versatile"
        },
        questions: [
            {
                title: "Who are you choosing the fragrance for?",
                subtitle: "This helps us filter the collection without locking you into one narrow category.",
                options: [
                    { value: "men", icon: "🕴️", label: "Men", desc: "Fragrances from the men's collection", tags: [] },
                    { value: "women", icon: "🌷", label: "Women", desc: "Fragrances from the women's collection", tags: [] },
                    { value: "unisex", icon: "◐", label: "Unisex", desc: "Signatures made to be worn freely", tags: [] },
                    { value: "any", icon: "✦", label: "No preference", desc: "The right style matters more", tags: [] }
                ]
            },
            {
                title: "What impression should your scent leave?",
                subtitle: "Think about what you want people to feel when you walk past.",
                options: [
                    { value: "fresh", icon: "✨", label: "Clean & bright", desc: "Crisp, energetic, modern", tags: ["fresh", "elegant"] },
                    { value: "warm", icon: "🔥", label: "Warm & magnetic", desc: "Comforting, sensual, inviting", tags: ["warm", "sweet"] },
                    { value: "elegant", icon: "♟", label: "Refined & composed", desc: "Polished, structured, elegant", tags: ["elegant", "woody"] },
                    { value: "bold", icon: "⚡", label: "Bold & memorable", desc: "Strong presence, confident character", tags: ["bold", "strong"] }
                ]
            },
            {
                title: "When should it perform at its best?",
                subtitle: "Choose the setting where you expect to wear it most often.",
                options: [
                    { value: "daily", icon: "☀️", label: "Every day", desc: "Easy, pleasant and effortless", tags: ["daily", "versatile"] },
                    { value: "work", icon: "💼", label: "Work & meetings", desc: "Clean, precise and polished", tags: ["work", "elegant", "balanced"] },
                    { value: "romantic", icon: "♥", label: "Dates & close moments", desc: "Attractive, warm and intimate", tags: ["romantic", "warm"] },
                    { value: "evening", icon: "🌙", label: "Nights & events", desc: "More expressive and dramatic", tags: ["evening", "bold", "strong"] }
                ]
            },
            {
                title: "How much presence feels right?",
                subtitle: "Think about the effect you enjoy rather than a technical performance number.",
                options: [
                    { value: "subtle", icon: "◌", label: "Close to the skin", desc: "Quiet and personal", tags: ["subtle"] },
                    { value: "balanced", icon: "⚖️", label: "Noticeable but controlled", desc: "Present without taking over", tags: ["balanced", "versatile"] },
                    { value: "strong", icon: "✹", label: "I want real presence", desc: "A scent people will notice", tags: ["strong", "bold"] },
                    { value: "adaptive", icon: "↔", label: "It depends on the moment", desc: "I prefer something flexible", tags: ["versatile"] }
                ]
            },
            {
                title: "Which scent landscape pulls you in first?",
                subtitle: "Pick the world that sounds most appealing without overthinking it.",
                options: [
                    { value: "airy", icon: "🍋", label: "Citrus & fresh air", desc: "Bright, energetic, airy", tags: ["fresh", "summer"] },
                    { value: "woods", icon: "🌲", label: "Woods & spices", desc: "Deep, polished, textured", tags: ["woody", "warm"] },
                    { value: "amber", icon: "🍯", label: "Vanilla & amber", desc: "Soft, enveloping, gourmand", tags: ["sweet", "warm"] },
                    { value: "garden", icon: "🌺", label: "Flowers & fruit", desc: "Radiant, expressive, refined", tags: ["floral", "fruity"] }
                ]
            },
            {
                title: "What weather do you picture it in most?",
                subtitle: "Temperature changes the way a fragrance opens and settles on skin.",
                options: [
                    { value: "summer", icon: "🏖️", label: "Hot weather", desc: "Sun, light days and summer", tags: ["summer", "fresh"] },
                    { value: "spring", icon: "🌤️", label: "Mild weather", desc: "Spring, transition seasons, softness", tags: ["spring", "floral"] },
                    { value: "winter", icon: "❄️", label: "Cold weather", desc: "Autumn, winter and cool nights", tags: ["winter", "warm"] },
                    { value: "all", icon: "🗓️", label: "All year", desc: "I want something versatile", tags: ["versatile"] }
                ]
            }
        ]
    },
    ar: {
        introBadge: "دليل عطر شخصي",
        introTitle: "اكتشف عطراً <span>يشبه أسلوبك.</span>",
        introSubtitle: "اختر إجاباتك في 6 خطوات سريعة، وبعدها سيقترح عليك ELHM أربعة عطور من المتجر تناسب ذوقك ومناسباتك والحضور الذي تفضله.",
        introPills: ["6 اختيارات سريعة", "بدون سعر باقة ثابت", "اختر العطور التي تعجبك"],
        start: "ابدأ الاختبار ←",
        progress: "السؤال",
        questionLabel: "ملف عطرك",
        back: "رجوع →",
        next: "متابعة ←",
        seeResults: "اعرض اقتراحاتي ←",
        resultsBadge: "اختيارات ELHM لك",
        resultsIntro: "هذه أربعة عطور تتوافق أكثر مع إجاباتك. اختر عطراً واحداً أو أكثر، والقرار النهائي يبقى لك.",
        select: "اختيار",
        selected: "تم الاختيار ✓",
        addSelected: "أضف الاختيارات إلى السلة",
        addSelectedCount: "أضف {count} من اختياراتك إلى السلة",
        restart: "ابدأ من جديد",
        noSelection: "اختر عطراً واحداً على الأقل قبل الإضافة إلى السلة.",
        closeLabel: "إغلاق الاختبار",
        profileNames: {
            fresh: "انتعاش نقي",
            warm: "دفء جذاب",
            elegant: "أناقة هادئة",
            bold: "حضور مميز",
            floral: "زهور عصرية",
            woody: "أخشاب راقية",
            sweet: "حلاوة أنيقة",
            versatile: "توقيع متوازن"
        },
        profileDescriptions: {
            fresh: "تميل إلى العطور المضيئة والنظيفة التي يسهل ارتداؤها من دون أن تكون باهتة.",
            warm: "تبحث عن الدفء والراحة وعطر يصبح أكثر جاذبية مع مرور الوقت.",
            elegant: "العطر المناسب لك يجب أن يكون مرتباً وراقياً وأنيقاً بطريقة طبيعية.",
            bold: "تفضل عطراً يُلاحظ ويترك انطباعاً واضحاً ومميزاً.",
            floral: "تنجذب إلى طابع زهري عصري ومشرق ومليء بالتفاصيل.",
            woody: "تحب الروائح الخشبية المنظمة والعميقة ذات الطابع الراقي.",
            sweet: "تبحث عن عطر دافئ وحلو وجذاب مع بقاء الإحساس أنيقاً.",
            versatile: "تفضل عطراً متوازناً يمكن ارتداؤه بسهولة في أوقات ومناسبات مختلفة."
        },
        tagLabels: {
            fresh: "منعش", warm: "دافئ", elegant: "أنيق", bold: "جريء",
            floral: "زهري", woody: "خشبي", sweet: "حلو", fruity: "فاكهي",
            summer: "جو حار", spring: "جو معتدل", winter: "جو بارد",
            daily: "يومي", work: "للعمل", romantic: "للمواعيد", evening: "للسهرات",
            subtle: "هادئ", balanced: "متوازن", strong: "قوي", versatile: "متعدد الاستخدام"
        },
        questions: [
            {
                title: "لمن تختار هذا العطر؟",
                subtitle: "يساعدنا ذلك على تضييق الاختيارات من دون حصر ذوقك في فئة واحدة.",
                options: [
                    { value: "men", icon: "🕴️", label: "رجل", desc: "من مجموعة العطور الرجالية", tags: [] },
                    { value: "women", icon: "🌷", label: "امرأة", desc: "من مجموعة العطور النسائية", tags: [] },
                    { value: "unisex", icon: "◐", label: "للجميع", desc: "عطور يمكن ارتداؤها بحرية", tags: [] },
                    { value: "any", icon: "✦", label: "لا يهم", desc: "الأسلوب المناسب أهم بالنسبة لي", tags: [] }
                ]
            },
            {
                title: "ما الانطباع الذي تريد أن يتركه عطرك؟",
                subtitle: "فكر في الإحساس الذي تريد أن يشعر به الآخرون عندما تمر بجانبهم.",
                options: [
                    { value: "fresh", icon: "✨", label: "نظيف ومشرق", desc: "منعش، حيوي، عصري", tags: ["fresh", "elegant"] },
                    { value: "warm", icon: "🔥", label: "دافئ وجذاب", desc: "مريح، حسي، ملفت", tags: ["warm", "sweet"] },
                    { value: "elegant", icon: "♟", label: "راقي ومتزن", desc: "أنيق، منظم، مصقول", tags: ["elegant", "woody"] },
                    { value: "bold", icon: "⚡", label: "جريء ولا يُنسى", desc: "حضور قوي وشخصية واضحة", tags: ["bold", "strong"] }
                ]
            },
            {
                title: "متى تريد أن يكون العطر في أفضل حالاته؟",
                subtitle: "اختر المناسبة التي تتوقع أن ترتديه فيها أكثر.",
                options: [
                    { value: "daily", icon: "☀️", label: "كل يوم", desc: "سهل ومريح ومناسب دائماً", tags: ["daily", "versatile"] },
                    { value: "work", icon: "💼", label: "العمل والاجتماعات", desc: "نظيف ودقيق وأنيق", tags: ["work", "elegant", "balanced"] },
                    { value: "romantic", icon: "♥", label: "المواعيد واللحظات الخاصة", desc: "جذاب ودافئ وقريب", tags: ["romantic", "warm"] },
                    { value: "evening", icon: "🌙", label: "السهرات والمناسبات", desc: "أقوى وأكثر تعبيراً", tags: ["evening", "bold", "strong"] }
                ]
            },
            {
                title: "ما مستوى الحضور الذي يناسبك؟",
                subtitle: "فكر في الإحساس الذي تحبه، وليس في رقم تقني لقوة العطر.",
                options: [
                    { value: "subtle", icon: "◌", label: "قريب من البشرة", desc: "هادئ وشخصي", tags: ["subtle"] },
                    { value: "balanced", icon: "⚖️", label: "واضح لكن متزن", desc: "يُلاحظ من دون مبالغة", tags: ["balanced", "versatile"] },
                    { value: "strong", icon: "✹", label: "أريد حضوراً قوياً", desc: "عطر يلفت الانتباه", tags: ["strong", "bold"] },
                    { value: "adaptive", icon: "↔", label: "حسب المناسبة", desc: "أفضل عطراً مرناً", tags: ["versatile"] }
                ]
            },
            {
                title: "أي عالم عطري يجذبك أولاً؟",
                subtitle: "اختر الجو الذي يعجبك مباشرة من دون تفكير طويل.",
                options: [
                    { value: "airy", icon: "🍋", label: "حمضيات وهواء منعش", desc: "مشرق، حيوي، خفيف", tags: ["fresh", "summer"] },
                    { value: "woods", icon: "🌲", label: "أخشاب وتوابل", desc: "عميق، راقٍ، غني", tags: ["woody", "warm"] },
                    { value: "amber", icon: "🍯", label: "فانيلا وعنبر", desc: "ناعم، دافئ، حلو", tags: ["sweet", "warm"] },
                    { value: "garden", icon: "🌺", label: "زهور وفواكه", desc: "مشرق، معبر، أنيق", tags: ["floral", "fruity"] }
                ]
            },
            {
                title: "في أي طقس تتخيل هذا العطر أكثر؟",
                subtitle: "درجة الحرارة تغير كثيراً طريقة ظهور العطر على البشرة.",
                options: [
                    { value: "summer", icon: "🏖️", label: "الجو الحار", desc: "الشمس والأيام الخفيفة والصيف", tags: ["summer", "fresh"] },
                    { value: "spring", icon: "🌤️", label: "الجو المعتدل", desc: "الربيع والمواسم الانتقالية", tags: ["spring", "floral"] },
                    { value: "winter", icon: "❄️", label: "الجو البارد", desc: "الخريف والشتاء والليالي الباردة", tags: ["winter", "warm"] },
                    { value: "all", icon: "🗓️", label: "طوال السنة", desc: "أريد عطراً متعدد الاستخدام", tags: ["versatile"] }
                ]
            }
        ]
    }
};

// Curated style tags used only to rank products already present in the ELHM inventory.
// The final result is a recommendation aid, not an objective fragrance classification.
const quizProductProfiles = products.map(product => ({
    id: product.id,
    tags: Array.isArray(product.tags) ? product.tags : []
}));

const quizState = {
    lang: "fr",
    mode: "intro",
    step: 0,
    answers: [],
    recommendations: [],
    selected: new Set(),
    message: "",
    lastFocus: null
};

function getQuizCopy() {
    return quizTranslations[quizState.lang] || quizTranslations.fr;
}

function getQuizOverlay() {
    return document.getElementById('perfumeQuizOverlay');
}

function openPerfumeQuiz(lang = 'fr') {
    const overlay = getQuizOverlay();
    if (!overlay) return;

    quizState.lang = quizTranslations[lang] ? lang : 'fr';
    quizState.mode = 'intro';
    quizState.step = 0;
    quizState.answers = [];
    quizState.recommendations = [];
    quizState.selected = new Set();
    quizState.message = '';
    quizState.lastFocus = document.activeElement;

    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('quiz-open');
    applyQuizLanguage();
    renderQuizIntro();

    const closeBtn = overlay.querySelector('.quiz-close-btn');
    if (closeBtn) closeBtn.focus();
}

function closePerfumeQuiz() {
    const overlay = getQuizOverlay();
    if (!overlay) return;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('quiz-open');
    quizState.message = '';
    if (quizState.lastFocus && typeof quizState.lastFocus.focus === 'function') {
        quizState.lastFocus.focus();
    }
}

function setQuizLanguage(lang) {
    if (!quizTranslations[lang]) return;
    quizState.lang = lang;
    quizState.message = '';
    applyQuizLanguage();

    if (quizState.mode === 'intro') renderQuizIntro();
    else if (quizState.mode === 'question') renderQuizQuestion();
    else if (quizState.mode === 'results') renderQuizResults();
}

function applyQuizLanguage() {
    const modal = document.getElementById('perfumeQuizModal');
    const copy = getQuizCopy();
    if (!modal) return;

    modal.setAttribute('dir', quizState.lang === 'ar' ? 'rtl' : 'ltr');
    modal.setAttribute('lang', quizState.lang);

    const closeBtn = modal.querySelector('.quiz-close-btn');
    if (closeBtn) closeBtn.setAttribute('aria-label', copy.closeLabel);

    modal.querySelectorAll('[data-quiz-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-quiz-lang') === quizState.lang);
    });
}

function renderQuizIntro() {
    const stage = document.getElementById('quizStage');
    const progress = document.getElementById('quizProgressWrap');
    if (!stage) return;
    if (progress) progress.hidden = true;

    quizState.mode = 'intro';
    const t = getQuizCopy();

    stage.innerHTML = `
        <div class="quiz-intro">
            <span class="quiz-intro-badge">${t.introBadge}</span>
            <h2 id="quizTitle">${t.introTitle}</h2>
            <p>${t.introSubtitle}</p>
            <div class="quiz-intro-pills">
                ${t.introPills.map(item => `<span>${item}</span>`).join('')}
            </div>
            <button type="button" class="quiz-primary-btn" onclick="startPerfumeQuiz()">${t.start}</button>
        </div>
    `;
}

function startPerfumeQuiz() {
    quizState.mode = 'question';
    quizState.step = 0;
    quizState.answers = [];
    quizState.recommendations = [];
    quizState.selected = new Set();
    quizState.message = '';
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const t = getQuizCopy();
    const stage = document.getElementById('quizStage');
    const progressWrap = document.getElementById('quizProgressWrap');
    const progressLabel = document.getElementById('quizProgressLabel');
    const progressCount = document.getElementById('quizProgressCount');
    const progressBar = document.getElementById('quizProgressBar');
    if (!stage) return;

    quizState.mode = 'question';
    const question = t.questions[quizState.step];
    const selectedValue = quizState.answers[quizState.step]?.value || null;
    const total = t.questions.length;
    const isLast = quizState.step === total - 1;

    if (progressWrap) progressWrap.hidden = false;
    if (progressLabel) progressLabel.textContent = t.progress;
    if (progressCount) progressCount.textContent = `${quizState.step + 1} / ${total}`;
    if (progressBar) progressBar.style.width = `${((quizState.step + 1) / total) * 100}%`;

    stage.innerHTML = `
        <div class="quiz-question-wrap">
            <div class="quiz-question-heading">
                <span class="question-number">${t.questionLabel} · ${String(quizState.step + 1).padStart(2, '0')}</span>
                <h2 id="quizTitle">${question.title}</h2>
                <p>${question.subtitle}</p>
            </div>

            <div class="quiz-options-grid">
                ${question.options.map(option => `
                    <button type="button" class="quiz-option ${selectedValue === option.value ? 'selected' : ''}" onclick="selectQuizOption('${option.value}')">
                        <span class="quiz-option-icon" aria-hidden="true">${option.icon}</span>
                        <span>
                            <strong>${option.label}</strong>
                            <small>${option.desc}</small>
                        </span>
                        <span class="quiz-option-check" aria-hidden="true">✓</span>
                    </button>
                `).join('')}
            </div>

            <div class="quiz-question-actions">
                <button type="button" class="quiz-secondary-btn" onclick="quizGoBack()">${t.back}</button>
                <button type="button" class="quiz-primary-btn" onclick="quizGoNext()" ${selectedValue ? '' : 'disabled'}>
                    ${isLast ? t.seeResults : t.next}
                </button>
            </div>
        </div>
    `;
}

function selectQuizOption(value) {
    const t = getQuizCopy();
    const question = t.questions[quizState.step];
    const option = question.options.find(item => item.value === value);
    if (!option) return;

    quizState.answers[quizState.step] = {
        value: option.value,
        tags: [...option.tags]
    };
    renderQuizQuestion();
}

function quizGoBack() {
    if (quizState.mode === 'results') {
        quizState.mode = 'question';
        quizState.step = getQuizCopy().questions.length - 1;
        renderQuizQuestion();
        return;
    }

    if (quizState.step > 0) {
        quizState.step -= 1;
        renderQuizQuestion();
    } else {
        renderQuizIntro();
    }
}

function quizGoNext() {
    const t = getQuizCopy();
    if (!quizState.answers[quizState.step]) return;

    if (quizState.step < t.questions.length - 1) {
        quizState.step += 1;
        renderQuizQuestion();
    } else {
        buildQuizRecommendations();
        renderQuizResults();
    }
}

function getQuizTarget() {
    return quizState.answers[0]?.value || 'any';
}

function productMatchesQuizTarget(product, target) {
    if (!product) return false;
    const cat = product.cat || '';

    if (cat.includes('Pack') || cat.includes('Decante')) return false;
    if (target === 'men') return cat.includes('Homme');
    if (target === 'women') return cat.includes('Femme');
    if (target === 'unisex') {
        return product.unisex === true || cat.includes('Unisex') || (cat.includes('Homme') && cat.includes('Femme'));
    }
    return true;
}

function getQuizAnswerTags() {
    return quizState.answers
        .slice(1)
        .flatMap(answer => answer?.tags || []);
}

function buildQuizRecommendations() {
    const target = getQuizTarget();
    const answerTags = getQuizAnswerTags();
    const tagCounts = answerTags.reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
    }, {});

    const ranked = quizProductProfiles
        .map(profile => {
            const product = products.find(item => item.id === profile.id);
            if (!product || !productMatchesQuizTarget(product, target)) return null;

            let score = product.popular ? 0.35 : 0;
            profile.tags.forEach(tag => {
                if (tagCounts[tag]) score += tagCounts[tag] * 2;
            });

            // Small deterministic tie-breaker so results remain stable between refreshes.
            score += (profile.id % 11) / 1000;
            return { product, score };
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score || a.product.id - b.product.id);

    let results = ranked.slice(0, 4).map(item => item.product);

    // Fallback: fill any missing slots with popular eligible products from the actual inventory.
    if (results.length < 4) {
        const used = new Set(results.map(item => item.id));
        products
            .filter(product => productMatchesQuizTarget(product, target) && !used.has(product.id))
            .sort((a, b) => Number(b.popular) - Number(a.popular) || a.id - b.id)
            .forEach(product => {
                if (results.length < 4) {
                    results.push(product);
                    used.add(product.id);
                }
            });
    }

    quizState.recommendations = results.slice(0, 4);
    quizState.selected = new Set();
    quizState.message = '';
    quizState.mode = 'results';
}

function getQuizProfileKey() {
    const coreKeys = ['fresh', 'warm', 'elegant', 'bold', 'floral', 'woody', 'sweet'];
    const counts = {};
    getQuizAnswerTags().forEach(tag => {
        if (coreKeys.includes(tag)) counts[tag] = (counts[tag] || 0) + 1;
    });

    const ranked = coreKeys
        .map((key, index) => ({ key, count: counts[key] || 0, index }))
        .sort((a, b) => b.count - a.count || a.index - b.index);

    return ranked[0]?.count > 0 ? ranked[0].key : 'versatile';
}

function getTopQuizTags(limit = 4) {
    const t = getQuizCopy();
    const counts = {};
    getQuizAnswerTags().forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
    });

    return Object.entries(counts)
        .filter(([tag]) => t.tagLabels[tag])
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, limit)
        .map(([tag]) => tag);
}

function renderQuizResults() {
    const t = getQuizCopy();
    const stage = document.getElementById('quizStage');
    const progressWrap = document.getElementById('quizProgressWrap');
    if (!stage) return;

    quizState.mode = 'results';
    if (progressWrap) progressWrap.hidden = true;

    if (!quizState.recommendations.length) buildQuizRecommendations();

    const profileKey = getQuizProfileKey();
    const profileName = t.profileNames[profileKey] || t.profileNames.versatile;
    const profileDescription = t.profileDescriptions[profileKey] || t.profileDescriptions.versatile;
    const topTags = getTopQuizTags();
    const selectedCount = quizState.selected.size;
    const addLabel = selectedCount > 0
        ? t.addSelectedCount.replace('{count}', selectedCount)
        : t.addSelected;

    stage.innerHTML = `
        <div class="quiz-results">
            <div class="quiz-results-header">
                <span class="quiz-results-badge">${t.resultsBadge}</span>
                <h2 id="quizTitle">${profileName}</h2>
                <p>${profileDescription}</p>
                <div class="quiz-profile-tags">
                    ${topTags.map(tag => `<span>${t.tagLabels[tag]}</span>`).join('')}
                </div>
                <p style="margin-top:1rem;">${t.resultsIntro}</p>
            </div>

            <div class="quiz-recommendations-grid">
                ${quizState.recommendations.map((product, index) => {
                    const selected = quizState.selected.has(product.id);
                    return `
                        <article class="quiz-result-card ${selected ? 'selected' : ''}">
                            <div class="quiz-result-visual">
                                <span class="quiz-image-fallback">HM</span>
                                <img
                                    src="${getProductMainImage(product)}"
                                    alt="${product.name}"
                                    loading="lazy"
                                    onerror="hideBrokenProductImage(this)"
                                >
                                <span class="quiz-result-rank">${index + 1}</span>
                            </div>
                            <div class="quiz-result-content">
                                <h3>${product.name}</h3>
                                <div class="quiz-result-price">${product.price.toFixed(2)} DH</div>
                                <p class="quiz-result-desc">${product.desc || ''}</p>
                                <button type="button" class="quiz-select-btn" onclick="quizToggleRecommendation(${product.id})">
                                    ${selected ? t.selected : t.select}
                                </button>
                            </div>
                        </article>
                    `;
                }).join('')}
            </div>

            <div class="quiz-results-actions">
                <button type="button" class="quiz-secondary-btn" onclick="restartPerfumeQuiz()">${t.restart}</button>
                <button type="button" class="quiz-primary-btn" onclick="quizAddSelectedToCart()" ${selectedCount ? '' : 'disabled'}>${addLabel}</button>
            </div>
            <div class="quiz-message" id="quizMessage" aria-live="polite">${quizState.message}</div>
        </div>
    `;
}

function quizToggleRecommendation(id) {
    if (quizState.selected.has(id)) quizState.selected.delete(id);
    else quizState.selected.add(id);
    quizState.message = '';
    renderQuizResults();
}

function quizAddSelectedToCart() {
    const t = getQuizCopy();
    if (quizState.selected.size === 0) {
        quizState.message = t.noSelection;
        renderQuizResults();
        return;
    }

    quizState.selected.forEach(id => {
        const product = products.find(item => item.id === id);
        if (!product) return;
        const existing = cart.find(item => item.id === id);
        if (existing) existing.qty += 1;
        else cart.push({ ...product, qty: 1 });
    });

    saveCart();
    updateCartUI();
    closePerfumeQuiz();
    toggleCart(true);
}

function restartPerfumeQuiz() {
    quizState.mode = 'intro';
    quizState.step = 0;
    quizState.answers = [];
    quizState.recommendations = [];
    quizState.selected = new Set();
    quizState.message = '';
    renderQuizIntro();
}

function initPerfumeQuiz() {
    const overlay = getQuizOverlay();
    if (!overlay) return;

    applyQuizLanguage();

    overlay.addEventListener('click', event => {
        if (event.target === overlay) closePerfumeQuiz();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
            closePerfumeQuiz();
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    initPerfumeQuiz();
});

/* ======================================================================
   ELHM INTERACTION LAYER — mobile-first progressive enhancement
   Core inventory, cart totals, checkout, quiz and product IDs stay intact.
   ====================================================================== */

const ELHM_CORE_RENDER_PRODUCTS = renderProducts;
const ELHM_CORE_ADD_TO_CART = addToCart;
const ELHM_CORE_SET_PRODUCT_MODAL_IMAGE = setProductModalImage;
const ELHM_CORE_PM_ADD_TO_CART = pmAddToCart;

const elhmCatalogState = {
    query: '',
    filter: 'all'
};

const ELHM_FILTERS = [
    { key: 'all', label: 'Tous', tags: [] },
    { key: 'fresh', label: 'Frais', tags: ['fresh'] },
    { key: 'floral', label: 'Floral', tags: ['floral'] },
    { key: 'woody', label: 'Boisé', tags: ['woody'] },
    { key: 'sweet', label: 'Gourmand', tags: ['sweet'] },
    { key: 'fruity', label: 'Fruité', tags: ['fruity'] },
    { key: 'strong', label: 'Intense', tags: ['strong'] },
    { key: 'favorites', label: '♥ Favoris', tags: [] }
];

function getElhmFavorites() {
    try {
        const raw = JSON.parse(localStorage.getItem('elhm_favorites') || '[]');
        return new Set(Array.isArray(raw) ? raw.map(Number) : []);
    } catch (_) {
        return new Set();
    }
}

function saveElhmFavorites(favorites) {
    localStorage.setItem('elhm_favorites', JSON.stringify([...favorites]));
}

function isElhmFavorite(id) {
    return getElhmFavorites().has(Number(id));
}

function getPageBaseProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return [];
    const category = grid.getAttribute('data-category');
    if (category === 'BestSellers') return products.filter(p => p.popular).slice(0, 12);
    if (category === 'Homme' || category === 'Femme') {
        return products.filter(p => p.cat.includes(category) || p.cat.includes('Unisex'));
    }
    if (category) return products.filter(p => p.cat.includes(category));
    return products.slice();
}

function getFilteredCatalogProducts() {
    let list = getPageBaseProducts();
    const query = elhmCatalogState.query.trim().toLowerCase();
    if (query) {
        list = list.filter(p => `${p.name} ${p.desc || ''} ${(p.tags || []).join(' ')}`.toLowerCase().includes(query));
    }

    if (elhmCatalogState.filter === 'favorites') {
        const favorites = getElhmFavorites();
        list = list.filter(p => favorites.has(p.id));
    } else if (elhmCatalogState.filter !== 'all') {
        const def = ELHM_FILTERS.find(item => item.key === elhmCatalogState.filter);
        if (def && def.tags.length) {
            list = list.filter(p => (p.tags || []).some(tag => def.tags.includes(tag)));
        }
    }
    return list;
}

function ensureCatalogTools() {
    const grid = document.getElementById('productGrid');
    if (!grid || document.getElementById('catalogTools')) return;

    const base = getPageBaseProducts();
    if (!base.length) return;

    const tools = document.createElement('section');
    tools.className = 'catalog-tools';
    tools.id = 'catalogTools';
    tools.setAttribute('aria-label', 'Filtres de la collection');

    const available = ELHM_FILTERS.filter(def => {
        if (def.key === 'all' || def.key === 'favorites') return true;
        return base.some(p => (p.tags || []).some(tag => def.tags.includes(tag)));
    });

    tools.innerHTML = `
        <div class="catalog-tools-top">
            <div class="catalog-filter-row" id="catalogFilterRow">
                ${available.map(def => `
                    <button type="button" class="catalog-filter-chip ${def.key === 'all' ? 'is-active' : ''}" data-filter="${def.key}">
                        ${def.label}
                    </button>
                `).join('')}
            </div>
            <div class="catalog-result-meta">
                <span id="catalogResultCount"></span>
                <button type="button" class="catalog-reset" id="catalogReset" hidden>Effacer</button>
            </div>
        </div>
        <div class="catalog-swipe-progress" aria-hidden="true">
            <span id="catalogSwipeProgress"></span>
        </div>
    `;

    grid.parentNode.insertBefore(tools, grid);

    tools.addEventListener('click', event => {
        const chip = event.target.closest('[data-filter]');
        if (chip) {
            elhmCatalogState.filter = chip.dataset.filter;
            tools.querySelectorAll('[data-filter]').forEach(btn => {
                btn.classList.toggle('is-active', btn === chip);
                btn.setAttribute('aria-pressed', btn === chip ? 'true' : 'false');
            });
            renderProducts();
            if (window.innerWidth <= 820) {
                grid.scrollTo({ left: 0, behavior: 'smooth' });
            }
            return;
        }
        if (event.target.closest('#catalogReset')) {
            elhmCatalogState.query = '';
            elhmCatalogState.filter = 'all';
            document.querySelectorAll('.search-bar').forEach(input => input.value = '');
            tools.querySelectorAll('[data-filter]').forEach(btn => {
                const active = btn.dataset.filter === 'all';
                btn.classList.toggle('is-active', active);
                btn.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
            renderProducts();
        }
    });

    grid.addEventListener('scroll', updateCatalogSwipeProgress, { passive: true });
}

function updateCatalogTools(count) {
    const countNode = document.getElementById('catalogResultCount');
    const reset = document.getElementById('catalogReset');
    if (countNode) countNode.textContent = `${count} parfum${count === 1 ? '' : 's'}`;
    if (reset) reset.hidden = !elhmCatalogState.query && elhmCatalogState.filter === 'all';
    updateCatalogSwipeProgress();
}

function updateCatalogSwipeProgress() {
    const grid = document.getElementById('productGrid');
    const bar = document.getElementById('catalogSwipeProgress');
    if (!grid || !bar) return;
    const max = Math.max(0, grid.scrollWidth - grid.clientWidth);
    const ratio = max > 0 ? Math.min(1, Math.max(0, grid.scrollLeft / max)) : 1;
    bar.style.transform = `scaleX(${Math.max(0.08, ratio)})`;
}

renderProducts = function(searchQuery = elhmCatalogState.query) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    if (typeof searchQuery === 'string') elhmCatalogState.query = searchQuery;
    ensureCatalogTools();

    const displayProducts = getFilteredCatalogProducts();
    updateCatalogTools(displayProducts.length);

    if (!displayProducts.length) {
        const message = elhmCatalogState.filter === 'favorites'
            ? 'Aucun favori pour le moment. Touchez le cœur sur un parfum pour le sauvegarder.'
            : (elhmCatalogState.query ? 'Aucun parfum ne correspond à votre recherche.' : 'Aucun produit disponible actuellement.');
        grid.innerHTML = `<div class="catalog-empty-state"><span class="catalog-empty-mark">HM</span><strong>${message}</strong><button type="button" onclick="resetCatalogView()">Voir toute la collection</button></div>`;
        return;
    }

    grid.innerHTML = displayProducts.map((p, index) => {
        const favorite = isElhmFavorite(p.id);
        return `
        <article class="product-card elhm-reveal" data-product-id="${p.id}" style="--card-index:${Math.min(index, 8)}">
            <div class="product-img-wrapper" onclick="openProductModal(${p.id})" role="button" tabindex="0" aria-label="Voir ${p.name}">
                <div class="product-img-placeholder product-image-shell">
                    <span class="image-fallback-mark">ELHM</span>
                    <img
                        src="${getProductMainImage(p)}"
                        alt="${p.name}"
                        class="product-card-img"
                        loading="lazy"
                        onerror="hideBrokenProductImage(this)"
                    >
                    <span class="product-quick-label">Voir</span>
                    <button
                        type="button"
                        class="product-favorite ${favorite ? 'is-active' : ''}"
                        onclick="toggleFavorite(${p.id}, event)"
                        aria-label="${favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}"
                        aria-pressed="${favorite ? 'true' : 'false'}"
                    >${favorite ? '♥' : '♡'}</button>
                </div>
            </div>
            <div class="product-title" onclick="openProductModal(${p.id})">${p.name}</div>
            <div class="product-description">${p.desc || ''}</div>
            <div class="product-card-footer">
                <div class="product-price">${p.price.toFixed(2)} DH</div>
                <button class="btn-add" onclick="addToCart(${p.id}, this)"><span>Ajouter</span><b aria-hidden="true">＋</b></button>
            </div>
        </article>`;
    }).join('');

    bindProductCardKeyboard();
    activateRevealObserver();
    requestAnimationFrame(updateCatalogSwipeProgress);
}

function resetCatalogView() {
    elhmCatalogState.query = '';
    elhmCatalogState.filter = 'all';
    document.querySelectorAll('.search-bar').forEach(input => input.value = '');
    document.querySelectorAll('.catalog-filter-chip').forEach(btn => {
        const active = btn.dataset.filter === 'all';
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    renderProducts();
}

handleSearch = function(event) {
    elhmCatalogState.query = event.target.value || '';
    renderProducts();
}

function toggleFavorite(id, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const favorites = getElhmFavorites();
    const product = products.find(p => p.id === id);
    const added = !favorites.has(id);
    if (added) favorites.add(id); else favorites.delete(id);
    saveElhmFavorites(favorites);

    document.querySelectorAll(`.product-card[data-product-id="${id}"] .product-favorite`).forEach(btn => {
        btn.classList.toggle('is-active', added);
        btn.textContent = added ? '♥' : '♡';
        btn.setAttribute('aria-pressed', added ? 'true' : 'false');
        btn.setAttribute('aria-label', added ? 'Retirer des favoris' : 'Ajouter aux favoris');
    });
    showElhmToast(added ? `${product?.name || 'Parfum'} ajouté aux favoris` : 'Retiré des favoris', added ? 'heart' : 'neutral');

    if (elhmCatalogState.filter === 'favorites' && !added) renderProducts();
}

function bindProductCardKeyboard() {
    document.querySelectorAll('.product-img-wrapper[tabindex="0"]').forEach(wrapper => {
        if (wrapper.dataset.keyboardReady) return;
        wrapper.dataset.keyboardReady = '1';
        wrapper.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const card = wrapper.closest('[data-product-id]');
                if (card) openProductModal(Number(card.dataset.productId));
            }
        });
    });
}

function pulseCartCount() {
    const count = document.getElementById('cartCount');
    if (!count) return;
    count.classList.remove('is-pulsing');
    void count.offsetWidth;
    count.classList.add('is-pulsing');
}

addToCart = function(id, sourceButton) {
    if (sourceButton) {
        sourceButton.classList.add('is-adding');
        const label = sourceButton.querySelector('span');
        if (label) label.textContent = 'Ajouté ✓';
    }
    ELHM_CORE_ADD_TO_CART(id);
    pulseCartCount();
    const product = products.find(p => p.id === id);
    showElhmToast(`${product?.name || 'Parfum'} ajouté au panier`, 'cart');
    if (sourceButton) {
        window.setTimeout(() => {
            sourceButton.classList.remove('is-adding');
            const label = sourceButton.querySelector('span');
            if (label) label.textContent = 'Ajouter';
        }, 1100);
    }
}

pmAddToCart = function() {
    const product = products.find(p => p.id === currentModalProductId);
    ELHM_CORE_PM_ADD_TO_CART();
    pulseCartCount();
    if (product) showElhmToast(`${product.name} ajouté au panier`, 'cart');
}

let elhmModalImageIndex = 0;
setProductModalImage = function(index) {
    elhmModalImageIndex = Math.max(0, Math.min(1, Number(index) || 0));
    ELHM_CORE_SET_PRODUCT_MODAL_IMAGE(elhmModalImageIndex);
    updateProductImageCounter();
}

function updateProductImageCounter() {
    const main = document.getElementById('pmMainImage');
    if (!main) return;
    let counter = main.querySelector('.pm-image-counter');
    if (!counter) {
        counter = document.createElement('span');
        counter.className = 'pm-image-counter';
        main.appendChild(counter);
    }
    counter.textContent = `${elhmModalImageIndex + 1} / 2`;
}

function initProductImageSwipe() {
    const main = document.getElementById('pmMainImage');
    if (!main || main.dataset.swipeReady) return;
    main.dataset.swipeReady = '1';
    let startX = null;
    let startY = null;

    main.addEventListener('touchstart', event => {
        const touch = event.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    }, { passive: true });

    main.addEventListener('touchend', event => {
        if (startX === null || startY === null) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;
        startX = startY = null;
        if (Math.abs(dx) < 42 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
        setProductModalImage(dx < 0 ? 1 : 0);
    }, { passive: true });
}

function ensureElhmToast() {
    let toast = document.getElementById('elhmToast');
    if (toast) return toast;
    toast = document.createElement('div');
    toast.id = 'elhmToast';
    toast.className = 'elhm-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
    return toast;
}

let elhmToastTimer = null;
function showElhmToast(message, type = 'neutral') {
    const toast = ensureElhmToast();
    toast.dataset.type = type;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(elhmToastTimer);
    elhmToastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 1800);
}

function ensureBackToTop() {
    if (document.getElementById('elhmBackToTop')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'elhmBackToTop';
    btn.className = 'elhm-back-top';
    btn.setAttribute('aria-label', 'Retour en haut');
    btn.innerHTML = '↑';
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(btn);

    const update = () => btn.classList.toggle('is-visible', window.scrollY > 520);
    window.addEventListener('scroll', update, { passive: true });
    update();
}

let elhmRevealObserver = null;
function activateRevealObserver() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.elhm-reveal').forEach(el => el.classList.add('is-visible'));
        return;
    }
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.elhm-reveal').forEach(el => el.classList.add('is-visible'));
        return;
    }
    if (!elhmRevealObserver) {
        elhmRevealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    elhmRevealObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '60px 0px', threshold: 0.06 });
    }
    document.querySelectorAll('.elhm-reveal:not(.is-visible)').forEach(el => elhmRevealObserver.observe(el));
}

function markStaticRevealSections() {
    document.querySelectorAll('.perfume-finder-section, .customer-reviews-section, .site-footer').forEach(el => el.classList.add('elhm-reveal'));
    activateRevealObserver();
}

function initHeaderScrollState() {
    const header = document.querySelector('header');
    if (!header) return;
    const update = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    window.addEventListener('scroll', update, { passive: true });
    update();
}

function initSearchKeyboardUX() {
    document.querySelectorAll('.search-bar').forEach(input => {
        input.setAttribute('inputmode', 'search');
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('enterkeyhint', 'search');
        input.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                input.value = '';
                elhmCatalogState.query = '';
                renderProducts();
                input.blur();
            }
        });
    });
}

function initCartSwipeClose() {
    const modal = document.querySelector('.cart-modal');
    const header = document.querySelector('.cart-header');
    if (!modal || !header || modal.dataset.swipeCloseReady) return;
    modal.dataset.swipeCloseReady = '1';
    let startY = null;

    header.addEventListener('touchstart', event => {
        if (window.innerWidth > 820) return;
        startY = event.touches[0].clientY;
    }, { passive: true });

    header.addEventListener('touchend', event => {
        if (startY === null || window.innerWidth > 820) return;
        const dy = event.changedTouches[0].clientY - startY;
        startY = null;
        if (dy > 80) toggleCart();
    }, { passive: true });
}

function initElhmInteractionLayer() {
    ensureCatalogTools();
    ensureBackToTop();
    initProductImageSwipe();
    initHeaderScrollState();
    initSearchKeyboardUX();
    initCartSwipeClose();
    markStaticRevealSections();
    renderProducts();
}

document.addEventListener('DOMContentLoaded', initElhmInteractionLayer);
