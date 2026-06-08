//call back function 
//A callback function is a function passed as an argument into another function.
//A callback function is intended to be executed later.

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Ajay", sayBye);

//call back hell
//As more nested callbacks are added, the code becomes harder to read, maintain, and reason about.
//  This can lead to bugs and difficulties in debugging.
function asyncFunction1(callback) {
  setTimeout(() => {
    console.log("Async Function 1 Done");
    callback();
  }, 1000);
}

function asyncFunction2(callback) {
  setTimeout(() => {
    console.log("Async Function 2 Done");
    callback();
  }, 1000);
}
function asyncFunction3(callback) {
  setTimeout(() => {
    console.log("Async Function 3 Done");
    callback();
  }, 1000);
}

//Asynchronous Callbacks
//Asynchronous callbacks are executed at a later time, allowing the main program to continue running without waiting.
//This is essential for preventing the application from freezing during long-running tasks like network requests.
// A function that takes a callback as an argument and invokes it
function doSomethingAsync(callback) {
    setTimeout(function() {
      console.log("Async operation done!");
      callback();
    }, 1000);
  }

  // Define a callback function
  function callbackFunction() {
    console.log("Callback has been executed!");
  }

  // Calling the main function with the callback
  doSomethingAsync(callbackFunction);

//Synchronous Callbacks are executed immediately within the outer function, blocking further operations until completion.
//Array methods like map(), filter(), and forEach() use synchronous callbacks.
// A function that takes a callback as an argument and invokes it
function performOperation(callback) {
  console.log("Performing the operation...");
  callback();
}

// Define a callback function
function callbackFunction() {
  console.log("Callback has been executed!");
}

// Calling the main function with the callback
performOperation(callbackFunction);
//dis of synchronous call back
//Blocking Behavior: A single time-consuming task can freeze the entire application, affecting user experience. 
// Poor Scalability: Inefficient for applications that handle large volumes of data or requests.



//Asynchronous JavaScript is a programming approach that enables the non-blocking execution of tasks, allowing concurrent operations, improved responsiveness, and efficient handling of time-consuming operations in web applications, 
// JavaScript is a single-threaded and synchronous language. 
// The code is executed in order one at a time, But Javascript may appear to be asynchronous in some situations.

//Handle Asynchronous calls by callbacks
//Callbacks are functions passed as arguments to be executed after an asynchronous operation completes. 
// They are used in asynchronous JavaScript to handle responses and ensure non-blocking execution,

function myFunction(callback) {
    setTimeout(() => {
        const data = { name: "Aman", age: 21 };
        callback(data);
    }, 3000);
}
myFunction((data) => {
    console.log("Data:", data);
});