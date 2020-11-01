function diceRoll(min, max) {
  const mathLogic = Math.floor(Math.random() * (max - min + 1)) + min;
  return mathLogic;
}

// Name Generator

const firstNameOne = [
  'And',
  'Pel',
  'Ser',
  'Tan',
  'Ab',
  'Okr',
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
  ' ',
  ' ',
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
  ' the Ruthless',
  ' the Violent',
  ' the Soft',
  ' the Kool',
  ' the Well Endowed',
  ' the Humble',
  ' the Lil Binch',
  ' of Low Self-Esteem',
  ' the Tiresome',
  ' the Thunderous',
  ' the Lonely',
  ' the Radiant',
  ' the #Blessed',
  ' the Light Loafered',
  ' the Bugbear Slayer',
  ' the MurderHobo',
];

function nameGen() {
  const titleCheck = diceRoll(1, 3);
  const fullName = `${firstNameOne[diceRoll(0, firstNameOne.length - 1)]}${
    firstNameTwo[diceRoll(0, firstNameTwo.length - 1)]
  } ${lastNameOne[diceRoll(0, lastNameOne.length - 1)]}${
    lastNameTwo[diceRoll(0, lastNameTwo.length - 1)]
  }`;
  if (titleCheck === 1) {
    return fullName + titles[diceRoll(0, titles.length - 1)];
  }
  return fullName;
}

console.log(nameGen());

// Loot Generator

const lootTableA = [
  { item: 'Potion', description: 'Heals 5 HP', amount: 1 },
  { item: 'Rusty Key', description: 'A rusted a broken key', amount: 1 },
  { item: 'Old Boot', description: "It's full of soup!", amount: 1 },
  { item: 'Tissue', description: 'For your issues.', amount: 1 },
];

const lootTableB = [
  { item: 'Dagger', description: 'Perfect for wounding!', amount: 1 },
  {
    item: 'Light Armor',
    description: "A t-shirt. It's thick though!",
    amount: 1,
  },
  {
    item: 'Sandals',
    description: 'Who makes sandals out of jelly?',
    amount: 1,
  },
  {
    item: 'Simple Key',
    description:
      'For simple locks like on a diary, or a chest full of treasure.',
    amount: 1,
  },
];

const lootTableC = [
  {
    item: 'Bastard Sword',
    description: "Ironically, it's not cursed",
    amount: 1,
  },
  {
    item: 'Heavy Armor',
    description: "Oh god, it's like 5 t-shirts in one!",
    amount: 1,
  },
  {
    item: 'Boots of Speed',
    description: "Check it out, they've got wheelies!",
    amount: 1,
  },
  {
    item: 'Super Potion',
    description: 'Heals 10 HP. Super!',
    amount: 1,
  },
];

function lootRoll(challenge) {
  const rollTableA = lootTableA[diceRoll(0, lootTableA.length - 1)];
  const rollTableB = lootTableB[diceRoll(0, lootTableB.length - 1)];
  const rollTableC = lootTableC[diceRoll(0, lootTableC.length - 1)];
  if (challenge <= 5) {
    return rollTableA;
  }
  if (challenge <= 10) {
    return [rollTableA, rollTableB];
  }
}

console.log(lootRoll(10));
