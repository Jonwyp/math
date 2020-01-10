const add = function(...num) {
  return num.reduce((acc, cur) => acc + cur, 0);
};

const subtract = function(...num) {
  return num.reduce((acc, cur) => acc - cur, 0);
};

const multiply = function(...num) {
  return num.reduce((acc, cur) => acc * cur, 1);
};

const math = {
  add: add,
  subtract: subtract,
  multiply: multiply
};

module.exports = math;
