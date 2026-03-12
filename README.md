mongodb database testing for learning

you need to add DATABASE: SOLARSYSTEM
and there you add an collection: STARSYSTEM

there you can insert the default stars and planets:
{
    "_id" : ObjectId("5f41351f4f3d9c58f07e1c49"),
    "STAR" : {
        "_id" : ObjectId("6123456789abcdef12345678"),
        "starname" : "Sun",
        "type" : "G2V",
        "mass" : NumberInt(332950),
        "age" : 4.6
    },
    "system_type" : "planetary",
    "planet" : [
        {
            "_id" : ObjectId("69b277122e72843801441530"),
            "planet_name" : "Merury",
            "planet_type" : "rocky"
        },
        {
            "planet_name" : "Venus",
            "planet_type" : "terrestrial",
            "_id" : ObjectId("69b277122e72843801441531")
        },
        {
            "planet_name" : "Earth",
            "planet_type" : "terrestrial",
            "_id" : ObjectId("69b277122e72843801441532")
        },
        {
            "planet_name" : "Mars",
            "planet_type" : "rocky",
            "_id" : ObjectId("69b277122e72843801441533")
        },
        {
            "planet_name" : "Jupiter",
            "planet_type" : "gas giant",
            "_id" : ObjectId("69b277122e72843801441534")
        },
        {
            "planet_name" : "Saturn",
            "planet_type" : "gas giant",
            "_id" : ObjectId("69b277122e72843801441535")
        },
        {
            "planet_name" : "Uranus",
            "planet_type" : "ice giant",
            "_id" : ObjectId("69b277122e72843801441536")
        },
        {
            "planet_name" : "Neptune",
            "planet_type" : "gas giant",
            "_id" : ObjectId("69b277122e72843801441537")
        }
    ],
    "number_of_planets" : NumberInt(8)
}
{
    "_id" : ObjectId("66fabcde12ab34cd56ef7890"),
    "STAR" : {
        "_id" : ObjectId("66fabcde12ab34cd56ef7891"),
        "starname" : "Proxima Centauri",
        "type" : "M5.5Ve",
        "mass" : 0.12,
        "age" : 4.85
    },
    "system_type" : "planetary",
    "planet" : [
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef7892"),
            "planet_name" : "Proxima b",
            "planet_type" : "terrestrial"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef7893"),
            "planet_name" : "Proxima c",
            "planet_type" : "super-earth"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef7894"),
            "planet_name" : "Proxima d",
            "planet_type" : "rocky"
        }
    ],
    "number_of_planets" : NumberInt(3)
}
{
    "_id" : ObjectId("66fabcde12ab34cd56ef7900"),
    "STAR" : {
        "_id" : ObjectId("66fabcde12ab34cd56ef7901"),
        "starname" : "Barnard's Star",
        "type" : "M4Ve",
        "mass" : 0.16,
        "age" : NumberInt(10)
    },
    "system_type" : "planetary",
    "planet" : [
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef7902"),
            "planet_name" : "Barnard b",
            "planet_type" : "rocky"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef7903"),
            "planet_name" : "Barnard c",
            "planet_type" : "super-earth"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef7904"),
            "planet_name" : "Barnard d",
            "planet_type" : "rocky"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef7905"),
            "planet_name" : "Barnard e",
            "planet_type" : "rocky"
        }
    ],
    "number_of_planets" : NumberInt(4)
}
{
    "_id" : ObjectId("66fabcde12ab34cd56ef8000"),
    "STAR" : {
        "_id" : ObjectId("66fabcde12ab34cd56ef8001"),
        "starname" : "Kepler-90",
        "type" : "G0V",
        "mass" : 1.2,
        "age" : NumberInt(2)
    },
    "system_type" : "planetary",
    "planet" : [
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8002"),
            "planet_name" : "Kepler-90b",
            "planet_type" : "rocky"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8003"),
            "planet_name" : "Kepler-90c",
            "planet_type" : "rocky"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8004"),
            "planet_name" : "Kepler-90i",
            "planet_type" : "rocky"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8005"),
            "planet_name" : "Kepler-90d",
            "planet_type" : "super-earth"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8006"),
            "planet_name" : "Kepler-90e",
            "planet_type" : "super-earth"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8007"),
            "planet_name" : "Kepler-90f",
            "planet_type" : "mini-neptune"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8008"),
            "planet_name" : "Kepler-90g",
            "planet_type" : "gas giant"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8009"),
            "planet_name" : "Kepler-90h",
            "planet_type" : "gas giant"
        }
    ],
    "number_of_planets" : NumberInt(8)
}
{
    "_id" : ObjectId("66fabcde12ab34cd56ef8100"),
    "STAR" : {
        "_id" : ObjectId("66fabcde12ab34cd56ef8101"),
        "starname" : "HD 10180",
        "type" : "G1V",
        "mass" : 1.06,
        "age" : 4.3
    },
    "system_type" : "planetary",
    "planet" : [
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8102"),
            "planet_name" : "HD 10180 b",
            "planet_type" : "super-earth"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8103"),
            "planet_name" : "HD 10180 c",
            "planet_type" : "super-earth"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8104"),
            "planet_name" : "HD 10180 d",
            "planet_type" : "super-earth"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8105"),
            "planet_name" : "HD 10180 e",
            "planet_type" : "mini-neptune"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8106"),
            "planet_name" : "HD 10180 f",
            "planet_type" : "gas giant"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8107"),
            "planet_name" : "HD 10180 g",
            "planet_type" : "gas giant"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8108"),
            "planet_name" : "HD 10180 h",
            "planet_type" : "gas giant"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8109"),
            "planet_name" : "HD 10180 i",
            "planet_type" : "super-earth"
        },
        {
            "_id" : ObjectId("66fabcde12ab34cd56ef8110"),
            "planet_name" : "HD 10180 j",
            "planet_type" : "super-earth"
        }
    ],
    "number_of_planets" : NumberInt(9)
}
