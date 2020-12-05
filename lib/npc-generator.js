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
  'Kaz',
  'Grak',
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
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
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

// *Ability Score Generator*

// rolls 4d6, dropping the lowest to make each raw ability score
function roll4d6Scores() {
  let rawScores = [];

  for (let i = 0; i < 4; i += 1) {
    rawScores.push(diceRoll(1, 6));
  }
  rawScores.sort().shift();
  rawScores = rawScores.reduce((a, b) => a + b, 0);
  return rawScores;
}

// loops roll4d6Scores to get 6 scores in an array
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
    .sort((a, b) => {
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

// returns ability modifier bonuses based off sorted ability score object

function returnAbilityMod(character) {
  const char = character;
  const scoreArray = Object.values(char.abilityScores);
  const bonusArray = scoreArray.map((x) => Math.floor((x - 10) / 2));

  char.abilityBonuses = {
    str: bonusArray[0],
    dex: bonusArray[1],
    con: bonusArray[2],
    int: bonusArray[3],
    wis: bonusArray[4],
    cha: bonusArray[5],
  };
  return char.abilityBonuses;
}

// returns proficiency bonus based on characters total level
function getProficiencyBonus(character) {
  const char = character;
  const charLevel = char.totalLevel;
  if (charLevel <= 4) {
    char.profBonus = 2;
    return char.profBonus;
  }
  if (charLevel > 4 && charLevel <= 8) {
    char.profBonus = 3;
    return char.profBonus;
  }
  if (charLevel > 8 && charLevel <= 12) {
    char.profBonus = 4;
    return char.profBonus;
  }
  if (charLevel > 12 && charLevel <= 16) {
    char.profBonus = 5;
    return char.profBonus;
  }
  if (charLevel >= 17) {
    char.profBonus = 6;
    return char.profBonus;
  }
}

// *Class Table*
// Begin adding class trait functions

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

function getClassTraits(character, characterClass) {
  const charClass = characterClass.toLowerCase();

  if (charClass === 'barbarian') {
    addBarbarian(character);
  }
  if (charClass === 'bard') {
    addBard(character);
  }
  if (charClass === 'cleric') {
    addCleric(character);
  }
  if (charClass === 'druid') {
    addDruid(character);
  }
  if (charClass === 'fighter') {
    addFighter(character);
  }
  if (charClass === 'monk') {
    addMonk(character);
  }
  if (charClass === 'paladin') {
    addPaladin(character);
  }
  if (charClass === 'ranger') {
    addRanger(character);
  }
  if (charClass === 'rogue') {
    addRogue(character);
  }
  if (charClass === 'sorcerer') {
    addSorcerer(character);
  }
  if (charClass === 'warlock') {
    addWarlock(character);
  }
  if (charClass === 'wizard') {
    addWizard(character);
  }
  return 'oops!';
}

// Ancestry traits and generators

const charAncestryList = [
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

// Function with each ancestry's traits. Just basic traits for now, will expand with the wordier text later

function addAasimar(character) {
  const char = character;
  char.abilityScores.cha += 2;
  char.abilityScores.wis += 1;
  char.damageResist = ['necrotic', 'radiant'];
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common', 'celestial'];
}

function addBugbear(character) {
  const char = character;
  char.abilityScores.str += 2;
  char.abilityScores.dex += 1;
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common', 'Goblin'];
}

function addDragonborn(character) {
  const char = character;
  char.abilityScores.str += 2;
  char.abilityScores.cha += 1;
  char.damageResist = ['fire'];
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common', 'Draconic'];
}

function addDwarf(character) {
  const char = character;
  char.abilityScores.con += 2;
  char.abilityScores.wis += 1;
  char.size = 'Medium';
  char.speed = 25;
  char.languages = ['Common', 'Dwarvish'];
}

function addElfDrow(character) {
  const char = character;
  char.abilityScores.dex += 2;
  char.abilityScores.cha += 1;
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common', 'Elvish', 'Sylvan'];
}

function addElfHigh(character) {
  const char = character;
  char.abilityScores.dex += 2;
  char.abilityScores.int += 1;
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common', 'Elvish', 'Sylvan'];
}

function addGoblin(character) {
  const char = character;
  char.abilityScores.dex += 2;
  char.abilityScores.con += 1;
  char.size = 'Small';
  char.speed = 30;
  char.languages = ['Common', 'Goblin'];
}

function addGnome(character) {
  const char = character;
  char.abilityScores.int += 2;
  char.abilityScores.dex += 1;
  char.size = 'Small';
  char.speed = 25;
  char.languages = ['Common', 'Gnomish'];
}

function addHalfElf(character) {
  const char = character;
  // 2nd and 3rd AS bonus preset for now, change to random or based on class preferences later?
  char.abilityScores.cha += 2;
  char.abilityScores.dex += 1;
  char.abilityScores.con += 1;
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common', 'Elvish'];
}

function addHalfOrc(character) {
  const char = character;
  char.abilityScores.str += 2;
  char.abilityScores.con += 1;
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common', 'Orc'];
}

function addHalfling(character) {
  const char = character;
  char.abilityScores.dex += 2;
  char.abilityScores.cha += 1;
  char.size = 'Small';
  char.speed = 25;
  char.languages = ['Common', 'Halfling'];
}

function addHuman(character) {
  const char = character;
  char.abilityScores.str += 1;
  char.abilityScores.dex += 1;
  char.abilityScores.con += 1;
  char.abilityScores.int += 1;
  char.abilityScores.wis += 1;
  char.abilityScores.cha += 1;
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common'];
}

function addKenku(character) {
  const char = character;
  char.abilityScores.dex += 2;
  char.abilityScores.wis += 1;
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common', 'Auran'];
}

function addTabaxi(character) {
  const char = character;
  char.abilityScores.dex += 2;
  char.abilityScores.cha += 1;
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common'];
}

function addTiefling(character) {
  const char = character;
  char.abilityScores.cha += 2;
  char.abilityScores.int += 1;
  char.damageResist = ['fire'];
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common', 'Infernal'];
}

function addTriton(character) {
  const char = character;
  char.abilityScores.str += 1;
  char.abilityScores.con += 1;
  char.abilityScores.cha += 1;
  char.damageResist = ['cold'];
  char.size = 'Medium';
  char.speed = 30;
  char.languages = ['Common', 'Primordial'];
}

// Grabs ancestry trait function and applies them to character object

function getAncestryTraits(character, characterAncestry) {
  const charAncestry = characterAncestry.toLowerCase();

  if (charAncestry === 'aasimar') {
    addAasimar(character);
  }
  if (charAncestry === 'bugbear') {
    addBugbear(character);
  }
  if (charAncestry === 'dragonborn') {
    addDragonborn(character);
  }
  if (charAncestry === 'dwarf') {
    addDwarf(character);
  }
  if (charAncestry === 'elf (drow)') {
    addElfDrow(character);
  }
  if (charAncestry === 'elf (high)') {
    addElfHigh(character);
  }
  if (charAncestry === 'goblin') {
    addGoblin(character);
  }
  if (charAncestry === 'gnome') {
    addGnome(character);
  }
  if (charAncestry === 'half-elf') {
    addHalfElf(character);
  }
  if (charAncestry === 'half-orc') {
    addHalfOrc(character);
  }
  if (charAncestry === 'halfling') {
    addHalfling(character);
  }
  if (charAncestry === 'human') {
    addHuman(character);
  }
  if (charAncestry === 'kenku') {
    addKenku(character);
  }
  if (charAncestry === 'tabaxi') {
    addTabaxi(character);
  }
  if (charAncestry === 'tiefling') {
    addTiefling(character);
  }
  if (charAncestry === 'triton') {
    addTriton(character);
  }
}

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
// Could be modified to have things like firstName/Race etc as param , to manually edit those features
// getting big, maybe needs to be refactored into subclasses? or not?
class RandomCharacter {
  constructor(items = []) {
    this.firstName = tableGen(firstNameOne, firstNameTwo);
    this.lastName = tableGen(lastNameOne, lastNameTwo);
    this.title = tableGen(titles);
    this.ancestry = tableGen(charAncestryList);
    this.class = tableGen(charClass);
    this.totalLevel = 5;
    this.profBonus = getProficiencyBonus(this);
    this.abilityScores = getScoreObject(this.class);
    getAncestryTraits(this, this.ancestry);
    this.abilityBonuses = returnAbilityMod(this);
    // armorClass & atkBonus need to be fleshed out but this will do for testing
    this.armorClass = 10 + this.abilityBonuses.dex;
    this.atkBonus = this.profBonus + this.abilityBonuses.str;
    // atkDamage & HP just for testing makeAttack method, will be replaced or edited heavily
    this.maxHp =
      multiDiceRoll(this.totalLevel, 8) +
      this.abilityBonuses.con * this.totalLevel;
    this.currentHp = this.maxHp;
    this.atkDamage = multiDiceRoll(2, 6) + this.abilityBonuses.str;
    this.items = items;
  }

  makeAtk(target) {
    const theRoll = diceRoll(1, 20);
    const totalRoll = theRoll + this.atkBonus;
    const printedStatement = `${this.firstName} rolled ${theRoll} for a total of ${totalRoll}.`;

    // checks roll against armor class and for Nat 20s & 1s.
    // Deducts hit points on a hit and prints message describing results.
    if (theRoll === 20) {
      target.currentHp -= this.atkDamage * 2;
      return `Critical Hit!! ${printedStatement} ${
        this.firstName
      }'s attack hit ${target.firstName} for ${this.atkDamage * 2} damage!!`;
    }
    if (theRoll === 1) {
      return `Critical Miss!! ${printedStatement} Your sword flew right in the trash!!`;
    }
    if (totalRoll >= target.armorClass) {
      target.currentHp -= this.atkDamage;
      return `${printedStatement} ${this.firstName}'s attack hit ${target.firstName} for ${this.atkDamage} damage!`;
    }
    return `${printedStatement} ${this.firstName}'s attack missed!`;
  }

  battleSummary(target) {
    return `~~${this.firstName} HP: ${this.currentHp}/${this.maxHp} --- ${target.firstName} HP: ${target.currentHp}/${target.maxHp}~~`;
  }
}

const playerOne = new RandomCharacter([
  startingItem(weapons),
  startingItem(armor),
]);

const badGuy = new RandomCharacter();

console.log(playerOne);

console.log(playerOne.makeAtk(badGuy));
console.log(badGuy.makeAtk(playerOne));
console.log(playerOne.battleSummary(badGuy));
