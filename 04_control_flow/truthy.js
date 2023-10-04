// const userEmail = "Sheikh@MohammadAqib.ai";
// const userEmail = "";
const userEmail = [];

if (userEmail) {
  console.log("Got user Email ");
} else {
  console.log("Don't have user Email");
}

// -----------***********------------------

falsy Value

// false , 0 ,-0 ,BigInt 0n ,"", null ,undefined, NaN

truthy Value

// "0" , "false" ," " , [] ,{}, function(){}

// ---------------**********--------------

// [array] used in truthy

// if (userEmail.length === 0) {
//   console.log("Array is Empty");
// }

// ---------**********-----------

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("Object is Empty");
}

// -----------*******************----------------

false == 0   // true
false == ""  // true
0 == ""      // true
