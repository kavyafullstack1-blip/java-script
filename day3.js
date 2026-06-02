//Async Function
// A function that returns a promise and can be used with the await keyword.
async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log);

//Generator Function
// A function that can be paused and resumed, allowing you to generate a sequence of values on the fly.
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = numbers();
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 

//recursive function
// A function that calls itself in order to solve a problem.
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//higher-order function
// A function that takes another function as an argument or returns a function as a result.
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5));

//nested function
// A function defined inside another function. 
// The inner function can access the variables and parameters of the outer function, 
// which allows for encapsulation and closure.
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}

const addTen = outerFun(10);
console.log(addTen(5));

//pure function
// A function that always produces the same output for the same input and has no side effects.
function pureAdd(a, b) {
  return a + b;
}
console.log(pureAdd(2, 3));