// Dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

const myCreatedDate = new Date(2023, 6, 15);
const myCreatedDate1 = new Date(2023, 6, 15, 2, 3);

const myCreatedDate2 = new Date("2023-10-5");

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime());
// console.log(Math.floor(Date.now() / 1000));

let nowDate = new Date();
// console.log(nowDate.getDate());
// console.log(nowDate.getDay());
// console.log(nowDate.getFullYear());
// console.log(nowDate.getHours());

nowDate.toLocaleString("default", {
  weekday: "long",
});
console.log(nowDate);
