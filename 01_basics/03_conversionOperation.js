let score = 33;
let score1 = "33";
let score2 = "33abc";
let score3 = null;
let score4 = undefined;
let score5 = true;
let score6 = "Mohammad Aqib";

// console.log(typeof score);
// console.log(typeof score1);
// console.log(typeof score2);
// console.log(typeof score3);
// console.log(typeof score5);
// console.log(typeof score6);

let valueInNumber = Number(score);
let valueInNumber1 = Number(score2);
let valueInNumber2 = Number(score3);
let valueInNumber3 = Number(score4);
let valueInNumber4 = Number(score5);
let valueInNumber5 = Number(score6);

// console.log(typeof valueInNumber);
// console.log(valueInNumber1);
// console.log(valueInNumber2);
// console.log(valueInNumber3);
// console.log(valueInNumber4);
// console.log(valueInNumber5);

// "33" => 33
// "33abc" => NaN
// true =>1 ; false=> 0

let isLoggedIn = "Mohammad Aqib";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true , 0 => true
// "" => false
// "Mohammad Aqib" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
