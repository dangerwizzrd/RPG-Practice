const playerOne = {
  name: 'Zolda',
  class: 'Wizard',
  maxHp: 90,
  currentHp: 85,
  armorClass: 16,
  atkBonus: 7,
  coin: [
    {
      type: 'Gold',
      amount: 767,
    },
    {
      type: 'Platinum',
      amount: 132,
    },
    {
      type: 'Silver',
      amount: 6457,
    },
    {
      type: 'Copper',
      amount: 35456,
    },
  ],
  items: [],
  addItem(description, amount) {
    this.items.push({
      description,
      amount,
    });
  },
};

function addGold(newGold) {
  playerOne.coin[0].amount += newGold;
  return playerOne.coin[0].amount;
}

function getTotalGold() {
  const baseGold = playerOne.coin[0].amount;
  const platToGold = playerOne.coin[1].amount * 10;
  const silverToGold = Math.floor(playerOne.coin[2].amount / 10);
  const copperToGold = Math.floor(playerOne.coin[3].amount / 100);

  const totalGold = (
    baseGold +
    platToGold +
    silverToGold +
    copperToGold
  ).toFixed(0);
  return `${playerOne.name} has about ${totalGold} gold pieces in total.`;
}

console.log(addGold(900));
console.log(getTotalGold());

//console.log(playerOne.items);
// playerOne.addItem('Prison Shank', 1);
// playerOne.addItem('Potion', 3);
// playerOne.addItem('Pocket Sand', 10);
