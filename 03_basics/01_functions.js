// console.log("a");
// console.log("q");
// console.log("i");
// console.log("b");

function sayMyName() {
  //   console.log("a");
  //   console.log("q");
  //   console.log("i");
  //   console.log("b");
}

// sayMyName  ******  // function Reference
// sayMyName()  ******  // function Execute

sayMyName(); // a q i b
// --------***************--------------

// function name(parameters) {}
// name(argument);

// --------***************--------------

// function addTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }
// addTwoNumber(1000, 5);

// --------***************--------------

function addTwoNumber(number1, number2) {
  // let result = number1 + number2;
  // return result;

  //   or

  return number1 + number2;
}

const result = addTwoNumber(3, 4);
// console.log(result);
// console.log("Result : ", result);

// --------***************--------------

function loginUserMessage(username) {
  //   if (username === undefined) {
  if (!username) {
    console.log("please  enter a username");
    return;
  }
  return `${username} just Logged in `;
}

// console.log(loginUserMessage());
// console.log(loginUserMessage(""));
// console.log(loginUserMessage("Aqib"));

// ------------------*********************----------------

function loginUserMessage(username = "Farzi Naam likha Hai") {
  if (!username) {
    console.log("please  enter a username");
    return;
  }
  return `${username} just Logged in `;
}

// console.log(loginUserMessage("Your Name"));

// -------------***********REST_OPERATOR********------------------
// ...num1

function totalCartPrice(num) {
  return num;
}

// console.log(totalCartPrice(2020, 2030, 2040));
// ------------------------------------------------------------
// function totalCartPrice(...num1) {
function totalCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(totalCartPrice(2020, 2030, 2040, 2050, 2060, 2070, 2080, 2090));

const user = {
  course: "JavaScript",
  price: 155,
};

function handleObject(anyObject) {
  //   console.log(`username is ${anyObject.course} and Price ${anyObject.price}`);
}

handleObject(user);

// -------------------------**************--------------------

const myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function secValue(getArray) {
  return getArray[5];
}

console.log(secValue(myNewArray));
