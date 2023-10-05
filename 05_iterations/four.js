// Object ForIn

const myObject = {
  js: "javascript",
  Cpp: "C++",
  ruby: "Ruby",
  swift: "swift by apple",
};
// object & Forin

for (const key in myObject) {
  //   console.log(myObject[key]);;
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

// ---------------------******************----------------------
// array in ForIn

const programming = ["js", "py", "rb", "cpp", "java"];

for (const key in programming) {
  console.log(programming[key]);
}

// const map = new Map();             // <ap not use in object forin

// map.set("PAK", "Pakistan") ;
// map.set("IN", "India");
// map.set("Fr", "France");
// map.set("PAK", "Pakistan");

// for (const key in map) {
//   console.log(key);
// }
