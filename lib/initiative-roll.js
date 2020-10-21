const playerOne = {
  name: 'Zolda',
  class: 'Wizard',
  maxHp: 90,
  currentHp: 85,
  armorClass: 16,
  atkBonus: 7,
  atkDamage: 12,
  initiativeBonus: 3,
};

const playerTwo = {
  name: 'Rollo',
  class: 'Sorcerer',
  maxHp: 100,
  currentHp: 35,
  armorClass: 15,
  atkBonus: 6,
  atkDamage: 10,
  initiativeBonus: 5,
};

function diceRoll(min, max) {
  const mathLogic = Math.floor(Math.random() * (max - min + 1)) + min;
  return mathLogic;
}

function initiativeRoll(diceResult) {
  return diceResult + playerOne.initiativeBonus;
}

function makeAtk(minimum, maximum) {
  const theRoll = diceRoll(minimum, maximum);
  const addingBonus = initiativeRoll(theRoll);
  return `${playerOne.name} rolled ${theRoll} for a total initiative of ${addingBonus}.`;
}

console.log(makeAtk(1, 20));
