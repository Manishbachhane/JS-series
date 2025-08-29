// Regular Function
function greet() {
  console.log("Hello, World!");
}

// Arrow Function
const add = (x, y) => x + y;

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("This is an IIFE");
})();

// Named Function Expression
const multiply = function(x, y) {
  return x * y;
};

//rest
const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

// Spread Operator
const nums = [1, 2, 3, 4];
console.log(sum(...nums));

//destructuring
const [first, second, ...rest] = nums;
console.log(first, second, rest);