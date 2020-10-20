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
      amount: 400,
    },
    {
      type: 'Platinum',
      amount: 140,
    },
    {
      type: 'Silver',
      amount: 3068,
    },
    {
      type: 'Copper',
      amount: 3570,
    },
  ],
  items: [],
  addItem(description, amount) {
    this.items.push({
      description,
      amount,
    });
  },
  addCoin(type, amount) {
    this.coin.push({
      type,
      amount,
    });
  },
  getTotalGold() {
    const baseGold = this.coin[0].amount;
    const platToGold = this.coin[1].amount * 10;
    const silverToGold = Math.floor(this.coin[2].amount / 10);
    const copperToGold = Math.floor(this.coin[3].amount / 100);

    const totalGold = baseGold + platToGold + silverToGold + copperToGold;
    return `${this.name} has about ${totalGold.toFixed(
      0
    )} gold pieces in total.`;
  },
};

playerOne.addItem('Prison Shank', 1);
playerOne.addItem('Potion', 3);

// playerOne.addCoin('Platinum', 69);
// playerOne.addCoin('Gold', 420);
// playerOne.addCoin('Silver', 6000);
// playerOne.addCoin('Copper', 5000);

console.log(playerOne.items);
console.log(playerOne.getTotalGold());
