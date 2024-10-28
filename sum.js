console.log("Sum module executed");

const calculateSum = function (a, b) {
  const sum = a + b;
  console.log(sum);
};
const calculateDifference = function (a, b) {
  const difference = a - b;
  console.log(difference);
};

module.exports = {
  calculateDifference,
  calculateSum,
};
