//Credit to https://github.com/Menardi/whosthatpokemon/blob/master/src/pokemon.ts#L9133

export const GENERATIONS = {
  1: {
    start: 1,
    end: 151,
  },
  2: {
    start: 152,
    end: 251,
  },
  3: {
    start: 252,
    end: 386,
  },
  4: {
    start: 387,
    end: 493,
  },
  5: {
    start: 494,
    end: 649,
  },
  6: {
    start: 650,
    end: 721,
  },
  7: {
    start: 722,
    end: 807,
  },
  8: {
    // Technically gen 8 starts at 810, but 808 and 809 don't have sprites, and so are closer to being gen 8
    // than gen 7 (they were introduced in Let's Go)
    start: 808,
    end: 905,
  },
  9: {
    start: 906,
    end: 1010,
  },
};

export const POKEMON = [
  {
    names: {
      en: "bulbasaur",
    },
    number: 1,
  },
  {
    names: {
      en: "ivysaur",
    },
    number: 2,
  },
  {
    names: {
      en: "venusaur",
    },
    number: 3,
  },
  {
    names: {
      en: "charmander",
    },
    number: 4,
  },
  {
    names: {
      en: "charmeleon",
    },
    number: 5,
  },
  {
    names: {
      en: "charizard",
    },
    number: 6,
  },
  {
    names: {
      en: "squirtle",
    },
    number: 7,
  },
  {
    names: {
      en: "wartortle",
    },
    number: 8,
  },
  {
    names: {
      en: "blastoise",
    },
    number: 9,
  },
  {
    names: {
      en: "caterpie",
    },
    number: 10,
  },
  {
    names: {
      en: "metapod",
    },
    number: 11,
  },
  {
    names: {
      en: "butterfree",
    },
    number: 12,
  },
  {
    names: {
      en: "weedle",
    },
    number: 13,
  },
  {
    names: {
      en: "kakuna",
    },
    number: 14,
  },
  {
    names: {
      en: "beedrill",
    },
    number: 15,
  },
  {
    names: {
      en: "pidgey",
    },
    number: 16,
  },
  {
    names: {
      en: "pidgeotto",
    },
    number: 17,
  },
  {
    names: {
      en: "pidgeot",
    },
    number: 18,
  },
  {
    names: {
      en: "rattata",
    },
    number: 19,
  },
  {
    names: {
      en: "raticate",
    },
    number: 20,
  },
  {
    names: {
      en: "spearow",
    },
    number: 21,
  },
  {
    names: {
      en: "fearow",
    },
    number: 22,
  },
  {
    names: {
      en: "ekans",
    },
    number: 23,
  },
  {
    names: {
      en: "arbok",
    },
    number: 24,
  },
  {
    names: {
      en: "pikachu",
    },
    number: 25,
  },
  {
    names: {
      en: "raichu",
    },
    number: 26,
  },
  {
    names: {
      en: "sandshrew",
    },
    number: 27,
  },
  {
    names: {
      en: "sandslash",
    },
    number: 28,
  },
  {
    names: {
      en: "nidoran",
    },
    number: 29,
  },
  {
    names: {
      en: "nidorina",
    },
    number: 30,
  },
  {
    names: {
      en: "nidoqueen",
    },
    number: 31,
  },
  {
    names: {
      en: "nidoran",
    },
    number: 32,
  },
  {
    names: {
      en: "nidorino",
    },
    number: 33,
  },
  {
    names: {
      en: "nidoking",
    },
    number: 34,
  },
  {
    names: {
      en: "clefairy",
    },
    number: 35,
  },
  {
    names: {
      en: "clefable",
    },
    number: 36,
  },
  {
    names: {
      en: "vulpix",
    },
    number: 37,
  },
  {
    names: {
      en: "ninetales",
    },
    number: 38,
  },
  {
    names: {
      en: "jigglypuff",
    },
    number: 39,
  },
  {
    names: {
      en: "wigglytuff",
    },
    number: 40,
  },
  {
    names: {
      en: "zubat",
    },
    number: 41,
  },
  {
    names: {
      en: "golbat",
    },
    number: 42,
  },
  {
    names: {
      en: "oddish",
    },
    number: 43,
  },
  {
    names: {
      en: "gloom",
    },
    number: 44,
  },
  {
    names: {
      en: "vileplume",
    },
    number: 45,
  },
  {
    names: {
      en: "paras",
    },
    number: 46,
  },
  {
    names: {
      en: "parasect",
    },
    number: 47,
  },
  {
    names: {
      en: "venonat",
    },
    number: 48,
  },
  {
    names: {
      en: "venomoth",
    },
    number: 49,
  },
  {
    names: {
      en: "diglett",
    },
    number: 50,
  },
  {
    names: {
      en: "dugtrio",
    },
    number: 51,
  },
  {
    names: {
      en: "meowth",
    },
    number: 52,
  },
  {
    names: {
      en: "persian",
    },
    number: 53,
  },
  {
    names: {
      en: "psyduck",
    },
    number: 54,
  },
  {
    names: {
      en: "golduck",
    },
    number: 55,
  },
  {
    names: {
      en: "mankey",
    },
    number: 56,
  },
  {
    names: {
      en: "primeape",
    },
    number: 57,
  },
  {
    names: {
      en: "growlithe",
    },
    number: 58,
  },
  {
    names: {
      en: "arcanine",
    },
    number: 59,
  },
  {
    names: {
      en: "poliwag",
    },
    number: 60,
  },
  {
    names: {
      en: "poliwhirl",
    },
    number: 61,
  },
  {
    names: {
      en: "poliwrath",
    },
    number: 62,
  },
  {
    names: {
      en: "abra",
    },
    number: 63,
  },
  {
    names: {
      en: "kadabra",
    },
    number: 64,
  },
  {
    names: {
      en: "alakazam",
    },
    number: 65,
  },
  {
    names: {
      en: "machop",
    },
    number: 66,
  },
  {
    names: {
      en: "machoke",
    },
    number: 67,
  },
  {
    names: {
      en: "machamp",
    },
    number: 68,
  },
  {
    names: {
      en: "bellsprout",
    },
    number: 69,
  },
  {
    names: {
      en: "weepinbell",
    },
    number: 70,
  },
  {
    names: {
      en: "victreebel",
    },
    number: 71,
  },
  {
    names: {
      en: "tentacool",
    },
    number: 72,
  },
  {
    names: {
      en: "tentacruel",
    },
    number: 73,
  },
  {
    names: {
      en: "geodude",
    },
    number: 74,
  },
  {
    names: {
      en: "graveler",
    },
    number: 75,
  },
  {
    names: {
      en: "golem",
    },
    number: 76,
  },
  {
    names: {
      en: "ponyta",
    },
    number: 77,
  },
  {
    names: {
      en: "rapidash",
    },
    number: 78,
  },
  {
    names: {
      en: "slowpoke",
    },
    number: 79,
  },
  {
    names: {
      en: "slowbro",
    },
    number: 80,
  },
  {
    names: {
      en: "magnemite",
    },
    number: 81,
  },
  {
    names: {
      en: "magneton",
    },
    number: 82,
  },
  {
    names: {
      en: "farfetch'd",
    },
    number: 83,
  },
  {
    names: {
      en: "doduo",
    },
    number: 84,
  },
  {
    names: {
      en: "dodrio",
    },
    number: 85,
  },
  {
    names: {
      en: "seel",
    },
    number: 86,
  },
  {
    names: {
      en: "dewgong",
    },
    number: 87,
  },
  {
    names: {
      en: "grimer",
    },
    number: 88,
  },
  {
    names: {
      en: "muk",
    },
    number: 89,
  },
  {
    names: {
      en: "shellder",
    },
    number: 90,
  },
  {
    names: {
      en: "cloyster",
    },
    number: 91,
  },
  {
    names: {
      en: "gastly",
    },
    number: 92,
  },
  {
    names: {
      en: "haunter",
    },
    number: 93,
  },
  {
    names: {
      en: "gengar",
    },
    number: 94,
  },
  {
    names: {
      en: "onix",
    },
    number: 95,
  },
  {
    names: {
      en: "drowzee",
    },
    number: 96,
  },
  {
    names: {
      en: "hypno",
    },
    number: 97,
  },
  {
    names: {
      en: "krabby",
    },
    number: 98,
  },
  {
    names: {
      en: "kingler",
    },
    number: 99,
  },
  {
    names: {
      en: "voltorb",
    },
    number: 100,
  },
  {
    names: {
      en: "electrode",
    },
    number: 101,
  },
  {
    names: {
      en: "exeggcute",
    },
    number: 102,
  },
  {
    names: {
      en: "exeggutor",
    },
    number: 103,
  },
  {
    names: {
      en: "cubone",
    },
    number: 104,
  },
  {
    names: {
      en: "marowak",
    },
    number: 105,
  },
  {
    names: {
      en: "hitmonlee",
    },
    number: 106,
  },
  {
    names: {
      en: "hitmonchan",
    },
    number: 107,
  },
  {
    names: {
      en: "lickitung",
    },
    number: 108,
  },
  {
    names: {
      en: "koffing",
    },
    number: 109,
  },
  {
    names: {
      en: "weezing",
    },
    number: 110,
  },
  {
    names: {
      en: "rhyhorn",
    },
    number: 111,
  },
  {
    names: {
      en: "rhydon",
    },
    number: 112,
  },
  {
    names: {
      en: "chansey",
    },
    number: 113,
  },
  {
    names: {
      en: "tangela",
    },
    number: 114,
  },
  {
    names: {
      en: "kangaskhan",
    },
    number: 115,
  },
  {
    names: {
      en: "horsea",
    },
    number: 116,
  },
  {
    names: {
      en: "seadra",
    },
    number: 117,
  },
  {
    names: {
      en: "goldeen",
    },
    number: 118,
  },
  {
    names: {
      en: "seaking",
    },
    number: 119,
  },
  {
    names: {
      en: "staryu",
    },
    number: 120,
  },
  {
    names: {
      en: "starmie",
    },
    number: 121,
  },
  {
    names: {
      en: "mr. mime",
    },
    number: 122,
  },
  {
    names: {
      en: "scyther",
    },
    number: 123,
  },
  {
    names: {
      en: "jynx",
    },
    number: 124,
  },
  {
    names: {
      en: "electabuzz",
    },
    number: 125,
  },
  {
    names: {
      en: "magmar",
    },
    number: 126,
  },
  {
    names: {
      en: "pinsir",
    },
    number: 127,
  },
  {
    names: {
      en: "tauros",
    },
    number: 128,
  },
  {
    names: {
      en: "magikarp",
    },
    number: 129,
  },
  {
    names: {
      en: "gyarados",
    },
    number: 130,
  },
  {
    names: {
      en: "lapras",
    },
    number: 131,
  },
  {
    names: {
      en: "ditto",
    },
    number: 132,
  },
  {
    names: {
      en: "eevee",
    },
    number: 133,
  },
  {
    names: {
      en: "vaporeon",
    },
    number: 134,
  },
  {
    names: {
      en: "jolteon",
    },
    number: 135,
  },
  {
    names: {
      en: "flareon",
    },
    number: 136,
  },
  {
    names: {
      en: "porygon",
    },
    number: 137,
  },
  {
    names: {
      en: "omanyte",
    },
    number: 138,
  },
  {
    names: {
      en: "omastar",
    },
    number: 139,
  },
  {
    names: {
      en: "kabuto",
    },
    number: 140,
  },
  {
    names: {
      en: "kabutops",
    },
    number: 141,
  },
  {
    names: {
      en: "aerodactyl",
    },
    number: 142,
  },
  {
    names: {
      en: "snorlax",
    },
    number: 143,
  },
  {
    names: {
      en: "articuno",
    },
    number: 144,
  },
  {
    names: {
      en: "zapdos",
    },
    number: 145,
  },
  {
    names: {
      en: "moltres",
    },
    number: 146,
  },
  {
    names: {
      en: "dratini",
    },
    number: 147,
  },
  {
    names: {
      en: "dragonair",
    },
    number: 148,
  },
  {
    names: {
      en: "dragonite",
    },
    number: 149,
  },
  {
    names: {
      en: "mewtwo",
    },
    number: 150,
  },
  {
    names: {
      en: "mew",
    },
    number: 151,
  },
  {
    names: {
      en: "chikorita",
    },
    number: 152,
  },
  {
    names: {
      en: "bayleef",
    },
    number: 153,
  },
  {
    names: {
      en: "meganium",
    },
    number: 154,
  },
  {
    names: {
      en: "cyndaquil",
    },
    number: 155,
  },
  {
    names: {
      en: "quilava",
    },
    number: 156,
  },
  {
    names: {
      en: "typhlosion",
    },
    number: 157,
  },
  {
    names: {
      en: "totodile",
    },
    number: 158,
  },
  {
    names: {
      en: "croconaw",
    },
    number: 159,
  },
  {
    names: {
      en: "feraligatr",
    },
    number: 160,
  },
  {
    names: {
      en: "sentret",
    },
    number: 161,
  },
  {
    names: {
      en: "furret",
    },
    number: 162,
  },
  {
    names: {
      en: "hoothoot",
    },
    number: 163,
  },
  {
    names: {
      en: "noctowl",
    },
    number: 164,
  },
  {
    names: {
      en: "ledyba",
    },
    number: 165,
  },
  {
    names: {
      en: "ledian",
    },
    number: 166,
  },
  {
    names: {
      en: "spinarak",
    },
    number: 167,
  },
  {
    names: {
      en: "ariados",
    },
    number: 168,
  },
  {
    names: {
      en: "crobat",
    },
    number: 169,
  },
  {
    names: {
      en: "chinchou",
    },
    number: 170,
  },
  {
    names: {
      en: "lanturn",
    },
    number: 171,
  },
  {
    names: {
      en: "pichu",
    },
    number: 172,
  },
  {
    names: {
      en: "cleffa",
    },
    number: 173,
  },
  {
    names: {
      en: "igglybuff",
    },
    number: 174,
  },
  {
    names: {
      en: "togepi",
    },
    number: 175,
  },
  {
    names: {
      en: "togetic",
    },
    number: 176,
  },
  {
    names: {
      en: "natu",
    },
    number: 177,
  },
  {
    names: {
      en: "xatu",
    },
    number: 178,
  },
  {
    names: {
      en: "mareep",
    },
    number: 179,
  },
  {
    names: {
      en: "flaaffy",
    },
    number: 180,
  },
  {
    names: {
      en: "ampharos",
    },
    number: 181,
  },
  {
    names: {
      en: "bellossom",
    },
    number: 182,
  },
  {
    names: {
      en: "marill",
    },
    number: 183,
  },
  {
    names: {
      en: "azumarill",
    },
    number: 184,
  },
  {
    names: {
      en: "sudowoodo",
    },
    number: 185,
  },
  {
    names: {
      en: "politoed",
    },
    number: 186,
  },
  {
    names: {
      en: "hoppip",
    },
    number: 187,
  },
  {
    names: {
      en: "skiploom",
    },
    number: 188,
  },
  {
    names: {
      en: "jumpluff",
    },
    number: 189,
  },
  {
    names: {
      en: "aipom",
    },
    number: 190,
  },
  {
    names: {
      en: "sunkern",
    },
    number: 191,
  },
  {
    names: {
      en: "sunflora",
    },
    number: 192,
  },
  {
    names: {
      en: "yanma",
    },
    number: 193,
  },
  {
    names: {
      en: "wooper",
    },
    number: 194,
  },
  {
    names: {
      en: "quagsire",
    },
    number: 195,
  },
  {
    names: {
      en: "espeon",
    },
    number: 196,
  },
  {
    names: {
      en: "umbreon",
    },
    number: 197,
  },
  {
    names: {
      en: "murkrow",
    },
    number: 198,
  },
  {
    names: {
      en: "slowking",
    },
    number: 199,
  },
  {
    names: {
      en: "misdreavus",
    },
    number: 200,
  },
  {
    names: {
      en: "unown",
    },
    number: 201,
  },
  {
    names: {
      en: "wobbuffet",
    },
    number: 202,
  },
  {
    names: {
      en: "girafarig",
    },
    number: 203,
  },
  {
    names: {
      en: "pineco",
    },
    number: 204,
  },
  {
    names: {
      en: "forretress",
    },
    number: 205,
  },
  {
    names: {
      en: "dunsparce",
    },
    number: 206,
  },
  {
    names: {
      en: "gligar",
    },
    number: 207,
  },
  {
    names: {
      en: "steelix",
    },
    number: 208,
  },
  {
    names: {
      en: "snubbull",
    },
    number: 209,
  },
  {
    names: {
      en: "granbull",
    },
    number: 210,
  },
  {
    names: {
      en: "qwilfish",
    },
    number: 211,
  },
  {
    names: {
      en: "scizor",
    },
    number: 212,
  },
  {
    names: {
      en: "shuckle",
    },
    number: 213,
  },
  {
    names: {
      en: "heracross",
    },
    number: 214,
  },
  {
    names: {
      en: "sneasel",
    },
    number: 215,
  },
  {
    names: {
      en: "teddiursa",
    },
    number: 216,
  },
  {
    names: {
      en: "ursaring",
    },
    number: 217,
  },
  {
    names: {
      en: "slugma",
    },
    number: 218,
  },
  {
    names: {
      en: "magcargo",
    },
    number: 219,
  },
  {
    names: {
      en: "swinub",
    },
    number: 220,
  },
  {
    names: {
      en: "piloswine",
    },
    number: 221,
  },
  {
    names: {
      en: "corsola",
    },
    number: 222,
  },
  {
    names: {
      en: "remoraid",
    },
    number: 223,
  },
  {
    names: {
      en: "octillery",
    },
    number: 224,
  },
  {
    names: {
      en: "delibird",
    },
    number: 225,
  },
  {
    names: {
      en: "mantine",
    },
    number: 226,
  },
  {
    names: {
      en: "skarmory",
    },
    number: 227,
  },
  {
    names: {
      en: "houndour",
    },
    number: 228,
  },
  {
    names: {
      en: "houndoom",
    },
    number: 229,
  },
  {
    names: {
      en: "kingdra",
    },
    number: 230,
  },
  {
    names: {
      en: "phanpy",
    },
    number: 231,
  },
  {
    names: {
      en: "donphan",
    },
    number: 232,
  },
  {
    names: {
      en: "porygon2",
    },
    number: 233,
  },
  {
    names: {
      en: "stantler",
    },
    number: 234,
  },
  {
    names: {
      en: "smeargle",
    },
    number: 235,
  },
  {
    names: {
      en: "tyrogue",
    },
    number: 236,
  },
  {
    names: {
      en: "hitmontop",
    },
    number: 237,
  },
  {
    names: {
      en: "smoochum",
    },
    number: 238,
  },
  {
    names: {
      en: "elekid",
    },
    number: 239,
  },
  {
    names: {
      en: "magby",
    },
    number: 240,
  },
  {
    names: {
      en: "miltank",
    },
    number: 241,
  },
  {
    names: {
      en: "blissey",
    },
    number: 242,
  },
  {
    names: {
      en: "raikou",
    },
    number: 243,
  },
  {
    names: {
      en: "entei",
    },
    number: 244,
  },
  {
    names: {
      en: "suicune",
    },
    number: 245,
  },
  {
    names: {
      en: "larvitar",
    },
    number: 246,
  },
  {
    names: {
      en: "pupitar",
    },
    number: 247,
  },
  {
    names: {
      en: "tyranitar",
    },
    number: 248,
  },
  {
    names: {
      en: "lugia",
    },
    number: 249,
  },
  {
    names: {
      en: "ho-oh",
    },
    number: 250,
  },
  {
    names: {
      en: "celebi",
    },
    number: 251,
  },
  {
    names: {
      en: "treecko",
    },
    number: 252,
  },
  {
    names: {
      en: "grovyle",
    },
    number: 253,
  },
  {
    names: {
      en: "sceptile",
    },
    number: 254,
  },
  {
    names: {
      en: "torchic",
    },
    number: 255,
  },
  {
    names: {
      en: "combusken",
    },
    number: 256,
  },
  {
    names: {
      en: "blaziken",
    },
    number: 257,
  },
  {
    names: {
      en: "mudkip",
    },
    number: 258,
  },
  {
    names: {
      en: "marshtomp",
    },
    number: 259,
  },
  {
    names: {
      en: "swampert",
    },
    number: 260,
  },
  {
    names: {
      en: "poochyena",
    },
    number: 261,
  },
  {
    names: {
      en: "mightyena",
    },
    number: 262,
  },
  {
    names: {
      en: "zigzagoon",
    },
    number: 263,
  },
  {
    names: {
      en: "linoone",
    },
    number: 264,
  },
  {
    names: {
      en: "wurmple",
    },
    number: 265,
  },
  {
    names: {
      en: "silcoon",
    },
    number: 266,
  },
  {
    names: {
      en: "beautifly",
    },
    number: 267,
  },
  {
    names: {
      en: "cascoon",
    },
    number: 268,
  },
  {
    names: {
      en: "dustox",
    },
    number: 269,
  },
  {
    names: {
      en: "lotad",
    },
    number: 270,
  },
  {
    names: {
      en: "lombre",
    },
    number: 271,
  },
  {
    names: {
      en: "ludicolo",
    },
    number: 272,
  },
  {
    names: {
      en: "seedot",
    },
    number: 273,
  },
  {
    names: {
      en: "nuzleaf",
    },
    number: 274,
  },
  {
    names: {
      en: "shiftry",
    },
    number: 275,
  },
  {
    names: {
      en: "taillow",
    },
    number: 276,
  },
  {
    names: {
      en: "swellow",
    },
    number: 277,
  },
  {
    names: {
      en: "wingull",
    },
    number: 278,
  },
  {
    names: {
      en: "pelipper",
    },
    number: 279,
  },
  {
    names: {
      en: "ralts",
    },
    number: 280,
  },
  {
    names: {
      en: "kirlia",
    },
    number: 281,
  },
  {
    names: {
      en: "gardevoir",
    },
    number: 282,
  },
  {
    names: {
      en: "surskit",
    },
    number: 283,
  },
  {
    names: {
      en: "masquerain",
    },
    number: 284,
  },
  {
    names: {
      en: "shroomish",
    },
    number: 285,
  },
  {
    names: {
      en: "breloom",
    },
    number: 286,
  },
  {
    names: {
      en: "slakoth",
    },
    number: 287,
  },
  {
    names: {
      en: "vigoroth",
    },
    number: 288,
  },
  {
    names: {
      en: "slaking",
    },
    number: 289,
  },
  {
    names: {
      en: "nincada",
    },
    number: 290,
  },
  {
    names: {
      en: "ninjask",
    },
    number: 291,
  },
  {
    names: {
      en: "shedinja",
    },
    number: 292,
  },
  {
    names: {
      en: "whismur",
    },
    number: 293,
  },
  {
    names: {
      en: "loudred",
    },
    number: 294,
  },
  {
    names: {
      en: "exploud",
    },
    number: 295,
  },
  {
    names: {
      en: "makuhita",
    },
    number: 296,
  },
  {
    names: {
      en: "hariyama",
    },
    number: 297,
  },
  {
    names: {
      en: "azurill",
    },
    number: 298,
  },
  {
    names: {
      en: "nosepass",
    },
    number: 299,
  },
  {
    names: {
      en: "skitty",
    },
    number: 300,
  },
  {
    names: {
      en: "delcatty",
    },
    number: 301,
  },
  {
    names: {
      en: "sableye",
    },
    number: 302,
  },
  {
    names: {
      en: "mawile",
    },
    number: 303,
  },
  {
    names: {
      en: "aron",
    },
    number: 304,
  },
  {
    names: {
      en: "lairon",
    },
    number: 305,
  },
  {
    names: {
      en: "aggron",
    },
    number: 306,
  },
  {
    names: {
      en: "meditite",
    },
    number: 307,
  },
  {
    names: {
      en: "medicham",
    },
    number: 308,
  },
  {
    names: {
      en: "electrike",
    },
    number: 309,
  },
  {
    names: {
      en: "manectric",
    },
    number: 310,
  },
  {
    names: {
      en: "plusle",
    },
    number: 311,
  },
  {
    names: {
      en: "minun",
    },
    number: 312,
  },
  {
    names: {
      en: "volbeat",
    },
    number: 313,
  },
  {
    names: {
      en: "illumise",
    },
    number: 314,
  },
  {
    names: {
      en: "roselia",
    },
    number: 315,
  },
  {
    names: {
      en: "gulpin",
    },
    number: 316,
  },
  {
    names: {
      en: "swalot",
    },
    number: 317,
  },
  {
    names: {
      en: "carvanha",
    },
    number: 318,
  },
  {
    names: {
      en: "sharpedo",
    },
    number: 319,
  },
  {
    names: {
      en: "wailmer",
    },
    number: 320,
  },
  {
    names: {
      en: "wailord",
    },
    number: 321,
  },
  {
    names: {
      en: "numel",
    },
    number: 322,
  },
  {
    names: {
      en: "camerupt",
    },
    number: 323,
  },
  {
    names: {
      en: "torkoal",
    },
    number: 324,
  },
  {
    names: {
      en: "spoink",
    },
    number: 325,
  },
  {
    names: {
      en: "grumpig",
    },
    number: 326,
  },
  {
    names: {
      en: "spinda",
    },
    number: 327,
  },
  {
    names: {
      en: "trapinch",
    },
    number: 328,
  },
  {
    names: {
      en: "vibrava",
    },
    number: 329,
  },
  {
    names: {
      en: "flygon",
    },
    number: 330,
  },
  {
    names: {
      en: "cacnea",
    },
    number: 331,
  },
  {
    names: {
      en: "cacturne",
    },
    number: 332,
  },
  {
    names: {
      en: "swablu",
    },
    number: 333,
  },
  {
    names: {
      en: "altaria",
    },
    number: 334,
  },
  {
    names: {
      en: "zangoose",
    },
    number: 335,
  },
  {
    names: {
      en: "seviper",
    },
    number: 336,
  },
  {
    names: {
      en: "lunatone",
    },
    number: 337,
  },
  {
    names: {
      en: "solrock",
    },
    number: 338,
  },
  {
    names: {
      en: "barboach",
    },
    number: 339,
  },
  {
    names: {
      en: "whiscash",
    },
    number: 340,
  },
  {
    names: {
      en: "corphish",
    },
    number: 341,
  },
  {
    names: {
      en: "crawdaunt",
    },
    number: 342,
  },
  {
    names: {
      en: "baltoy",
    },
    number: 343,
  },
  {
    names: {
      en: "claydol",
    },
    number: 344,
  },
  {
    names: {
      en: "lileep",
    },
    number: 345,
  },
  {
    names: {
      en: "cradily",
    },
    number: 346,
  },
  {
    names: {
      en: "anorith",
    },
    number: 347,
  },
  {
    names: {
      en: "armaldo",
    },
    number: 348,
  },
  {
    names: {
      en: "feebas",
    },
    number: 349,
  },
  {
    names: {
      en: "milotic",
    },
    number: 350,
  },
  {
    names: {
      en: "castform",
    },
    number: 351,
  },
  {
    names: {
      en: "kecleon",
    },
    number: 352,
  },
  {
    names: {
      en: "shuppet",
    },
    number: 353,
  },
  {
    names: {
      en: "banette",
    },
    number: 354,
  },
  {
    names: {
      en: "duskull",
    },
    number: 355,
  },
  {
    names: {
      en: "dusclops",
    },
    number: 356,
  },
  {
    names: {
      en: "tropius",
    },
    number: 357,
  },
  {
    names: {
      en: "chimecho",
    },
    number: 358,
  },
  {
    names: {
      en: "absol",
    },
    number: 359,
  },
  {
    names: {
      en: "wynaut",
    },
    number: 360,
  },
  {
    names: {
      en: "snorunt",
    },
    number: 361,
  },
  {
    names: {
      en: "glalie",
    },
    number: 362,
  },
  {
    names: {
      en: "spheal",
    },
    number: 363,
  },
  {
    names: {
      en: "sealeo",
    },
    number: 364,
  },
  {
    names: {
      en: "walrein",
    },
    number: 365,
  },
  {
    names: {
      en: "clamperl",
    },
    number: 366,
  },
  {
    names: {
      en: "huntail",
    },
    number: 367,
  },
  {
    names: {
      en: "gorebyss",
    },
    number: 368,
  },
  {
    names: {
      en: "relicanth",
    },
    number: 369,
  },
  {
    names: {
      en: "luvdisc",
    },
    number: 370,
  },
  {
    names: {
      en: "bagon",
    },
    number: 371,
  },
  {
    names: {
      en: "shelgon",
    },
    number: 372,
  },
  {
    names: {
      en: "salamence",
    },
    number: 373,
  },
  {
    names: {
      en: "beldum",
    },
    number: 374,
  },
  {
    names: {
      en: "metang",
    },
    number: 375,
  },
  {
    names: {
      en: "metagross",
    },
    number: 376,
  },
  {
    names: {
      en: "regirock",
    },
    number: 377,
  },
  {
    names: {
      en: "regice",
    },
    number: 378,
  },
  {
    names: {
      en: "registeel",
    },
    number: 379,
  },
  {
    names: {
      en: "latias",
    },
    number: 380,
  },
  {
    names: {
      en: "latios",
    },
    number: 381,
  },
  {
    names: {
      en: "kyogre",
    },
    number: 382,
  },
  {
    names: {
      en: "groudon",
    },
    number: 383,
  },
  {
    names: {
      en: "rayquaza",
    },
    number: 384,
  },
  {
    names: {
      en: "jirachi",
    },
    number: 385,
  },
  {
    names: {
      en: "deoxys",
    },
    number: 386,
  },
  {
    names: {
      en: "turtwig",
    },
    number: 387,
  },
  {
    names: {
      en: "grotle",
    },
    number: 388,
  },
  {
    names: {
      en: "torterra",
    },
    number: 389,
  },
  {
    names: {
      en: "chimchar",
    },
    number: 390,
  },
  {
    names: {
      en: "monferno",
    },
    number: 391,
  },
  {
    names: {
      en: "infernape",
    },
    number: 392,
  },
  {
    names: {
      en: "piplup",
    },
    number: 393,
  },
  {
    names: {
      en: "prinplup",
    },
    number: 394,
  },
  {
    names: {
      en: "empoleon",
    },
    number: 395,
  },
  {
    names: {
      en: "starly",
    },
    number: 396,
  },
  {
    names: {
      en: "staravia",
    },
    number: 397,
  },
  {
    names: {
      en: "staraptor",
    },
    number: 398,
  },
  {
    names: {
      en: "bidoof",
    },
    number: 399,
  },
  {
    names: {
      en: "bibarel",
    },
    number: 400,
  },
  {
    names: {
      en: "kricketot",
    },
    number: 401,
  },
  {
    names: {
      en: "kricketune",
    },
    number: 402,
  },
  {
    names: {
      en: "shinx",
    },
    number: 403,
  },
  {
    names: {
      en: "luxio",
    },
    number: 404,
  },
  {
    names: {
      en: "luxray",
    },
    number: 405,
  },
  {
    names: {
      en: "budew",
    },
    number: 406,
  },
  {
    names: {
      en: "roserade",
    },
    number: 407,
  },
  {
    names: {
      en: "cranidos",
    },
    number: 408,
  },
  {
    names: {
      en: "rampardos",
    },
    number: 409,
  },
  {
    names: {
      en: "shieldon",
    },
    number: 410,
  },
  {
    names: {
      en: "bastiodon",
    },
    number: 411,
  },
  {
    names: {
      en: "burmy",
    },
    number: 412,
  },
  {
    names: {
      en: "wormadam",
    },
    number: 413,
  },
  {
    names: {
      en: "mothim",
    },
    number: 414,
  },
  {
    names: {
      en: "combee",
    },
    number: 415,
  },
  {
    names: {
      en: "vespiquen",
    },
    number: 416,
  },
  {
    names: {
      en: "pachirisu",
    },
    number: 417,
  },
  {
    names: {
      en: "buizel",
    },
    number: 418,
  },
  {
    names: {
      en: "floatzel",
    },
    number: 419,
  },
  {
    names: {
      en: "cherubi",
    },
    number: 420,
  },
  {
    names: {
      en: "cherrim",
    },
    number: 421,
  },
  {
    names: {
      en: "shellos",
    },
    number: 422,
  },
  {
    names: {
      en: "gastrodon",
    },
    number: 423,
  },
  {
    names: {
      en: "ambipom",
    },
    number: 424,
  },
  {
    names: {
      en: "drifloon",
    },
    number: 425,
  },
  {
    names: {
      en: "drifblim",
    },
    number: 426,
  },
  {
    names: {
      en: "buneary",
    },
    number: 427,
  },
  {
    names: {
      en: "lopunny",
    },
    number: 428,
  },
  {
    names: {
      en: "mismagius",
    },
    number: 429,
  },
  {
    names: {
      en: "honchkrow",
    },
    number: 430,
  },
  {
    names: {
      en: "glameow",
    },
    number: 431,
  },
  {
    names: {
      en: "purugly",
    },
    number: 432,
  },
  {
    names: {
      en: "chingling",
    },
    number: 433,
  },
  {
    names: {
      en: "stunky",
    },
    number: 434,
  },
  {
    names: {
      en: "skuntank",
    },
    number: 435,
  },
  {
    names: {
      en: "bronzor",
    },
    number: 436,
  },
  {
    names: {
      en: "bronzong",
    },
    number: 437,
  },
  {
    names: {
      en: "bonsly",
    },
    number: 438,
  },
  {
    names: {
      en: "mime jr.",
    },
    number: 439,
  },
  {
    names: {
      en: "happiny",
    },
    number: 440,
  },
  {
    names: {
      en: "chatot",
    },
    number: 441,
  },
  {
    names: {
      en: "spiritomb",
    },
    number: 442,
  },
  {
    names: {
      en: "gible",
    },
    number: 443,
  },
  {
    names: {
      en: "gabite",
    },
    number: 444,
  },
  {
    names: {
      en: "garchomp",
    },
    number: 445,
  },
  {
    names: {
      en: "munchlax",
    },
    number: 446,
  },
  {
    names: {
      en: "riolu",
    },
    number: 447,
  },
  {
    names: {
      en: "lucario",
    },
    number: 448,
  },
  {
    names: {
      en: "hippopotas",
    },
    number: 449,
  },
  {
    names: {
      en: "hippowdon",
    },
    number: 450,
  },
  {
    names: {
      en: "skorupi",
    },
    number: 451,
  },
  {
    names: {
      en: "drapion",
    },
    number: 452,
  },
  {
    names: {
      en: "croagunk",
    },
    number: 453,
  },
  {
    names: {
      en: "toxicroak",
    },
    number: 454,
  },
  {
    names: {
      en: "carnivine",
    },
    number: 455,
  },
  {
    names: {
      en: "finneon",
    },
    number: 456,
  },
  {
    names: {
      en: "lumineon",
    },
    number: 457,
  },
  {
    names: {
      en: "mantyke",
    },
    number: 458,
  },
  {
    names: {
      en: "snover",
    },
    number: 459,
  },
  {
    names: {
      en: "abomasnow",
    },
    number: 460,
  },
  {
    names: {
      en: "weavile",
    },
    number: 461,
  },
  {
    names: {
      en: "magnezone",
    },
    number: 462,
  },
  {
    names: {
      en: "lickilicky",
    },
    number: 463,
  },
  {
    names: {
      en: "rhyperior",
    },
    number: 464,
  },
  {
    names: {
      en: "tangrowth",
    },
    number: 465,
  },
  {
    names: {
      en: "electivire",
    },
    number: 466,
  },
  {
    names: {
      en: "magmortar",
    },
    number: 467,
  },
  {
    names: {
      en: "togekiss",
    },
    number: 468,
  },
  {
    names: {
      en: "yanmega",
    },
    number: 469,
  },
  {
    names: {
      en: "leafeon",
    },
    number: 470,
  },
  {
    names: {
      en: "glaceon",
    },
    number: 471,
  },
  {
    names: {
      en: "gliscor",
    },
    number: 472,
  },
  {
    names: {
      en: "mamoswine",
    },
    number: 473,
  },
  {
    names: {
      en: "porygon-z",
    },
    number: 474,
  },
  {
    names: {
      en: "gallade",
    },
    number: 475,
  },
  {
    names: {
      en: "probopass",
    },
    number: 476,
  },
  {
    names: {
      en: "dusknoir",
    },
    number: 477,
  },
  {
    names: {
      en: "froslass",
    },
    number: 478,
  },
  {
    names: {
      en: "rotom",
    },
    number: 479,
  },
  {
    names: {
      en: "uxie",
    },
    number: 480,
  },
  {
    names: {
      en: "mesprit",
    },
    number: 481,
  },
  {
    names: {
      en: "azelf",
    },
    number: 482,
  },
  {
    names: {
      en: "dialga",
    },
    number: 483,
  },
  {
    names: {
      en: "palkia",
    },
    number: 484,
  },
  {
    names: {
      en: "heatran",
    },
    number: 485,
  },
  {
    names: {
      en: "regigigas",
    },
    number: 486,
  },
  {
    names: {
      en: "giratina",
    },
    number: 487,
  },
  {
    names: {
      en: "cresselia",
    },
    number: 488,
  },
  {
    names: {
      en: "phione",
    },
    number: 489,
  },
  {
    names: {
      en: "manaphy",
    },
    number: 490,
  },
  {
    names: {
      en: "darkrai",
    },
    number: 491,
  },
  {
    names: {
      en: "shaymin",
    },
    number: 492,
  },
  {
    names: {
      en: "arceus",
    },
    number: 493,
  },
  {
    names: {
      en: "victini",
    },
    number: 494,
  },
  {
    names: {
      en: "snivy",
    },
    number: 495,
  },
  {
    names: {
      en: "servine",
    },
    number: 496,
  },
  {
    names: {
      en: "serperior",
    },
    number: 497,
  },
  {
    names: {
      en: "tepig",
    },
    number: 498,
  },
  {
    names: {
      en: "pignite",
    },
    number: 499,
  },
  {
    names: {
      en: "emboar",
    },
    number: 500,
  },
  {
    names: {
      en: "oshawott",
    },
    number: 501,
  },
  {
    names: {
      en: "dewott",
    },
    number: 502,
  },
  {
    names: {
      en: "samurott",
    },
    number: 503,
  },
  {
    names: {
      en: "patrat",
    },
    number: 504,
  },
  {
    names: {
      en: "watchog",
    },
    number: 505,
  },
  {
    names: {
      en: "lillipup",
    },
    number: 506,
  },
  {
    names: {
      en: "herdier",
    },
    number: 507,
  },
  {
    names: {
      en: "stoutland",
    },
    number: 508,
  },
  {
    names: {
      en: "purrloin",
    },
    number: 509,
  },
  {
    names: {
      en: "liepard",
    },
    number: 510,
  },
  {
    names: {
      en: "pansage",
    },
    number: 511,
  },
  {
    names: {
      en: "simisage",
    },
    number: 512,
  },
  {
    names: {
      en: "pansear",
    },
    number: 513,
  },
  {
    names: {
      en: "simisear",
    },
    number: 514,
  },
  {
    names: {
      en: "panpour",
    },
    number: 515,
  },
  {
    names: {
      en: "simipour",
    },
    number: 516,
  },
  {
    names: {
      en: "munna",
    },
    number: 517,
  },
  {
    names: {
      en: "musharna",
    },
    number: 518,
  },
  {
    names: {
      en: "pidove",
    },
    number: 519,
  },
  {
    names: {
      en: "tranquill",
    },
    number: 520,
  },
  {
    names: {
      en: "unfezant",
    },
    number: 521,
  },
  {
    names: {
      en: "blitzle",
    },
    number: 522,
  },
  {
    names: {
      en: "zebstrika",
    },
    number: 523,
  },
  {
    names: {
      en: "roggenrola",
    },
    number: 524,
  },
  {
    names: {
      en: "boldore",
    },
    number: 525,
  },
  {
    names: {
      en: "gigalith",
    },
    number: 526,
  },
  {
    names: {
      en: "woobat",
    },
    number: 527,
  },
  {
    names: {
      en: "swoobat",
    },
    number: 528,
  },
  {
    names: {
      en: "drilbur",
    },
    number: 529,
  },
  {
    names: {
      en: "excadrill",
    },
    number: 530,
  },
  {
    names: {
      en: "audino",
    },
    number: 531,
  },
  {
    names: {
      en: "timburr",
    },
    number: 532,
  },
  {
    names: {
      en: "gurdurr",
    },
    number: 533,
  },
  {
    names: {
      en: "conkeldurr",
    },
    number: 534,
  },
  {
    names: {
      en: "tympole",
    },
    number: 535,
  },
  {
    names: {
      en: "palpitoad",
    },
    number: 536,
  },
  {
    names: {
      en: "seismitoad",
    },
    number: 537,
  },
  {
    names: {
      en: "throh",
    },
    number: 538,
  },
  {
    names: {
      en: "sawk",
    },
    number: 539,
  },
  {
    names: {
      en: "sewaddle",
    },
    number: 540,
  },
  {
    names: {
      en: "swadloon",
    },
    number: 541,
  },
  {
    names: {
      en: "leavanny",
    },
    number: 542,
  },
  {
    names: {
      en: "venipede",
    },
    number: 543,
  },
  {
    names: {
      en: "whirlipede",
    },
    number: 544,
  },
  {
    names: {
      en: "scolipede",
    },
    number: 545,
  },
  {
    names: {
      en: "cottonee",
    },
    number: 546,
  },
  {
    names: {
      en: "whimsicott",
    },
    number: 547,
  },
  {
    names: {
      en: "petilil",
    },
    number: 548,
  },
  {
    names: {
      en: "lilligant",
    },
    number: 549,
  },
  {
    names: {
      en: "basculin",
    },
    number: 550,
  },
  {
    names: {
      en: "sandile",
    },
    number: 551,
  },
  {
    names: {
      en: "krokorok",
    },
    number: 552,
  },
  {
    names: {
      en: "krookodile",
    },
    number: 553,
  },
  {
    names: {
      en: "darumaka",
    },
    number: 554,
  },
  {
    names: {
      en: "darmanitan",
    },
    number: 555,
  },
  {
    names: {
      en: "maractus",
    },
    number: 556,
  },
  {
    names: {
      en: "dwebble",
    },
    number: 557,
  },
  {
    names: {
      en: "crustle",
    },
    number: 558,
  },
  {
    names: {
      en: "scraggy",
    },
    number: 559,
  },
  {
    names: {
      en: "scrafty",
    },
    number: 560,
  },
  {
    names: {
      en: "sigilyph",
    },
    number: 561,
  },
  {
    names: {
      en: "yamask",
    },
    number: 562,
  },
  {
    names: {
      en: "cofagrigus",
    },
    number: 563,
  },
  {
    names: {
      en: "tirtouga",
    },
    number: 564,
  },
  {
    names: {
      en: "carracosta",
    },
    number: 565,
  },
  {
    names: {
      en: "archen",
    },
    number: 566,
  },
  {
    names: {
      en: "archeops",
    },
    number: 567,
  },
  {
    names: {
      en: "trubbish",
    },
    number: 568,
  },
  {
    names: {
      en: "garbodor",
    },
    number: 569,
  },
  {
    names: {
      en: "zorua",
    },
    number: 570,
  },
  {
    names: {
      en: "zoroark",
    },
    number: 571,
  },
  {
    names: {
      en: "minccino",
    },
    number: 572,
  },
  {
    names: {
      en: "cinccino",
    },
    number: 573,
  },
  {
    names: {
      en: "gothita",
    },
    number: 574,
  },
  {
    names: {
      en: "gothorita",
    },
    number: 575,
  },
  {
    names: {
      en: "gothitelle",
    },
    number: 576,
  },
  {
    names: {
      en: "solosis",
    },
    number: 577,
  },
  {
    names: {
      en: "duosion",
    },
    number: 578,
  },
  {
    names: {
      en: "reuniclus",
    },
    number: 579,
  },
  {
    names: {
      en: "ducklett",
    },
    number: 580,
  },
  {
    names: {
      en: "swanna",
    },
    number: 581,
  },
  {
    names: {
      en: "vanillite",
    },
    number: 582,
  },
  {
    names: {
      en: "vanillish",
    },
    number: 583,
  },
  {
    names: {
      en: "vanilluxe",
    },
    number: 584,
  },
  {
    names: {
      en: "deerling",
    },
    number: 585,
  },
  {
    names: {
      en: "sawsbuck",
    },
    number: 586,
  },
  {
    names: {
      en: "emolga",
    },
    number: 587,
  },
  {
    names: {
      en: "karrablast",
    },
    number: 588,
  },
  {
    names: {
      en: "escavalier",
    },
    number: 589,
  },
  {
    names: {
      en: "foongus",
    },
    number: 590,
  },
  {
    names: {
      en: "amoonguss",
    },
    number: 591,
  },
  {
    names: {
      en: "frillish",
    },
    number: 592,
  },
  {
    names: {
      en: "jellicent",
    },
    number: 593,
  },
  {
    names: {
      en: "alomomola",
    },
    number: 594,
  },
  {
    names: {
      en: "joltik",
    },
    number: 595,
  },
  {
    names: {
      en: "galvantula",
    },
    number: 596,
  },
  {
    names: {
      en: "ferroseed",
    },
    number: 597,
  },
  {
    names: {
      en: "ferrothorn",
    },
    number: 598,
  },
  {
    names: {
      en: "klink",
    },
    number: 599,
  },
  {
    names: {
      en: "klang",
    },
    number: 600,
  },
  {
    names: {
      en: "klinklang",
    },
    number: 601,
  },
  {
    names: {
      en: "tynamo",
    },
    number: 602,
  },
  {
    names: {
      en: "eelektrik",
    },
    number: 603,
  },
  {
    names: {
      en: "eelektross",
    },
    number: 604,
  },
  {
    names: {
      en: "elgyem",
    },
    number: 605,
  },
  {
    names: {
      en: "beheeyem",
    },
    number: 606,
  },
  {
    names: {
      en: "litwick",
    },
    number: 607,
  },
  {
    names: {
      en: "lampent",
    },
    number: 608,
  },
  {
    names: {
      en: "chandelure",
    },
    number: 609,
  },
  {
    names: {
      en: "axew",
    },
    number: 610,
  },
  {
    names: {
      en: "fraxure",
    },
    number: 611,
  },
  {
    names: {
      en: "haxorus",
    },
    number: 612,
  },
  {
    names: {
      en: "cubchoo",
    },
    number: 613,
  },
  {
    names: {
      en: "beartic",
    },
    number: 614,
  },
  {
    names: {
      en: "cryogonal",
    },
    number: 615,
  },
  {
    names: {
      en: "shelmet",
    },
    number: 616,
  },
  {
    names: {
      en: "accelgor",
    },
    number: 617,
  },
  {
    names: {
      en: "stunfisk",
    },
    number: 618,
  },
  {
    names: {
      en: "mienfoo",
    },
    number: 619,
  },
  {
    names: {
      en: "mienshao",
    },
    number: 620,
  },
  {
    names: {
      en: "druddigon",
    },
    number: 621,
  },
  {
    names: {
      en: "golett",
    },
    number: 622,
  },
  {
    names: {
      en: "golurk",
    },
    number: 623,
  },
  {
    names: {
      en: "pawniard",
    },
    number: 624,
  },
  {
    names: {
      en: "bisharp",
    },
    number: 625,
  },
  {
    names: {
      en: "bouffalant",
    },
    number: 626,
  },
  {
    names: {
      en: "rufflet",
    },
    number: 627,
  },
  {
    names: {
      en: "braviary",
    },
    number: 628,
  },
  {
    names: {
      en: "vullaby",
    },
    number: 629,
  },
  {
    names: {
      en: "mandibuzz",
    },
    number: 630,
  },
  {
    names: {
      en: "heatmor",
    },
    number: 631,
  },
  {
    names: {
      en: "durant",
    },
    number: 632,
  },
  {
    names: {
      en: "deino",
    },
    number: 633,
  },
  {
    names: {
      en: "zweilous",
    },
    number: 634,
  },
  {
    names: {
      en: "hydreigon",
    },
    number: 635,
  },
  {
    names: {
      en: "larvesta",
    },
    number: 636,
  },
  {
    names: {
      en: "volcarona",
    },
    number: 637,
  },
  {
    names: {
      en: "cobalion",
    },
    number: 638,
  },
  {
    names: {
      en: "terrakion",
    },
    number: 639,
  },
  {
    names: {
      en: "virizion",
    },
    number: 640,
  },
  {
    names: {
      en: "tornadus",
    },
    number: 641,
  },
  {
    names: {
      en: "thundurus",
    },
    number: 642,
  },
  {
    names: {
      en: "reshiram",
    },
    number: 643,
  },
  {
    names: {
      en: "zekrom",
    },
    number: 644,
  },
  {
    names: {
      en: "landorus",
    },
    number: 645,
  },
  {
    names: {
      en: "kyurem",
    },
    number: 646,
  },
  {
    names: {
      en: "keldeo",
    },
    number: 647,
  },
  {
    names: {
      en: "meloetta",
    },
    number: 648,
  },
  {
    names: {
      en: "genesect",
    },
    number: 649,
  },
  {
    names: {
      en: "chespin",
    },
    number: 650,
  },
  {
    names: {
      en: "quilladin",
    },
    number: 651,
  },
  {
    names: {
      en: "chesnaught",
    },
    number: 652,
  },
  {
    names: {
      en: "fennekin",
    },
    number: 653,
  },
  {
    names: {
      en: "braixen",
    },
    number: 654,
  },
  {
    names: {
      en: "delphox",
    },
    number: 655,
  },
  {
    names: {
      en: "froakie",
    },
    number: 656,
  },
  {
    names: {
      en: "frogadier",
    },
    number: 657,
  },
  {
    names: {
      en: "greninja",
    },
    number: 658,
  },
  {
    names: {
      en: "bunnelby",
    },
    number: 659,
  },
  {
    names: {
      en: "diggersby",
    },
    number: 660,
  },
  {
    names: {
      en: "fletchling",
    },
    number: 661,
  },
  {
    names: {
      en: "fletchinder",
    },
    number: 662,
  },
  {
    names: {
      en: "talonflame",
    },
    number: 663,
  },
  {
    names: {
      en: "scatterbug",
    },
    number: 664,
  },
  {
    names: {
      en: "spewpa",
    },
    number: 665,
  },
  {
    names: {
      en: "vivillon",
    },
    number: 666,
  },
  {
    names: {
      en: "litleo",
    },
    number: 667,
  },
  {
    names: {
      en: "pyroar",
    },
    number: 668,
  },
  {
    names: {
      en: "flabébé",
    },
    number: 669,
  },
  {
    names: {
      en: "floette",
    },
    number: 670,
  },
  {
    names: {
      en: "florges",
    },
    number: 671,
  },
  {
    names: {
      en: "skiddo",
    },
    number: 672,
  },
  {
    names: {
      en: "gogoat",
    },
    number: 673,
  },
  {
    names: {
      en: "pancham",
    },
    number: 674,
  },
  {
    names: {
      en: "pangoro",
    },
    number: 675,
  },
  {
    names: {
      en: "furfrou",
    },
    number: 676,
  },
  {
    names: {
      en: "espurr",
    },
    number: 677,
  },
  {
    names: {
      en: "meowstic",
    },
    number: 678,
  },
  {
    names: {
      en: "honedge",
    },
    number: 679,
  },
  {
    names: {
      en: "doublade",
    },
    number: 680,
  },
  {
    names: {
      en: "aegislash",
    },
    number: 681,
  },
  {
    names: {
      en: "spritzee",
    },
    number: 682,
  },
  {
    names: {
      en: "aromatisse",
    },
    number: 683,
  },
  {
    names: {
      en: "swirlix",
    },
    number: 684,
  },
  {
    names: {
      en: "slurpuff",
    },
    number: 685,
  },
  {
    names: {
      en: "inkay",
    },
    number: 686,
  },
  {
    names: {
      en: "malamar",
    },
    number: 687,
  },
  {
    names: {
      en: "binacle",
    },
    number: 688,
  },
  {
    names: {
      en: "barbaracle",
    },
    number: 689,
  },
  {
    names: {
      en: "skrelp",
    },
    number: 690,
  },
  {
    names: {
      en: "dragalge",
    },
    number: 691,
  },
  {
    names: {
      en: "clauncher",
    },
    number: 692,
  },
  {
    names: {
      en: "clawitzer",
    },
    number: 693,
  },
  {
    names: {
      en: "helioptile",
    },
    number: 694,
  },
  {
    names: {
      en: "heliolisk",
    },
    number: 695,
  },
  {
    names: {
      en: "tyrunt",
    },
    number: 696,
  },
  {
    names: {
      en: "tyrantrum",
    },
    number: 697,
  },
  {
    names: {
      en: "amaura",
    },
    number: 698,
  },
  {
    names: {
      en: "aurorus",
    },
    number: 699,
  },
  {
    names: {
      en: "sylveon",
    },
    number: 700,
  },
  {
    names: {
      en: "hawlucha",
    },
    number: 701,
  },
  {
    names: {
      en: "dedenne",
    },
    number: 702,
  },
  {
    names: {
      en: "carbink",
    },
    number: 703,
  },
  {
    names: {
      en: "goomy",
    },
    number: 704,
  },
  {
    names: {
      en: "sliggoo",
    },
    number: 705,
  },
  {
    names: {
      en: "goodra",
    },
    number: 706,
  },
  {
    names: {
      en: "klefki",
    },
    number: 707,
  },
  {
    names: {
      en: "phantump",
    },
    number: 708,
  },
  {
    names: {
      en: "trevenant",
    },
    number: 709,
  },
  {
    names: {
      en: "pumpkaboo",
    },
    number: 710,
  },
  {
    names: {
      en: "gourgeist",
    },
    number: 711,
  },
  {
    names: {
      en: "bergmite",
    },
    number: 712,
  },
  {
    names: {
      en: "avalugg",
    },
    number: 713,
  },
  {
    names: {
      en: "noibat",
    },
    number: 714,
  },
  {
    names: {
      en: "noivern",
    },
    number: 715,
  },
  {
    names: {
      en: "xerneas",
    },
    number: 716,
  },
  {
    names: {
      en: "yveltal",
    },
    number: 717,
  },
  {
    names: {
      en: "zygarde",
    },
    number: 718,
  },
  {
    names: {
      en: "diancie",
    },
    number: 719,
  },
  {
    names: {
      en: "hoopa",
    },
    number: 720,
  },
  {
    names: {
      en: "volcanion",
    },
    number: 721,
  },
  {
    names: {
      en: "rowlet",
    },
    number: 722,
  },
  {
    names: {
      en: "dartrix",
    },
    number: 723,
  },
  {
    names: {
      en: "decidueye",
    },
    number: 724,
  },
  {
    names: {
      en: "litten",
    },
    number: 725,
  },
  {
    names: {
      en: "torracat",
    },
    number: 726,
  },
  {
    names: {
      en: "incineroar",
    },
    number: 727,
  },
  {
    names: {
      en: "popplio",
    },
    number: 728,
  },
  {
    names: {
      en: "brionne",
    },
    number: 729,
  },
  {
    names: {
      en: "primarina",
    },
    number: 730,
  },
  {
    names: {
      en: "pikipek",
    },
    number: 731,
  },
  {
    names: {
      en: "trumbeak",
    },
    number: 732,
  },
  {
    names: {
      en: "toucannon",
    },
    number: 733,
  },
  {
    names: {
      en: "yungoos",
    },
    number: 734,
  },
  {
    names: {
      en: "gumshoos",
    },
    number: 735,
  },
  {
    names: {
      en: "grubbin",
    },
    number: 736,
  },
  {
    names: {
      en: "charjabug",
    },
    number: 737,
  },
  {
    names: {
      en: "vikavolt",
    },
    number: 738,
  },
  {
    names: {
      en: "crabrawler",
    },
    number: 739,
  },
  {
    names: {
      en: "crabominable",
    },
    number: 740,
  },
  {
    names: {
      en: "oricorio",
    },
    number: 741,
  },
  {
    names: {
      en: "cutiefly",
    },
    number: 742,
  },
  {
    names: {
      en: "ribombee",
    },
    number: 743,
  },
  {
    names: {
      en: "rockruff",
    },
    number: 744,
  },
  {
    names: {
      en: "lycanroc",
    },
    number: 745,
  },
  {
    names: {
      en: "wishiwashi",
    },
    number: 746,
  },
  {
    names: {
      en: "mareanie",
    },
    number: 747,
  },
  {
    names: {
      en: "toxapex",
    },
    number: 748,
  },
  {
    names: {
      en: "mudbray",
    },
    number: 749,
  },
  {
    names: {
      en: "mudsdale",
    },
    number: 750,
  },
  {
    names: {
      en: "dewpider",
    },
    number: 751,
  },
  {
    names: {
      en: "araquanid",
    },
    number: 752,
  },
  {
    names: {
      en: "fomantis",
    },
    number: 753,
  },
  {
    names: {
      en: "lurantis",
    },
    number: 754,
  },
  {
    names: {
      en: "morelull",
    },
    number: 755,
  },
  {
    names: {
      en: "shiinotic",
    },
    number: 756,
  },
  {
    names: {
      en: "salandit",
    },
    number: 757,
  },
  {
    names: {
      en: "salazzle",
    },
    number: 758,
  },
  {
    names: {
      en: "stufful",
    },
    number: 759,
  },
  {
    names: {
      en: "bewear",
    },
    number: 760,
  },
  {
    names: {
      en: "bounsweet",
    },
    number: 761,
  },
  {
    names: {
      en: "steenee",
    },
    number: 762,
  },
  {
    names: {
      en: "tsareena",
    },
    number: 763,
  },
  {
    names: {
      en: "comfey",
    },
    number: 764,
  },
  {
    names: {
      en: "oranguru",
    },
    number: 765,
  },
  {
    names: {
      en: "passimian",
    },
    number: 766,
  },
  {
    names: {
      en: "wimpod",
    },
    number: 767,
  },
  {
    names: {
      en: "golisopod",
    },
    number: 768,
  },
  {
    names: {
      en: "sandygast",
    },
    number: 769,
  },
  {
    names: {
      en: "palossand",
    },
    number: 770,
  },
  {
    names: {
      en: "pyukumuku",
    },
    number: 771,
  },
  {
    names: {
      en: "type: null",
    },
    number: 772,
  },
  {
    names: {
      en: "silvally",
    },
    number: 773,
  },
  {
    names: {
      en: "minior",
    },
    number: 774,
  },
  {
    names: {
      en: "komala",
    },
    number: 775,
  },
  {
    names: {
      en: "turtonator",
    },
    number: 776,
  },
  {
    names: {
      en: "togedemaru",
    },
    number: 777,
  },
  {
    names: {
      en: "mimikyu",
    },
    number: 778,
  },
  {
    names: {
      en: "bruxish",
    },
    number: 779,
  },
  {
    names: {
      en: "drampa",
    },
    number: 780,
  },
  {
    names: {
      en: "dhelmise",
    },
    number: 781,
  },
  {
    names: {
      en: "jangmo-o",
    },
    number: 782,
  },
  {
    names: {
      en: "hakamo-o",
    },
    number: 783,
  },
  {
    names: {
      en: "kommo-o",
    },
    number: 784,
  },
  {
    names: {
      en: "tapu koko",
    },
    number: 785,
  },
  {
    names: {
      en: "tapu lele",
    },
    number: 786,
  },
  {
    names: {
      en: "tapu bulu",
    },
    number: 787,
  },
  {
    names: {
      en: "tapu fini",
    },
    number: 788,
  },
  {
    names: {
      en: "cosmog",
    },
    number: 789,
  },
  {
    names: {
      en: "cosmoem",
    },
    number: 790,
  },
  {
    names: {
      en: "solgaleo",
    },
    number: 791,
  },
  {
    names: {
      en: "lunala",
    },
    number: 792,
  },
  {
    names: {
      en: "nihilego",
    },
    number: 793,
  },
  {
    names: {
      en: "buzzwole",
    },
    number: 794,
  },
  {
    names: {
      en: "pheromosa",
    },
    number: 795,
  },
  {
    names: {
      en: "xurkitree",
    },
    number: 796,
  },
  {
    names: {
      en: "celesteela",
    },
    number: 797,
  },
  {
    names: {
      en: "kartana",
    },
    number: 798,
  },
  {
    names: {
      en: "guzzlord",
    },
    number: 799,
  },
  {
    names: {
      en: "necrozma",
    },
    number: 800,
  },
  {
    names: {
      en: "magearna",
    },
    number: 801,
  },
  {
    names: {
      en: "marshadow",
    },
    number: 802,
  },
  {
    names: {
      en: "poipole",
    },
    number: 803,
  },
  {
    names: {
      en: "naganadel",
    },
    number: 804,
  },
  {
    names: {
      en: "stakataka",
    },
    number: 805,
  },
  {
    names: {
      en: "blacephalon",
    },
    number: 806,
  },
  {
    names: {
      en: "zeraora",
    },
    number: 807,
  },
  {
    names: {
      en: "meltan",
    },
    number: 808,
  },
  {
    names: {
      en: "melmetal",
    },
    number: 809,
  },
  {
    names: {
      en: "grookey",
    },
    number: 810,
  },
  {
    names: {
      en: "thwackey",
    },
    number: 811,
  },
  {
    names: {
      en: "rillaboom",
    },
    number: 812,
  },
  {
    names: {
      en: "scorbunny",
    },
    number: 813,
  },
  {
    names: {
      en: "raboot",
    },
    number: 814,
  },
  {
    names: {
      en: "cinderace",
    },
    number: 815,
  },
  {
    names: {
      en: "sobble",
    },
    number: 816,
  },
  {
    names: {
      en: "drizzile",
    },
    number: 817,
  },
  {
    names: {
      en: "inteleon",
    },
    number: 818,
  },
  {
    names: {
      en: "skwovet",
    },
    number: 819,
  },
  {
    names: {
      en: "greedent",
    },
    number: 820,
  },
  {
    names: {
      en: "rookidee",
    },
    number: 821,
  },
  {
    names: {
      en: "corvisquire",
    },
    number: 822,
  },
  {
    names: {
      en: "corviknight",
    },
    number: 823,
  },
  {
    names: {
      en: "blipbug",
    },
    number: 824,
  },
  {
    names: {
      en: "dottler",
    },
    number: 825,
  },
  {
    names: {
      en: "orbeetle",
    },
    number: 826,
  },
  {
    names: {
      en: "nickit",
    },
    number: 827,
  },
  {
    names: {
      en: "thievul",
    },
    number: 828,
  },
  {
    names: {
      en: "gossifleur",
    },
    number: 829,
  },
  {
    names: {
      en: "eldegoss",
    },
    number: 830,
  },
  {
    names: {
      en: "wooloo",
    },
    number: 831,
  },
  {
    names: {
      en: "dubwool",
    },
    number: 832,
  },
  {
    names: {
      en: "chewtle",
    },
    number: 833,
  },
  {
    names: {
      en: "drednaw",
    },
    number: 834,
  },
  {
    names: {
      en: "yamper",
    },
    number: 835,
  },
  {
    names: {
      en: "boltund",
    },
    number: 836,
  },
  {
    names: {
      en: "rolycoly",
    },
    number: 837,
  },
  {
    names: {
      en: "carkol",
    },
    number: 838,
  },
  {
    names: {
      en: "coalossal",
    },
    number: 839,
  },
  {
    names: {
      en: "applin",
    },
    number: 840,
  },
  {
    names: {
      en: "flapple",
    },
    number: 841,
  },
  {
    names: {
      en: "appletun",
    },
    number: 842,
  },
  {
    names: {
      en: "silicobra",
    },
    number: 843,
  },
  {
    names: {
      en: "sandaconda",
    },
    number: 844,
  },
  {
    names: {
      en: "cramorant",
    },
    number: 845,
  },
  {
    names: {
      en: "arrokuda",
    },
    number: 846,
  },
  {
    names: {
      en: "barraskewda",
    },
    number: 847,
  },
  {
    names: {
      en: "toxel",
    },
    number: 848,
  },
  {
    names: {
      en: "toxtricity",
    },
    number: 849,
  },
  {
    names: {
      en: "sizzlipede",
    },
    number: 850,
  },
  {
    names: {
      en: "centiskorch",
    },
    number: 851,
  },
  {
    names: {
      en: "clobbopus",
    },
    number: 852,
  },
  {
    names: {
      en: "grapploct",
    },
    number: 853,
  },
  {
    names: {
      en: "sinistea",
    },
    number: 854,
  },
  {
    names: {
      en: "polteageist",
    },
    number: 855,
  },
  {
    names: {
      en: "hatenna",
    },
    number: 856,
  },
  {
    names: {
      en: "hattrem",
    },
    number: 857,
  },
  {
    names: {
      en: "hatterene",
    },
    number: 858,
  },
  {
    names: {
      en: "impidimp",
    },
    number: 859,
  },
  {
    names: {
      en: "morgrem",
    },
    number: 860,
  },
  {
    names: {
      en: "grimmsnarl",
    },
    number: 861,
  },
  {
    names: {
      en: "obstagoon",
    },
    number: 862,
  },
  {
    names: {
      en: "perrserker",
    },
    number: 863,
  },
  {
    names: {
      en: "cursola",
    },
    number: 864,
  },
  {
    names: {
      en: "sirfetch'd",
    },
    number: 865,
  },
  {
    names: {
      en: "mr. rime",
    },
    number: 866,
  },
  {
    names: {
      en: "runerigus",
    },
    number: 867,
  },
  {
    names: {
      en: "milcery",
    },
    number: 868,
  },
  {
    names: {
      en: "alcremie",
    },
    number: 869,
  },
  {
    names: {
      en: "falinks",
    },
    number: 870,
  },
  {
    names: {
      en: "pincurchin",
    },
    number: 871,
  },
  {
    names: {
      en: "snom",
    },
    number: 872,
  },
  {
    names: {
      en: "frosmoth",
    },
    number: 873,
  },
  {
    names: {
      en: "stonjourner",
    },
    number: 874,
  },
  {
    names: {
      en: "eiscue",
    },
    number: 875,
  },
  {
    names: {
      en: "indeedee",
    },
    number: 876,
  },
  {
    names: {
      en: "morpeko",
    },
    number: 877,
  },
  {
    names: {
      en: "cufant",
    },
    number: 878,
  },
  {
    names: {
      en: "copperajah",
    },
    number: 879,
  },
  {
    names: {
      en: "dracozolt",
    },
    number: 880,
  },
  {
    names: {
      en: "arctozolt",
    },
    number: 881,
  },
  {
    names: {
      en: "dracovish",
    },
    number: 882,
  },
  {
    names: {
      en: "arctovish",
    },
    number: 883,
  },
  {
    names: {
      en: "duraludon",
    },
    number: 884,
  },
  {
    names: {
      en: "dreepy",
    },
    number: 885,
  },
  {
    names: {
      en: "drakloak",
    },
    number: 886,
  },
  {
    names: {
      en: "dragapult",
    },
    number: 887,
  },
  {
    names: {
      en: "zacian",
    },
    number: 888,
  },
  {
    names: {
      en: "zamazenta",
    },
    number: 889,
  },
  {
    names: {
      en: "eternatus",
    },
    number: 890,
  },
  {
    names: {
      en: "kubfu",
    },
    number: 891,
  },
  {
    names: {
      en: "urshifu",
    },
    number: 892,
  },
  {
    names: {
      en: "zarude",
    },
    number: 893,
  },
  {
    names: {
      en: "regieleki",
    },
    number: 894,
  },
  {
    names: {
      en: "regidrago",
    },
    number: 895,
  },
  {
    names: {
      en: "glastrier",
    },
    number: 896,
  },
  {
    names: {
      en: "spectrier",
    },
    number: 897,
  },
  {
    names: {
      en: "calyrex",
    },
    number: 898,
  },
  {
    names: {
      en: "wyrdeer",
    },
    number: 899,
  },
  {
    names: {
      en: "kleavor",
    },
    number: 900,
  },
  {
    names: {
      en: "ursaluna",
    },
    number: 901,
  },
  {
    names: {
      en: "basculegion",
    },
    number: 902,
  },
  {
    names: {
      en: "sneasler",
    },
    number: 903,
  },
  {
    names: {
      en: "overqwil",
    },
    number: 904,
  },
  {
    names: {
      en: "enamorus",
    },
    number: 905,
  },
  {
    names: {
      en: "sprigatito",
    },
    number: 906,
  },
  {
    names: {
      en: "floragato",
    },
    number: 907,
  },
  {
    names: {
      en: "meowscarada",
    },
    number: 908,
  },
  {
    names: {
      en: "fuecoco",
    },
    number: 909,
  },
  {
    names: {
      en: "crocalor",
    },
    number: 910,
  },
  {
    names: {
      en: "skeledirge",
    },
    number: 911,
  },
  {
    names: {
      en: "quaxly",
    },
    number: 912,
  },
  {
    names: {
      en: "quaxwell",
    },
    number: 913,
  },
  {
    names: {
      en: "quaquaval",
    },
    number: 914,
  },
  {
    names: {
      en: "lechonk",
    },
    number: 915,
  },
  {
    names: {
      en: "oinkologne",
    },
    number: 916,
  },
  {
    names: {
      en: "tarountula",
    },
    number: 917,
  },
  {
    names: {
      en: "spidops",
    },
    number: 918,
  },
  {
    names: {
      en: "nymble",
    },
    number: 919,
  },
  {
    names: {
      en: "lokix",
    },
    number: 920,
  },
  {
    names: {
      en: "pawmi",
    },
    number: 921,
  },
  {
    names: {
      en: "pawmo",
    },
    number: 922,
  },
  {
    names: {
      en: "pawmot",
    },
    number: 923,
  },
  {
    names: {
      en: "tandemaus",
    },
    number: 924,
  },
  {
    names: {
      en: "maushold",
    },
    number: 925,
  },
  {
    names: {
      en: "fidough",
    },
    number: 926,
  },
  {
    names: {
      en: "dachsbun",
    },
    number: 927,
  },
  {
    names: {
      en: "smoliv",
    },
    number: 928,
  },
  {
    names: {
      en: "dolliv",
    },
    number: 929,
  },
  {
    names: {
      en: "arboliva",
    },
    number: 930,
  },
  {
    names: {
      en: "squawkabilly",
    },
    number: 931,
  },
  {
    names: {
      en: "nacli",
    },
    number: 932,
  },
  {
    names: {
      en: "naclstack",
    },
    number: 933,
  },
  {
    names: {
      en: "garganacl",
    },
    number: 934,
  },
  {
    names: {
      en: "charcadet",
    },
    number: 935,
  },
  {
    names: {
      en: "armarouge",
    },
    number: 936,
  },
  {
    names: {
      en: "ceruledge",
    },
    number: 937,
  },
  {
    names: {
      en: "tadbulb",
    },
    number: 938,
  },
  {
    names: {
      en: "bellibolt",
    },
    number: 939,
  },
  {
    names: {
      en: "wattrel",
    },
    number: 940,
  },
  {
    names: {
      en: "kilowattrel",
    },
    number: 941,
  },
  {
    names: {
      en: "maschiff",
    },
    number: 942,
  },
  {
    names: {
      en: "mabosstiff",
    },
    number: 943,
  },
  {
    names: {
      en: "shroodle",
    },
    number: 944,
  },
  {
    names: {
      en: "grafaiai",
    },
    number: 945,
  },
  {
    names: {
      en: "bramblin",
    },
    number: 946,
  },
  {
    names: {
      en: "brambleghast",
    },
    number: 947,
  },
  {
    names: {
      en: "toedscool",
    },
    number: 948,
  },
  {
    names: {
      en: "toedscruel",
    },
    number: 949,
  },
  {
    names: {
      en: "klawf",
    },
    number: 950,
  },
  {
    names: {
      en: "capsakid",
    },
    number: 951,
  },
  {
    names: {
      en: "scovillain",
    },
    number: 952,
  },
  {
    names: {
      en: "rellor",
    },
    number: 953,
  },
  {
    names: {
      en: "rabsca",
    },
    number: 954,
  },
  {
    names: {
      en: "flittle",
    },
    number: 955,
  },
  {
    names: {
      en: "espathra",
    },
    number: 956,
  },
  {
    names: {
      en: "tinkatink",
    },
    number: 957,
  },
  {
    names: {
      en: "tinkatuff",
    },
    number: 958,
  },
  {
    names: {
      en: "tinkaton",
    },
    number: 959,
  },
  {
    names: {
      en: "wiglett",
    },
    number: 960,
  },
  {
    names: {
      en: "wugtrio",
    },
    number: 961,
  },
  {
    names: {
      en: "bombirdier",
    },
    number: 962,
  },
  {
    names: {
      en: "finizen",
    },
    number: 963,
  },
  {
    names: {
      en: "palafin",
    },
    number: 964,
  },
  {
    names: {
      en: "varoom",
    },
    number: 965,
  },
  {
    names: {
      en: "revavroom",
    },
    number: 966,
  },
  {
    names: {
      en: "cyclizar",
    },
    number: 967,
  },
  {
    names: {
      en: "orthworm",
    },
    number: 968,
  },
  {
    names: {
      en: "glimmet",
    },
    number: 969,
  },
  {
    names: {
      en: "glimmora",
    },
    number: 970,
  },
  {
    names: {
      en: "greavard",
    },
    number: 971,
  },
  {
    names: {
      en: "houndstone",
    },
    number: 972,
  },
  {
    names: {
      en: "flamigo",
    },
    number: 973,
  },
  {
    names: {
      en: "cetoddle",
    },
    number: 974,
  },
  {
    names: {
      en: "cetitan",
    },
    number: 975,
  },
  {
    names: {
      en: "veluza",
    },
    number: 976,
  },
  {
    names: {
      en: "dondozo",
    },
    number: 977,
  },
  {
    names: {
      en: "tatsugiri",
    },
    number: 978,
  },
  {
    names: {
      en: "annihilape",
    },
    number: 979,
  },
  {
    names: {
      en: "clodsire",
    },
    number: 980,
  },
  {
    names: {
      en: "farigiraf",
    },
    number: 981,
  },
  {
    names: {
      en: "dudunsparce",
    },
    number: 982,
  },
  {
    names: {
      en: "kingambit",
    },
    number: 983,
  },
  {
    names: {
      en: "great tusk",
    },
    number: 984,
  },
  {
    names: {
      en: "scream tail",
    },
    number: 985,
  },
  {
    names: {
      en: "brute bonnet",
    },
    number: 986,
  },
  {
    names: {
      en: "flutter mane",
    },
    number: 987,
  },
  {
    names: {
      en: "slither wing",
    },
    number: 988,
  },
  {
    names: {
      en: "sandy shocks",
    },
    number: 989,
  },
  {
    names: {
      en: "iron treads",
    },
    number: 990,
  },
  {
    names: {
      en: "iron bundle",
    },
    number: 991,
  },
  {
    names: {
      en: "iron hands",
    },
    number: 992,
  },
  {
    names: {
      en: "iron jugulis",
    },
    number: 993,
  },
  {
    names: {
      en: "iron moth",
    },
    number: 994,
  },
  {
    names: {
      en: "iron thorns",
    },
    number: 995,
  },
  {
    names: {
      en: "frigibax",
    },
    number: 996,
  },
  {
    names: {
      en: "arctibax",
    },
    number: 997,
  },
  {
    names: {
      en: "baxcalibur",
    },
    number: 998,
  },
  {
    names: {
      en: "gimmighoul",
    },
    number: 999,
  },
  {
    names: {
      en: "gholdengo",
    },
    number: 1000,
  },
  {
    names: {
      en: "wo-chien",
    },
    number: 1001,
  },
  {
    names: {
      en: "chien-pao",
    },
    number: 1002,
  },
  {
    names: {
      en: "ting-lu",
    },
    number: 1003,
  },
  {
    names: {
      en: "chi-yu",
    },
    number: 1004,
  },
  {
    names: {
      en: "roaring moon",
    },
    number: 1005,
  },
  {
    names: {
      en: "iron valiant",
    },
    number: 1006,
  },
  {
    names: {
      en: "koraidon",
    },
    number: 1007,
  },
  {
    names: {
      en: "miraidon",
    },
    number: 1008,
  },
  {
    names: {
      en: "walking wake",
    },
    number: 1009,
  },
  {
    names: {
      en: "iron leaves",
    },
    number: 1010,
  },
];

//export type PokemonNumber = typeof POKEMON_NAMES[number]['number'];
//export type NamesForPokemon = typeof POKEMON_NAMES[number]['names'];
