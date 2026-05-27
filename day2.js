// A function is a reusable block of code that performs a specific task.
// It can take inputs (called parameters), perform some operations, and return an output (called the return value).
function read(name1) {   // 'name' is a parameter
  console.log("Hello " + name1);
}

read("kavya");  // "Alice" is the argument

// A function can have default parameters, which are used when no argument is provided for that parameter.
//If no value is passed, the function automatically uses the default value.

function greet(name = "Guest") {
  console.log("Hi, " + name);
}

greet();
greet("Keerti");

//When return executes, the function stops running at that point.
//The returned value can be stored in a variable or used directly.
function add(a, b) {
  return a + b; // returns the sum
}

let result = add(5, 10);
console.log(result);

//named functions
//A function that has its own name when declared.
//  It’s easy to reuse and debug because the name shows up in error messages or stack traces. 
function write() {
  return "programming is fun";
}
console.log(write());

//anonymous functions
//A function without a name. 
// It’s often used as a value, like when you assign it to a variable or pass it as an argument to another function.
//  It can be more concise and flexible, 
// but it may be harder to debug because it doesn’t have a name in error messages or stack traces.
const write1 = function() {
  return "programming is fun";
}


//Function Expression
// When you assign a function (can be named or anonymous) to a variable. 
// The function can then be used by calling that variable.
const add1 = function(a, b) {
  return a + b;
};
console.log(add1(2, 3));

//Arrow functions
//A new way to write functions using the => syntax. They are shorter and do not have their own this binding,
//  which makes them useful in some cases.
const add2 = (a, b) => a + b;
console.log(add2(2, 3));

//Immediately Invoked Function Expression 
//A function that runs as soon as it is defined. 
// It is often used to create a new scope and avoid polluting the global namespace.
(function () {
    console.log("This runs immediately!");
})();

//callback functions
//A function that is passed as an argument to another function and is executed after some operation is completed. 
// It is often used for asynchronous programming, event handling, or functional programming.
function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));

//Constructor Function
// A function that is used to create objects. 
// It is called with the new keyword and initializes the properties of the object using this.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const user = new Person("Neha", 22);
console.log(user.name);
console.log(user.age);
console.log(user); 

//