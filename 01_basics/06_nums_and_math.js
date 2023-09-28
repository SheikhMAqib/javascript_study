const score = 400;
// console.log(score);
const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8953121;
// console.log(otherNumber.toPrecision(3));

const hunderds = 1000000;
// console.log(hunderds.toLocaleString());
// console.log(hunderds.toLocaleString("en-PK"));

// ------------------******Maths******------------------------

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(8.6446));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(0, 23, 34, 5, 6, 7, 8, 9));
// console.log(Math.max(4, 23, 34, 5, 6, 7, 8, 9));

// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// // console.log((Math.random() * 10 )+ 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
