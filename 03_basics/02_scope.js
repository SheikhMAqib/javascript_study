//  var c = 300;

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER :", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// -----------************-----------

function one() {
  const userName = "Mohammad Aqib";
  function two() {
    const website = "youtube";
    // console.log(userName);
  }
  // console.log(website);  // error
  two();
}
// one();

// -----------************-----------

if (true) {
  const username = "Munsif";
  if (username === "Munsif") {
    const website = " facebook";
    // console.log(username + website);
  }
}

// -----------************-----------

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

// -----------************-----------

// addTwo(5); // error
const addTwo = function (num) {
  return num + 1;
};
