const rangeEquipment = [
  {
    id: 1,
    image: "https://oldschool.runescape.wiki/images/Rune_crossbow.png?c85b3",
    tier: "C",
    name: "Rune Crossbow",
    achieved: false,
  },
  {
    id: 2,
    image: "https://oldschool.runescape.wiki/images/Archers_ring.png?c0a17",
    tier: "B",
    name: "Archer's Ring",
    achieved: false,
  },
  {
    id: 3,
    image: "https://oldschool.runescape.wiki/images/Robin_hood_hat.png?c85b3",
    tier: "B",
    name: "Robin Hood Hat",
    achieved: false,
  },
  {
    id: 4,
    image: "https://oldschool.runescape.wiki/images/Rangers%27_tunic.png?c85b3",
    tier: "B",
    name: "Rangers' Tunic",
    achieved: false,
  },
  {
    id: 5,
    image: "https://oldschool.runescape.wiki/images/Ranger_boots.png?c85b3",
    tier: "B",
    name: "Ranger Boots",
    achieved: false,
  },
  {
    id: 6,
    image: "https://oldschool.runescape.wiki/images/Ranger_gloves.png?c85b3",
    tier: "B",
    name: "Ranger Gloves",
    achieved: false,
  },
  {
    id: 7,
    image: "https://oldschool.runescape.wiki/images/Odium_ward.png?c85b3",
    tier: "B",
    name: "Odium Ward",
    achieved: false,
  },
  {
    id: 8,
    image: "https://oldschool.runescape.wiki/images/Dark_bow.png?c85b3",
    tier: "B",
    name: "Dark Bow",
    achieved: false,
  },
  {
    id: 9,
    image: "https://oldschool.runescape.wiki/images/Twisted_buckler.png?c85b3",
    tier: "A",
    name: "Twisted Buckler",
    achieved: false,
  },
  {
    id: 10,
    image: "https://oldschool.runescape.wiki/images/Heavy_ballista.png?c85b3",
    tier: "A",
    name: "Heavy Balista",
    achieved: false,
  },
  {
    id: 11,
    image: "https://oldschool.runescape.wiki/images/Dragon_crossbow.png?c85b3",
    tier: "A",
    name: "Dragon Crossbow",
    achieved: false,
  },
  {
    id: 12,
    image: "https://oldschool.runescape.wiki/images/Armadyl_helmet.png?c85b3",
    tier: "S",
    name: "Armadyl Helmet",
    achieved: false,
  },
  {
    id: 13,
    image:
      "https://oldschool.runescape.wiki/images/Armadyl_chestplate.png?c85b3",
    tier: "S",
    name: "Armadyl Chestplate",
    achieved: false,
  },
  {
    id: 14,
    image:
      "https://oldschool.runescape.wiki/images/Armadyl_chainskirt.png?c85b3",
    tier: "S",
    name: "Armadyl Chainskirt",
    achieved: false,
  },

  {
    id: 15,
    tier: "S",
    image: "https://oldschool.runescape.wiki/images/Armadyl_crossbow.png?c85b3",

    name: "Armadyl Crossbow",
    achieved: false,
  },
  {
    id: 16,
    image:
      "https://oldschool.runescape.wiki/images/Necklace_of_anguish.png?c85b3",
    tier: "S",
    name: "Necklace of Anguish",
    achieved: false,
  },
  {
    id: 17,
    image: "https://oldschool.runescape.wiki/images/Pegasian_boots.png?c85b3",
    tier: "S",
    name: "Pegasian Boots",
    achieved: false,
  },
  {
    id: 18,
    image: "https://oldschool.runescape.wiki/images/Toxic_blowpipe.png?c85b3",
    tier: "S",
    name: "Toxic Blowpipe",
    achieved: false,
  },
  {
    id: 19,
    image: "https://oldschool.runescape.wiki/images/Crystal_helm.png?c85b3",
    tier: "S",
    name: "Crystal Helm",
    achieved: false,
  },
  {
    id: 20,
    image: "https://oldschool.runescape.wiki/images/Crystal_body.png?c85b3",
    tier: "S",
    name: "Crystal Body",
    achieved: false,
  },
  {
    id: 21,
    image: "https://oldschool.runescape.wiki/images/Crystal_legs.png?c85b3",
    tier: "S",
    name: "Crystal Legs",
    achieved: false,
  },
  {
    id: 22,
    image:
      "https://oldschool.runescape.wiki/images/Bow_of_faerdhinen.png?3d026",
    tier: "S",
    name: "Bow of Faerdhinen",
    achieved: false,
  },
  {
    id: 23,
    image:
      "https://oldschool.runescape.wiki/images/Dragon_hunter_crossbow.png?c85b3",
    tier: "S+",
    name: "Dragon Hunter Crossbow",
    achieved: false,
  },
  {
    id: 24,
    image: "https://oldschool.runescape.wiki/images/Twisted_bow.png?c85b3",
    tier: "S+",
    name: "Twisted Bow",
    achieved: false,
  },
  {
    id: 25,
    image: "https://oldschool.runescape.wiki/images/Masori_mask.png?c85b3",
    tier: "S+",
    name: "Masori Mask",
    achieved: false,
  },
  {
    id: 26,
    image: "https://oldschool.runescape.wiki/images/Masori_body.png?c85b3",
    tier: "S+",
    name: "Masori Body",
    achieved: false,
  },
  {
    id: 27,
    image: "https://oldschool.runescape.wiki/images/Masori_chaps.png?c85b3",
    tier: "S+",
    name: "Masori Chaps",
    achieved: false,
  },
  {
    id: 28,
    image: "https://oldschool.runescape.wiki/images/Zaryte_crossbow.png?c85b3",

    tier: "S+",
    name: "Zaryte Crossbow",
    achieved: false,
  },
  {
    id: 29,
    image: "https://oldschool.runescape.wiki/images/Zaryte_vambraces.png?c85b3",
    tier: "S+",
    name: "Zaryte Vambraces",
    achieved: false,
  },
  {
    id: 30,
    image:
      "https://oldschool.runescape.wiki/images/Ava%27s_assembler.png?c85b3",
    tier: "S+",
    name: "Ava's Assembler",
    achieved: false,
  },
];

export default rangeEquipment;