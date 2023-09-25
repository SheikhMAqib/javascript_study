const accountId = 5978852;
let accountEmail = "ajj8632@gmail.com";
var accountPassword = "<PASSWORD>";
accountCity = "Sahiwal";
let accountState;
// accountId = 2; const not allowed

accountEmail = "sheikhmohammadAqib@gmial.com";
accountPassword = "alibaba";
accountCity = "Haripur";

console.log(accountId);

/* Prefer not to use var because of issue in block scope and functional scope */

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
