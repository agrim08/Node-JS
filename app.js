require("./require.js");
const obj = require("./sum.js");
// whatever we export from sum.js will be returned from require method

var name = "Agrim";

var a = 10;
var b = 20;

obj.calculateSum(a, b); // you cannot access variable and methods directly by require()
obj.calculateDifference(a, b);

console.log(name);
