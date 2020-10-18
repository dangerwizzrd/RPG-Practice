const playerOne = {
  name: 'Zolda',
  class: 'Wizard',
  maxHp: 90,
  currentHp: 85,
  armorClass: 16,
  atkBonus: 7,
  magicBonus: 10,
};

const playerTwo = {
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
  return diceResult + playerOne.atkBonus;
}

function makeAtk(minimum, maximum) {
  const theRoll = diceRoll(minimum, maximum);
  const addingBonus = atkRoll(theRoll);
  const printedStatement = `${playerOne.name} rolled ${theRoll} for a total of ${addingBonus}.`;
  if (theRoll === 20) {
    playerTwo.currentHp -= 4;
    return `Critical Hit!! ${printedStatement} ${playerOne.name}'s attack hit ${playerTwo.name} for 4 damage!!`;
  }
  if (theRoll === 1) {
    return `Critical Miss!! ${printedStatement} Your sword flew right in the trash!!`;
  }
  if (addingBonus >= playerTwo.armorClass) {
    playerTwo.currentHp -= 2;
    return `${printedStatement} ${playerOne.name}'s attack hit ${playerTwo.name} for 2 damage!`;
  }

  return `${printedStatement} ${playerOne.name}'s attack missed!`;
}

console.log(makeAtk(1, 20));

function getPlayerSummary(player) {
  const hpNow = player.currentHp;
  return `${hpNow} `;
}

console.log(getPlayerSummary(playerTwo));
