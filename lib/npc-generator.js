function diceRoll(min, max) {
  const mathLogic = Math.floor(Math.random() * (max - min + 1)) + min;
  return mathLogic;
}

// Ability Score Generator

// new 4d6 function
function roll4d6Scores() {
  let rawScores = [];

  for (let i = 0; i < 4; i++) {
    rawScores.push(diceRoll(1, 6));
  }
  rawScores.sort().shift();
  rawScores = rawScores.reduce((a, b) => a + b, 0);
  return rawScores;
}

function getScoreArray() {
  const scoreArray = [];

  for (let i = 0; i < 6; i++) {
    scoreArray.push(roll4d6Scores());
  }
  return scoreArray;
}

function getScoreObject() {
  const scoreArray = getScoreArray();
  // .sort(function (a, b) {
  //   return a - b;
  // })
  // .reverse();

  // Above Sort method for class preference sorting later.

  // scoreSum is to be built into loop to reroll score if sum < 71 $$ sum > 79
  const scoreSum = scoreArray.reduce((a, b) => a + b, 0);

  const scoreObject = {
    str: scoreArray[0],
    dex: scoreArray[1],
    con: scoreArray[2],
    int: scoreArray[3],
    wis: scoreArray[4],
    cha: scoreArray[5],
  };

  return scoreObject;
}

// Class and Ancestry Tables

const charClass = [
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard',
];

const charAncestry = [
  'Aasimar',
  'Bugbear',
  'Dragonborn',
  'Dwarf',
  'Elf (High)',
  'Elf (Drow)',
  'Goblin',
  'Gnome',
  'Half-Elf',
  'Half-Orc',
  'Halfling',
  'Human',
  'Kenku',
  'Tabaxi',
  'Tiefling',
  'Triton',
];

// Name Generator

const firstNameOne = [
  'And',
  'Pel',
  'Ser',
  'Tan',
  'Ab',
  'Opr',
  'Rem',
  'Dal',
  'Tar',
  'Lan',
  'Nol',
  'Ulf',
  'Col',
  'Xan',
  'Kyr',
  'Ur',
  'Quam',
  'Ziff',
  'Veyl',
  'Pav',
  'Tyn',
  'Gaab',
  'Zol',
  'Dolf',
  'Grem',
  'Anor',
  'Bax',
  'For',
  'Bac',
  'Zan',
  'Thor',
  'Do',
  'Ux',
];

const firstNameTwo = [
  'on',
  'ah',
  'da',
  'el',
  'or',
  'rey',
  'ram',
  'ithe',
  'over',
  "'em",
  'yl',
  'ixe',
  'ig',
  'elon',
  'emon',
  'illius',
  'ek',
  'aw',
  'anel',
  'us',
  'yme',
  'ival',
  'ash',
  'ien',
  'ia',
  'nax',
  'a',
  'e',
  'i',
  'o',
  'u',
  '',
  '',
  '',
  '',
];

const lastNameOne = [
  'Far',
  'Short',
  'Tall',
  'Full',
  'Storm',
  'Hard',
  'Hill',
  'Clear',
  'Wild',
  'Dark',
  'High',
  'Low',
  'Bright',
  'Swift',
  'Oaken',
  'Dread',
  'Still',
  'Dawn',
  'Dusk',
  'Proud',
  'Sun',
  'Frost',
  'Cinder',
];

const lastNameTwo = [
  'church',
  'brook',
  'tree',
  'wood',
  'sea',
  'ridge',
  'stride',
  'river',
  'rider',
  'mane',
  'flame',
  'stone',
  'sworn',
  'seeker',
  'splitter',
  'bane',
  'jaw',
  'hammer',
  'water',
  'walker',
  'weaver',
  'härdt',
  'hair',
  'leaf',
];

const titles = [
  'the Ruthless',
  'the Violent',
  'the Soft',
  'the Kool',
  'the Well Endowed',
  'the Humble',
  'the Lil Binch',
  'of Low Self-Esteem',
  'the Tiresome',
  'the Thunderous',
  'the Lonely',
  'the Radiant',
  'the #Blessed',
  'the Light Loafered',
  'the Bugbear Slayer',
  'the MurderHobo',
];

const tableGen = (listOne, listTwo = ' ') => {
  const tableResult = `${listOne[diceRoll(0, listOne.length - 1)]}${
    listTwo[diceRoll(0, listTwo.length - 1)]
  }`;
  return tableResult.trim();
};
// Starting items tables and generator

const weapons = [
  'Dagger',
  'Shortsword',
  'Bastard Sword',
  'Crossbow',
  'Longbow',
  'Frying Pan',
  'Spell Book',
  'Staff',
];

const armor = [
  'T-Shirt',
  'Leather Vest',
  'Chain Shirt',
  'Plate Armor',
  'Magic Underwear',
];

const consumables = [
  'Potion',
  "Alchemist's Fire",
  'Spell Scroll',
  'Poppers',
  "Potion of Giant's Strength",
  'Philter of Love',
  'Sovereign Glue',
];

const startingItem = (itemType) => itemType[diceRoll(0, itemType.length - 1)];

// Constructor function to build player character

class Character {
  constructor(items = [], abilityBonuses = {}) {
    this.firstName = tableGen(firstNameOne, firstNameTwo);
    this.lastName = tableGen(lastNameOne, lastNameTwo);
    this.title = tableGen(titles);
    this.ancestry = tableGen(charAncestry);
    this.class = tableGen(charClass);
    this.abilityScores = getScoreObject();
    this.abilityBonuses = abilityBonuses;
    this.items = items;
  }

  returnAbilityMod() {
    const scoreArray = Object.values(this.abilityScores);
    const bonusArray = scoreArray.map((x) => Math.floor((x - 10) / 2));

    const entries = new Map([
      ['str', bonusArray[0]],
      ['dex', bonusArray[1]],
      ['con', bonusArray[2]],
      ['int', bonusArray[3]],
      ['wis', bonusArray[4]],
      ['cha', bonusArray[5]],
    ]);
    this.abilityBonuses = Object.fromEntries(entries);

    return this.abilityBonuses;
  }
}

const playerOne = new Character([startingItem(weapons), startingItem(armor)]);

playerOne.returnAbilityMod();
console.log(playerOne);

// playerTwo.rollScores();
// console.log(playerTwo);
