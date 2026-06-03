//What is Looping System
//Looping System is a system that allows you to repeat a block of code multiple times.
//There are three types of looping systems in JavaScript:
//1. For Loop
//2. While Loop
//3. Do While Loop

//Using "this" with Function Method Members & How to use Call , apply , bind methods.













//Callback Functions
//A callback function is a function passed as an argument into another function.
//A callback function is intended to be executed later.
//Example of Callback Function
function greet(name) {
    console.log("Hello " + name);
}
function processUserInput(callback) {
    var name = prompt("Please enter your name.");
    callback(name);
}
processUserInput(greet);

//Callback Hell
//Callback Hell is a situation where you have multiple nested callback functions, which can make your code difficult to read and maintain.
//Example of Callback Hell
function getData(callback) {
    setTimeout(function() {
        callback("Data received");
    }, 1000);
}
getData(function(data) {
    console.log(data);
    getData(function(data) {
        console.log(data);
        getData(function(data) {
            console.log(data);
        });
    });
});

//To avoid Callback Hell, you can use Promises or Async/Await.

//Understand type of calls
//1. Function Call
//2. Method Call
//3. Constructor Call
//4. Indirect Call
//1. Function Call
//A function call is a call to a function that is not a method of an object.
//Example of Function Call
function sayHello() {
    console.log("Hello");
}
sayHello();

//2. Method Call    
//A method call is a call to a function that is a method of an object.
//Example of Method Call
var person = {
    name: "John",
    sayHello: function() {
        console.log("Hello " + this.name);
    }
};
person.sayHello();

//3. Constructor Call
//A constructor call is a call to a function that is used to create an object.
//Example of Constructor Call
function Person(name) {
    this.name = name;
}
var person1 = new Person("John");
console.log(person1.name);

//4. Indirect Call
//An indirect call is a call to a function that is not a method of an object, but is called with a specific context.
//Example of Indirect Call
function sayHello() {
    console.log("Hello " + this.name);
}   
var person = {
    name: "John"
};
sayHello.call(person);
sayHello.apply(person);
var sayHelloBound = sayHello.bind(person);
sayHelloBound();

//Call types: Synchronous Calls & Its Disadvantages

//Synchronous Calls



//Synchronous Calls are calls that are executed in a sequential manner, where each call waits for the previous call to complete before executing.
//Disadvantages of Synchronous Calls:
//1. It can block the main thread, which can lead to a poor user experience.
//2. It can lead to callback hell, which can make your code difficult to read and maintain.
//3. It can lead to performance issues, as it can take a long time to execute multiple synchronous calls.

