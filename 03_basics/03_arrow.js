// ----------------******THIS********---------------
// this keyword use in Object

const user = {
  userName: "John",
  price: 30,

  welcomeMessage: function () {
    // console.log(` ${this.userName} , welcome to website`);
    // console.log(this); // current contest
  },
};

// user.welcomeMessage();
// user.userName = "Sam";
// user.welcomeMessage();

// console.log(this); // current contest

// ---------------*********-----------------------
// this keyword not use in function

const chai = function () {
  let userName = "Jhon Sam";
  //   console.log("chai :", this.userName);
};

// chai();

// --------------------**Arrow Function******----------------

const chai1 = () => {
  let userName = "Jhon Sam";
  //   console.log("chai1 :", this.userName);
  //   console.log("chai1 :", this);
};

// chai1();

// --------------**********************------------------------

// Basic Arrow Function
// Explicit Return   //jab aap return keyword use krty ho

const addOne = (num1, num2) => {
  return num1 + num2;
};
console.log("addOne :", `${addOne(5, 5)}`);
console.log("addOne :", addOne(1, 6));

// ------------*****************------------

// implicit Return

const addTwo = (num1, num2) => num1 + num2;

// implicit Return with use in React

// const addThree = (num1, num2) => (num1 + num2);

// implicit Return in Object

const addFour = (num1, num2) => ({ userName: "Ahmad" });

console.log("addtwo :", addTwo(11, 11));
console.log("addThree :", addThree(11, 12));
console.log("addFour :", addFour(11, 12));
