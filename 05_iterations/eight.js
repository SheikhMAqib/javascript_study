// reduce

// const myNumber = [1, 2, 3];

// const Total = myNumber.reduce(function (acc, currVal) {
//   console.log(`acc : ${acc} and currVal ${currVal}  `);
//   return acc + currVal; // Accumulator is the sum of all numbers in array and current value
// }, 0);

// console.log(Total);

// ----------******-----------------

// reduce with call back function arrow function

const myNumber = [1, 2, 3];

const Total = myNumber.reduce((acc, currVal) => acc + currVal, 0);

console.log(Total);

// ----------********--------------

const shoppingCart = [
  { name: "Milk", price: "$5" },
  { name: "Bread", price: "$6" },
  { name: "Eggs", price: "$7" },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
