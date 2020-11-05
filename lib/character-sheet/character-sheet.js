const { doc } = require('prettier');

const abilityBonus = {
  strBonus: 3,
  dexBonus: 4,
  conBonus: 1,
  intBonus: 3,
  wisBonus: 2,
  chaBonus: 4,
  profBonus: 3,
};

// function skillBonusTest(ability) {
//   const skillAbility = abilityBonus[ability];
//   const totalBonus = skillAbility + abilityBonus.profBonus;
//   return totalBonus;
// }

// console.log(skillBonusTest('strBonus'));

function skillBonus(ability) {
  const skillAbility = abilityBonus[ability];
  const totalBonus = skillAbility + abilityBonus.profBonus;

  const bonusBox = document.getElementById('#acro-bonus');
  bonusBox.value = totalBonus;
}
skillBonus('dexBonus');
