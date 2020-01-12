const add = function(...num) {
  return num.reduce((acc, cur) => acc + cur, 0);
};

const subtract = function(minuend, ...subtrahend) {
  return minuend - subtrahend.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(...num) {
  return num.reduce((acc, cur) => acc * cur, 1);
};

const divide = function(divisor, ...dividend) {
  if (divisor === 0) {
    throw new Error("The divisor cannot be zero");
  } else if (typeof(divisor) != "number") {
    throw new Error("Please enter a number");
  } else {
    return divisor / dividend.reduce((acc, cur) => acc * cur, 1);
  }
};

const powerOf = function(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

const math = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  powerOf: powerOf
};

module.exports = math;
