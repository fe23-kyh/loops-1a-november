for(/* initial value */; /* conditional */ false; /* steg-regel */ ) {
  // block that iterates
}

// for(let i = 0; i < 20; i = i + 4) {
//   console.log(i + 1);
// }

// Uppgift till 10:30: Skapa en for-loop som börjar på 20, slutar på 40, och stegrar 5
// utskrifter 20, 25, 30, 35, 40
// for(let i = 20; i <= 40; i = i + 5) {
//   console.log(i);
// }

// UPPGIFT till 11:10: Med denna loop nedanför, gör så att utskriften blir 22, 26, 30, 34, 38
// OBS. Man får INTE ändra på villkoren, steg-reglen eller initial värdet.

for(let i = 0; i < 40; i++) { // <-- Efter denna rad

  // Får endast ändra på innehållet i loop blocket
  // if(i + 22 <= 38 && i % 4 == 0) {
  //   console.log(i + 22);
  // } 

  let value = (i * 4) + 22;
  if(value <= 38) {
    console.log(value);
  }

} // <-- Innan denna rad