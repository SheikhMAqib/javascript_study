// Immediately Invoked Function Expressions (IIFE)

// Just Function
function connect() {
  console.log(`DataBaseConnected`);
}
connect();

// -------------**************-----------------
// global variable scope removed krny ka leay IIFE use krty

(function connect() {
  console.log(`DataBaseConnected`);
})();
//      Must ; used function end krna hota  // ;
(() => {
  console.log(`connectedCheck2`);
})();

((NAMe) => {
  console.log(`connectedCheck3  ${NAMe}`);
})("MOhammadAqib");
