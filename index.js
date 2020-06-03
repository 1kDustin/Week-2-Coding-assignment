
// variables with boolean values

let isHotOutside = true;
let isWeekday = false;
let hasMoneyInPocket = true;

// variables without boolean values

let costOfMilk = 2.65;
let moneyInWallet = 20;
let thirstLevel = 5;


// let shouldByIcecream = "mmmm Icecream!";

// if (isHotOutside && hasMoneyInPocket == true) {
//     console.log(shouldByIcecream)
// } else {
//     prompt("Not enough money!")
// }

let shouldBuyIcecream = isHotOutside && hasMoneyInPocket;
console.log(shouldBuyIcecream);

let willGoSwimming = isHotOutside && !isWeekday;
console.log(willGoSwimming);

let isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
console.log(isAGoodDay);