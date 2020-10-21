const playerOne = {
  name: 'Zolda',
  class: 'Wizard',
  maxHp: 40,
  currentHp: 40,
  armorClass: 16,
  atkBonus: 7,
  atkDamage: 12,
};

const playerTwo = {
  name: 'Rollo',
  class: 'Sorcerer',
  maxHp: 45,
  currentHp: 45,
  armorClass: 16,
  atkBonus: 8,
  atkDamage: 10,
};

function diceRoll(min, max) {
  const mathLogic = Math.floor(Math.random() * (max - min + 1)) + min;
  return mathLogic;
}

function makeAtk(minimum, maximum, attacker, target) {
  // Rolls d20, adds player's attack bonus
  const theRoll = diceRoll(minimum, maximum);
  const totalRoll = theRoll + attacker.atkBonus;
  const printedStatement = `${attacker.name} rolled ${theRoll} for a total of ${totalRoll}.`;

  // checks roll against armor class and for Nat 20s & 1s.
  // Deducts hit points on a hit and prints message describing results.
  if (theRoll === 20) {
    target.currentHp -= attacker.atkDamage * 2;
    return `Critical Hit!! ${printedStatement} ${attacker.name}'s attack hit ${
      target.name
    } for ${attacker.atkDamage * 2} damage!!`;
  }
  if (theRoll === 1) {
    return `Critical Miss!! ${printedStatement} Your sword flew right in the trash!!`;
  }
  if (totalRoll >= target.armorClass) {
    target.currentHp -= attacker.atkDamage;
    return `${printedStatement} ${attacker.name}'s attack hit ${target.name} for ${attacker.atkDamage} damage!`;
  }
  return `${printedStatement} ${attacker.name}'s attack missed!`;
}

// prints summary of player hit points at end of "combat round"
function getPlayerSummary(attacker, target) {
  return `~~${attacker.name} HP: ${attacker.currentHp}/${attacker.maxHp} --- ${target.name} HP: ${target.currentHp}/${target.maxHp}~~`;
}

// Yeah I know you're not supposed to call and console log like this, dont @ me
// Running the functions repeatedly until I figure out looping cuz it looks like a lil fight

console.log('!Round 1!');
console.log(makeAtk(1, 20, playerTwo, playerOne));
console.log(makeAtk(1, 20, playerOne, playerTwo));
console.log(getPlayerSummary(playerOne, playerTwo));

console.log('!Round 2!');
console.log(makeAtk(1, 20, playerTwo, playerOne));
console.log(makeAtk(1, 20, playerOne, playerTwo));
console.log(getPlayerSummary(playerOne, playerTwo));

console.log('!Round 3!');
console.log(makeAtk(1, 20, playerTwo, playerOne));
console.log(makeAtk(1, 20, playerOne, playerTwo));
console.log(getPlayerSummary(playerOne, playerTwo));

console.log('!Round 4!');
console.log(makeAtk(1, 20, playerTwo, playerOne));
console.log(makeAtk(1, 20, playerOne, playerTwo));
console.log(getPlayerSummary(playerOne, playerTwo));

console.log('!Round 5!');
console.log(makeAtk(1, 20, playerTwo, playerOne));
console.log(makeAtk(1, 20, playerOne, playerTwo));
console.log(getPlayerSummary(playerOne, playerTwo));
