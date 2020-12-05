// *Dice Roller Functions*

function diceRoll(min, max) {
  const mathLogic = Math.floor(Math.random() * (max - min + 1)) + min;
  return mathLogic;
}

// Roller for multiple dice, would be useful for spell damage, amongst other things

function multiDiceRoll(diceAmt, diceNum) {
  const rolls = [];

  for (let i = 0; i < diceAmt; i += 1) {
    rolls.push(diceRoll(1, diceNum));
  }
  const rollTotal = rolls.reduce((a, b) => a + b, 0);
  return rollTotal;
}

// Rolls 8d6
// console.log(multiDiceRoll(8, 6));

// *Ability Score Generator*

// new 4d6 function
function roll4d6Scores() {
  let rawScores = [];

  for (let i = 0; i < 4; i += 1) {
    rawScores.push(diceRoll(1, 6));
  }
  rawScores.sort().shift();
  rawScores = rawScores.reduce((a, b) => a + b, 0);
  return rawScores;
}

function getScoreArray() {
  const scoreArray = [];

  for (let i = 0; i < 6; i += 1) {
    scoreArray.push(roll4d6Scores());
  }
  return scoreArray;
}

// returns an array with preferred order of ability scores to be passed into getScoreObject

function getScorePreference(characterClass) {
  const charClass = characterClass.toLowerCase();

  if (charClass === 'barbarian') {
    return ['str', 'con', 'dex', 'wis', 'cha', 'int'];
  }
  if (charClass === 'bard') {
    return ['cha', 'dex', 'con', 'int', 'wis', 'str'];
  }
  if (charClass === 'cleric') {
    return ['wis', 'con', 'str', 'int', 'dex', 'cha'];
  }
  if (charClass === 'druid') {
    return ['wis', 'con', 'dex', 'str', 'int', 'cha'];
  }
  if (charClass === 'fighter') {
    return ['str', 'con', 'dex', 'wis', 'cha', 'int'];
  }
  if (charClass === 'monk') {
    return ['dex', 'wis', 'con', 'str', 'cha', 'int'];
  }
  if (charClass === 'paladin') {
    return ['str', 'cha', 'con', 'wis', 'dex', 'int'];
  }
  if (charClass === 'ranger') {
    return ['dex', 'wis', 'con', 'int', 'cha', 'str'];
  }
  if (charClass === 'rogue') {
    return ['dex', 'int', 'cha', 'wis', 'con', 'str'];
  }
  if (charClass === 'sorcerer') {
    return ['cha', 'con', 'dex', 'int', 'wis', 'str'];
  }
  if (charClass === 'warlock') {
    return ['cha', 'dex', 'con', 'wis', 'int', 'str'];
  }
  if (charClass === 'wizard') {
    return ['int', 'dex', 'con', 'cha', 'wis', 'str'];
  }
  return 'oops!';
}

function getScoreObject(characterClass) {
  const scoreOrder = getScorePreference(characterClass.toLowerCase());
  const scoreArray = getScoreArray()
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();

  const scoreObject = {
    str: scoreArray[scoreOrder.indexOf('str')],
    dex: scoreArray[scoreOrder.indexOf('dex')],
    con: scoreArray[scoreOrder.indexOf('con')],
    int: scoreArray[scoreOrder.indexOf('int')],
    wis: scoreArray[scoreOrder.indexOf('wis')],
    cha: scoreArray[scoreOrder.indexOf('cha')],
  };

  // scoreSum is to be built into loop to reroll score if sum < 71 || sum > 79
  const scoreSum = scoreArray.reduce((a, b) => a + b, 0);

  return scoreObject;
}

// *Class and Ancestry Tables*

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

// *Name Generator*

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
  'ix',
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
  'the Disinherited',
  'the Grim',
  'the Loser',
  'the Fanged',
  'the Gouty',
  'the Accursed',
  'the Unavoidable',
  'the Mild',
  'the Victorious',
  'the Wise',
  'the Nightengale',
  'the Weird',
  'the Cuddle Bug',
];

const tableGen = (listOne, listTwo = ' ') => {
  const tableResult = `${listOne[diceRoll(0, listOne.length - 1)]}${
    listTwo[diceRoll(0, listTwo.length - 1)]
  }`;
  return tableResult.trim();
};
// *Starting items tables and generator*

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

// **Constructor function to build player character**

class Character {
  constructor(items = [], abilityBonuses = {}) {
    this.firstName = tableGen(firstNameOne, firstNameTwo);
    this.lastName = tableGen(lastNameOne, lastNameTwo);
    this.title = tableGen(titles);
    this.ancestry = tableGen(charAncestry);
    this.class = tableGen(charClass);
    this.abilityScores = getScoreObject(this.class);
    this.abilityBonuses = abilityBonuses;
    this.items = items;
  }

  returnAbilityMod() {
    const scoreArray = Object.values(this.abilityScores);
    const bonusArray = scoreArray.map((x) => Math.floor((x - 10) / 2));

    this.abilityBonuses = {
      str: bonusArray[0],
      dex: bonusArray[1],
      con: bonusArray[2],
      int: bonusArray[3],
      wis: bonusArray[4],
      cha: bonusArray[5],
    };
    return this.abilityBonuses;
  }
}

const playerOne = new Character([startingItem(weapons), startingItem(armor)]);

playerOne.returnAbilityMod();
console.log(playerOne);
