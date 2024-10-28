require("./require.js");
const { calculateSum, calculateDifference } = require("./sum.js");
//* import { calculateDifference, calculateSum } from "./sum.js";
// whatever we export from sum.js will be returned from require method

var name = "Agrim";

var a = 10;
var b = 20;

calculateSum(a, b); // you cannot access variable and methods directly by require()
calculateDifference(a, b);

console.log(name);
