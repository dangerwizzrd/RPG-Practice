const playerOne = {
  name: 'Zolda',
  class: 'Wizard',
  maxHp: 90,
  currentHp: 85,
  armorClass: 16,
  atkBonus: 7,
  coin: [
    {
      type: 'Platinum',
      amount: 132,
    },
    {
      type: 'Gold',
      amount: 767,
    },
    {
      type: 'Silver',
      amount: 3457,
    },
    {
      type: 'Copper',
      amount: 3456,
    },
  ],
  items: [
    {
      name: 'Drugs',
      amount: 5,
      description: 'Enough Xoop to kill an elephant!',
    },
    {
      name: "Dad's Pertrified Foot",
      amount: 1,
      description: 'Family Heirloom. Mitts off, kid!',
    },
  ],
  addItem(name, amount, description) {
    this.items.push({
      name,
      amount,
      description,
    });
  },
};

const playerTwo = {
  name: 'Tabitha',
  class: 'Paladin',
  maxHp: 90,
  currentHp: 85,
  armorClass: 19,
  atkBonus: 10,
  coin: [
    {
      type: 'Platinum',
      amount: 32,
    },
    {
      type: 'Gold',
      amount: 367,
    },
    {
      type: 'Silver',
      amount: 2053,
    },
    {
      type: 'Copper',
      amount: 1456,
    },
  ],
  items: [
    {
      name: "The Night's Edge",
      amount: 1,
      description: 'Best sword #1 4eva!',
    },
    {
      name: 'Dust',
      amount: 3,
      description: 'A fermented bone-meal narcotic for microdosing.',
    },
  ],
};

function addItem(player, name, amount, description) {
  player.items.push({
    name,
    amount,
    description,
  });
}

addItem(
  playerOne,
  'Prison Shank',
  1,
  "It's for shankin. Don't fuck with me kid!"
);
addItem(playerOne, 'Potion', 3, "I'm pretty sure this is just vodka.");
addItem(playerOne, 'Pocket Sand', 10, 'Yah! Pocket Sand!!!');
// console.log(items);

// adds or deducts coin by passing in the index as "typeNum" and the amount of the coin added/deducted
// typeNum: 0 = Platinum, 1 = Gold, 2 = Silver, 3 = Copper
function addCoin(player, typeNum, newCoin) {
  player.coin[typeNum].amount += newCoin;
  return player.coin[typeNum].amount;
}

function spendCoin(player, typeNum, spentCoin) {
  player.coin[typeNum].amount -= spentCoin;
  return player.coin[typeNum].amount;
}

addCoin(playerTwo, 1, 700);
spendCoin(playerTwo, 2, 1345);
// console.log(playerTwo.coin);

function getTotalGold(player) {
  const baseGold = player.coin[1].amount;
  const platToGold = player.coin[0].amount * 10;
  const silverToGold = Math.floor(player.coin[2].amount / 10);
  const copperToGold = Math.floor(player.coin[3].amount / 100);

  const totalGold = (
    baseGold +
    platToGold +
    silverToGold +
    copperToGold
  ).toFixed(0);
  return `${player.name} has about ${totalGold} gold pieces worth of coins.`;
}

console.log(getTotalGold(playerTwo));

// Should pull up item by plugging in array number, needs to be reworked to decrement item amount when called and return desc.
function useItem(player, itemNum) {
  const item = player.items[itemNum];
  item.amount--;
  return `${player.name} used ${item.name}! ${item.description}`;
}

console.log(useItem(playerOne, 4));
