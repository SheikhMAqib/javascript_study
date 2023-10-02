// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
  name: "Mohammad Aqib",
  "full name": "SheikhMohammadaqib",
  age: 31,
  [mySym]: "mykey1",
  location: "Sahiwal",
  email: "sheikhmohammadaqib@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "sunday "],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym])

jsUser.email ="ajj8632@gmail.com",
// Object.freeze(jsUser) 
jsUser.email = "490perday@gmail.com"

// console.log(jsUser)


jsUser.greeting = function(){
  console.log("Hello Js User");
},

jsUser.greetingTwo = function(){
  console.log(`Hello Js User, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())