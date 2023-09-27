//  Primitive  // Reference // Call by value

// 7 types : String , Number , null ,Boolean , undefined , Symbol , Bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const tempIn = null;
let useEmail;

const id = Symbol("123");
const anotherID = Symbol("123");
// console.log(id === anotherID);

const BigNumber = 565425445425454545n;

// Reference (Non Primitive )

// Array, Objects, Functions;

// const hero = [alibaba, aliexpress, darazpk];

let myObj = {
  name: "Ali",
  age: 22,
};

const myFunc = function () {
  // console.log("Hello World");
};

// https://262.ecma-international.org/5.1/#sec-11.4.3

// --------------------------***** Memory *****--------------------------------

// Stack(Primitive), variable, Copy;

// Heap(Non - Primitive) Reference;

// -----------------******STACK********----------------------

let myYoutubename = "AkhlasinternationMart";

let anothername = myYoutubename;

anothername = "akhlas";

console.log(anothername);
console.log(myYoutubename);

// -----------------*******HEAP*******--------------------

let userOne = {
  email: "xzy@gmail.com",
  network: "zong",
};

let userTwo = userOne;

userTwo.email = "ajj8632@gmail.com";
userTwo.network = "jazz";

console.log(userOne.email);
console.log(userOne.network);

console.log(userTwo.email);
console.log(userTwo.network);
