const playerOne = {
  name: 'Zolda',
  class: 'Wizard',
  maxHp: 90,
  currentHp: 85,
  armorClass: 16,
  atkBonus: 7,
  coin: { platinum: 10, gold: 500, silver: 2000, copper: 2000 },
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
};

const playerTwo = {
  name: 'Tabitha',
  class: 'Paladin',
  maxHp: 90,
  currentHp: 85,
  armorClass: 19,
  atkBonus: 10,
  coin: { platinum: 10, gold: 500, silver: 2000, copper: 2000 },
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

// ITEMS

// adds an item to the players inventory with a name, amount and description.
function addItem(player, name, amount, description) {
  player.items.push({
    name,
    amount,
    description,
  });
}

// passes in item's index through itemNum, decrements the amount by 1 and then prints a message with the item's description.
function useItem(player, itemNum) {
  const item = player.items[itemNum];
  item.amount--;
  return `${player.name} used ${item.name}! ${item.description}`;
}

addItem(
  playerOne,
  'Prison Shank',
  1,
  "It's for shankin. Don't fuck with me kid!"
);
addItem(playerOne, 'Potion', 3, "I'm pretty sure this is just vodka.");
addItem(playerOne, 'Pocket Sand', 10, 'Yah! Pocket Sand!!!');

console.log(useItem(playerOne, 4));
// console.log(items);

// COINS

// adds coin by passing in the player, the property as "coinName" and the amount of the coin you'd like to add
function addCoin(player, coinName, newCoin) {
  player.coin[coinName] += newCoin;
  return player.coin[coinName];
}
// deducts coins in much the same way as above
function spendCoin(player, coinName, spentCoin) {
  player.coin[coinName] -= spentCoin;
  return player.coin[coinName];
}

addCoin(playerTwo, 'gold', 700);
spendCoin(playerTwo, 'silver', 1345);
addCoin(playerOne, 'platinum', 69);

// converts each coin type into it's Gold value and then adds them together for an estimated value of the total purse
function getTotalGold(player) {
  const baseGold = player.coin.gold;
  const platToGold = player.coin.platinum * 10;
  const silverToGold = Math.floor(player.coin.silver / 10);
  const copperToGold = Math.floor(player.coin.copper / 100);

  const totalGold = (
    baseGold +
    platToGold +
    silverToGold +
    copperToGold
  ).toFixed(0);
  return `${player.name} has about ${totalGold} gold pieces worth of coins.`;
}

console.log(getTotalGold(playerOne));
console.log(playerOne.coin);
console.log(getTotalGold(playerTwo));
console.log(playerTwo.coin);
