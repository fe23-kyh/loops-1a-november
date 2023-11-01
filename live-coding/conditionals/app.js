let a = 50;
let b = 200;

let base = 75;

// if(a > b) {
//   console.log("A is highest and has a value of: " + a);
// } 
// else if(b > a) {
//   console.log("B is highest and has a value of: " + b);
// } 
// else {
//   console.log("A is equal to B and has a value of: " + a);
// }

// UPPGIFT till 09:00: Skriv om programmet ovan så att den skriver ut hur mycket större det största talet är

// if(a > b) {
//   console.log("A is highest and has a value of: " + a);
//   console.log("A is " + (a - b) + " greater than b");
// } 
// else if(b > a) {
//   console.log("B is highest and has a value of: " + b);
//   console.log("A is " + (b - a) + " greater than B");
// } 
// else {
//   console.log("A is equal to B and has a value of: " + a);
// }

// UPPGIFT till 09:30: Skriv om programmet så att den skriver ut hur långt A och B är ifrån basnummret
// Tänk på att avståndet från A eller B till basnummret inte ska bli negativt

// Alternativ 1
// let aDiff = Math.abs(a - base);
// let bDiff = Math.abs(b - base);


// Alternativ 2
let aDiff = a - base;
let bDiff = b - base;

// if(aDiff < 0) {
//   aDiff = aDiff * -1;
// }

// if(bDiff < 0) {
//   bDiff = bDiff * -1;
// }

// Alternativ 2.1
aDiff = aDiff < 0 ? aDiff * -1 : aDiff;
bDiff = bDiff < 0 ? bDiff * -1 : bDiff;


console.log(aDiff, bDiff);

// Ta fram det största avståndet
if(aDiff > bDiff) {
  console.log("A is highest and has a value of: " + aDiff);
} 
else if(bDiff > aDiff) {
  console.log("B is highest and has a value of: " + bDiff);
} 
else {
  console.log("A is equal to B and has a value of: " + aDiff);
}

// aDiff < bDiff ? console.log("bDiff is greatest")
//   : aDiff > bDiff ? console.log("aDiff is greatest")
//     : console.log("aDiff and bDiff is equal");

