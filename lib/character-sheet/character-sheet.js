const abilityBonus = {
  strBonus: 3,
  dexBonus: 4,
  conBonus: 1,
  intBonus: 3,
  wisBonus: 2,
  chaBonus: 2,
  profBonusTest: 3,
};

// calculate proficiency bonus by value in "Level" field and display result in Proficiency Bonus field

document.getElementById('char-level').addEventListener('input', function (e) {
  const charLevel = parseFloat(document.getElementById('char-level').value);
  console.log(charLevel);
  if (charLevel <= 4) {
    profBonus = 2;
  }
  if (charLevel > 4 && charLevel <= 8) {
    profBonus = 3;
  }
  if (charLevel > 8 && charLevel <= 12) {
    profBonus = 4;
  }
  if (charLevel > 12 && charLevel <= 16) {
    profBonus = 5;
  }
  if (charLevel >= 17) {
    profBonus = 6;
  }
  document.getElementById('prof-box').value = profBonus;
});

// get and parse proficiency from the Prof Bonus field

const profBonusValue = parseFloat(document.getElementById('prof-box').value);
console.log(profBonusValue);

// Adds together values from ability bonus and the prof bonus if box is checked, just displays ability bonus if unchecked.

function skillBonus(ability, boxID, elementID) {
  const checkBox = document.querySelector(boxID);
  const skillAbility = abilityBonus[ability];
  const totalBonus = skillAbility + profBonusValue;
  checkBox.addEventListener('change', function () {
    if (this.checked) {
      document.getElementById(elementID).value = totalBonus;
    } else {
      document.getElementById(elementID).value = skillAbility;
    }
  });
}

// all these calls can probably be iterated with a loop or something, but this is what works for right now

skillBonus('dexBonus', '#acro-box', 'acrobatics');
skillBonus('dexBonus', '#animal-box', 'animal-handling');
skillBonus('dexBonus', '#arcana-box', 'arcana');
skillBonus('strBonus', '#athletics-box', 'athletics');
skillBonus('chaBonus', '#deception-box', 'deception');
skillBonus('intBonus', '#history-box', 'history');
skillBonus('wisBonus', '#insight-box', 'insight');
skillBonus('chaBonus', '#intimidation-box', 'intimidation');
skillBonus('intBonus', '#investigation-box', 'investigation');
skillBonus('wisBonus', '#medicine-box', 'medicine');
skillBonus('intBonus', '#nature-box', 'nature');
skillBonus('wisBonus', '#perception-box', 'perception');
skillBonus('chaBonus', '#performance-box', 'performance');
skillBonus('chaBonus', '#persuasion-box', 'persuasion');
skillBonus('intBonus', '#religion-box', 'religion');
skillBonus('dexBonus', '#sleight-box', 'sleight-of-hand');
skillBonus('dexBonus', '#stealth-box', 'stealth');
skillBonus('wisBonus', '#survival-box', 'survival');
