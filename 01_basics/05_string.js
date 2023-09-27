const name = "MohammadAqib";
const repoCount = 50;

// console.log(name + repoCount);

// console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("igi-1-counter");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("c"));

const newString = gameName.substring(0, 5);
// console.log(newString);

const anotherString = gameName.slice(-13, 5);
// console.log(anotherString);

const newStringOne = "          AAAAAAAAAAAAAAAAAAAA         ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://www.piaic.org/about%20html";

console.log(`${url}`.replace("%20", ""));

console.log(`${url}`.includes("ssada"));

console.log(gameName.split("-"));
