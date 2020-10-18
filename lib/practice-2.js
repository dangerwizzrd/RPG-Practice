const myCharOne = {
  name: 'Zolda',
  class: 'Wizard',
  maxHp: 90,
  currentHp: 85,
  armorClass: 16,
  atkBonus: 7,
  magicBonus: 10,
};

const myCharTwo = {
  name: 'Rollo',
  class: 'Sorcerer',
  maxHp: 100,
  currentHp: 95,
  armorClass: 15,
  atkBonus: 6,
  magicBonus: 11,
};

//  Version 3

function diceRoll(min, max) {
  const mathLogic = Math.floor(Math.random() * (max - min + 1)) + min;
  return mathLogic;
}

function atkRoll(diceResult) {
  return diceResult + myCharOne.atkBonus;
}

function makeAtk(minimum, maximum) {
  const theRoll = diceRoll(minimum, maximum);
  const addingBonus = atkRoll(theRoll);
  const printedStatement = `You rolled a ${theRoll} for a total of ${addingBonus}.`;
  if (theRoll === 20) {
    return `Critical Hit!! ${printedStatement} ${myCharOne.name}'s attack hit ${myCharTwo.name} for 4 damage!!`;
  }
  if (theRoll === 1) {
    return `Critical Miss!! ${printedStatement} Your sword flew right in the trash!!`;
  }
  if (addingBonus >= myCharTwo.armorClass) {
    return `${printedStatement} ${myCharOne.name}'s attack hit ${myCharTwo.name} for 2 damage!`;
  }

  return `${printedStatement} ${myCharOne.name}'s attack missed!`;
}

console.log(makeAtk(1, 20));
