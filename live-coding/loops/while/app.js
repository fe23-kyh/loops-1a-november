/**
 * For-loop: Använd då du går från ett värde upp till ett annat värde, ex. vid numeriska följder, eller att gå igenom en lista
 * 
 * While-loop: Upprepa tills att villkoret inte längre är uppfyllt
 */


// let i = 0;

// while(i < 20) {
//   console.log(i);

//   i++;
// }

let stopValue = 5;
let diceValue = -1;
let counter = 0;

while(stopValue != diceValue) {

  diceValue = Math.floor((Math.random() * 6)) + 1
  console.log(diceValue);

  counter++;
}

console.log("It took " + counter + " times to get a " + stopValue);