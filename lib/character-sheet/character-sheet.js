const abilityBonus = {
  strBonus: 3,
  dexBonus: 4,
  conBonus: 1,
  intBonus: 3,
  wisBonus: 2,
  chaBonus: 2,
  profBonus: 3,
};

// calculate proficiency bonus by level value in dropdown list

function getProficiency() {
  const levelDropdown = parseInt(document.getElementById('char-level'));
  const charLevel = levelDropdown.value;
  document.getElementById('prof-box').value = profBonus;
  if (charLevel <= 4) {
    profBonus = 2;
  }
  if (charLevel <= 8) {
    profBonus = 3;
  }
  if (charLevel <= 12) {
    profBonus = 4;
  }
  if (charLevel <= 16) {
    profBonus = 5;
  }
  if (charLevel >= 17) {
    profBonus = 6;
  }
}

getProficiency();

// get proficiency from HTML element

// Test If/Else for checkbox to add Proficiency bonus, id as an arugement

function skillBonus(ability, boxID, elementID) {
  const checkBox = document.querySelector(boxID);
  const skillAbility = abilityBonus[ability];
  const totalBonus = skillAbility + abilityBonus.profBonus;
  checkBox.addEventListener('change', function () {
    if (this.checked) {
      document.getElementById(elementID).value = totalBonus;
    } else {
      document.getElementById(elementID).value = skillAbility;
    }
  });
}

// all these calls can probably be iterated with a loop or something

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

// document
//   .getElementsByClassName('skill-box')
//   .addEventlistener('change', function (e) {
//     filters.addProficiency = e.target.checked;
//   });
