// For Each loop

const coding = ["python", "java", "ruby", "js", "cpp"];

// forEach in callbackfn function keyword

// coding.forEach(function (item) {
// console.log("Function keyword :", item);
// });

// -----*-----------*----

// forEach in Arrow function

coding.forEach((item) => {
  //   console.log("Arrow Function: ", item, "\n"); // \n is for new line
});

// -----*-----------*----

function printMe(item) {
  //   console.log("with : ", item, "\n");
}

coding.forEach(printMe);

// -----*-----------*----

coding.forEach((item, index, Array) => {
  //   console.log(item, index, Array);
});

// -----*-----------*----

// ForEach in array in Object

const myCoding = [
  {
    languageName: "Javascript",
    languageFile: "js",
  },
  {
    languageName: "Java",
    languageFile: "java",
  },
  {
    languageName: "Python",
    languageFile: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
