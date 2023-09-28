// ---------------------*****Array*******-------------------

const myArr = [0, 1, 2, 3, 4, 5];

const myHeros = ["superman", " spiderman"];

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr[0]);

// ---------------------*****Array Method*******-------------------

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// myArr.shift();
// myArr.unshift(9);

// console.log(myArr.includes(1));
// console.log(myArr.indexOf(1));

const newArray = myArr.join();

// console.log(myArr);
// console.log(newArray);
// console.log(typeof newArray);

// ---------------------******Slice******Splice********-------------------

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);

console.log(myn2);
