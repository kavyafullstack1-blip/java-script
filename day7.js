//loops
//for loop
// A for loop consists of three parts: the initialization, the condition, and the increment/decrement.
// The initialization is executed once at the beginning of the loop, and it is typically used to declare and initialize a loop counter variable.
// The condition is evaluated before each iteration of the loop, and if it evaluates to true, the loop body is executed. If it evaluates to false, the loop terminates.
// The increment/decrement is executed after each iteration of the loop body, and it is typically used to update the loop counter variable.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop
// A while loop continues to execute as long as the specified condition is true.
// In a while loop, the condition is evaluated before the execution of the loop body, so if the condition is false at the beginning, the loop body will not execute at all.
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//do-while loop
// A do-while loop is similar to a while loop, but it guarantees that the loop body will be executed at least once, as the condition is evaluated after the execution of the loop body.
// In a do-while loop, the loop body is executed first, and then the condition is evaluated. If the condition is true, the loop continues; if it is false, the loop terminates.
// In a do-while loop, the loop body is executed at least once, even if the condition is false at the beginning.
//Example of a do-while loop:
let k = 0;  
do {
    console.log(k);
    k++;
} while (k < 5);

//for...in loop
// A for...in loop is used to iterate over the enumerable properties of an object. It allows you to access the keys of an object and perform operations on them.
// In a for...in loop, the loop variable is assigned the key of each property in the object, and you can access the corresponding value using bracket notation.
//Example of a for...in loop:
let person = { 
    name: "Alice",
    age: 25
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//for...of loop
// A for...of loop is used to iterate over iterable objects, such as arrays, strings, maps, sets, and more. It allows you to access the values of an iterable object directly without needing to use an index or key.
// In a for...of loop, the loop variable is assigned the value of each element in the iterable object, and you can perform operations on it directly.
//Example of a for...of loop:
let myArray = [1, 2, 3, 4, 5];
for (let value of myArray) {
    console.log(value);
}
 
//break statement
// The break statement is used to exit a loop prematurely when a certain condition is met. When the break statement is executed, the loop terminates immediately, and the program continues with the next statement after the loop.
//Example of using break in a for loop:
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exits the loop when i is 5
    }
    console.log(i);
}

//continue statement
// The continue statement is used to skip the current iteration of a loop and move on to the next iteration. When the continue statement is executed, the rest of the code in the current iteration is skipped, and the loop proceeds with the next iteration.
//Example of using continue in a for loop:
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skips the rest of the loop body for even numbers
    }
    console.log(i); // only odd numbers will be printed
}
//if statement
let age = 20;   
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
//switch statement
// The switch statement is a control flow statement that allows you to execute different blocks of code based on the value of an expression. 
// It is often used as an alternative to multiple if...else statements when you have a variable that can take on multiple values and you want to execute different code for each value.
let day = "Monday"; 
switch (day) {
    case "Monday":
        console.log("It's Monday!");
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
    default:
        console.log("It's another day!");
}

//else if statement
// The else if statement is used to specify a new condition to test if the previous condition(s) were false. It allows you to chain multiple conditions together and execute different blocks of code based on which condition is true.
//Example of using else if in an if statement:
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}   

//if...else statement
// The if...else statement is a fundamental control structure in JavaScript that allows you to execute different blocks of code based on a condition. It consists of an if block that contains the code to be executed if the condition is true, and an optional else block that contains the code to be executed if the condition is false.
//Example of an if...else statement:
let isRaining = true;
if (isRaining) {
    console.log("Don't forget to take an umbrella!");
} else {
    console.log("Enjoy the sunny weather!");
}

//Ternary operator
// The ternary operator is a shorthand way of writing an if...else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax for the ternary operator is: condition ? expressionIfTrue : expressionIfFalse.
//Example of using the ternary operator:
let isEven = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log(isEven(4)); // Output: "Even"
console.log(isEven(7)); // Output: "Odd"

//Understanding loops and conditional statements is essential for controlling the flow of your JavaScript code, allowing you to execute different blocks of code based on certain conditions or to repeat actions until a specific condition is met. 
// These constructs are fundamental for writing efficient and effective code in JavaScript.

//Comparison and Logical Operators
//Comparison operators
// Comparison operators are used to compare two values and return a boolean result (true or false) based on the comparison. The most common comparison operators include: == (loose equality), === (strict equality), != (loose inequality), !== (strict inequality), > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to).
//Example of using comparison operators:
let a = 5;
let b = "5";    
console.log(5 == "5"); // Output: true - loose equality, type coercion occurs
console.log(5 === "5"); // Output: false - strict equality, no type coercion
console.log(5 === 5); // Output: true - equal value and equal type
console.log(5 != "5"); // Output: false - loose inequality, type coercion occurs
console.log(5 !== "5"); // Output: true - strict inequality, no type coercion
console.log(5 !== 5); // Output: false - not equal value or not equal type
console.log(5 > 3); // Output: true
console.log(5 < 3); // Output: false
console.log(5 >= 5); // Output: true    
console.log(5 <= 4); // Output: false
//Logical operators
console.log(true && false); // Output: false - logical AND
console.log(true || false); // Output: true - logical OR
console.log(!true); // Output: false - logical NOT
console.log(!false); // Output: true - logical NOT  
//Understanding comparison and logical operators is crucial for making decisions in your code, as they allow you to compare values and combine conditions to control the flow of your program effectively.

// Errors & How to Handle Them
//Syntax errors
//Syntax errors occur when the code violates the rules of the JavaScript language, such as missing parentheses, brackets, or semicolons.    
//Example of a syntax error:
// console.log("Hello, world!" // Missing closing parenthesis   
//Reference errors
//Reference errors occur when you try to access a variable or function that has not been declared or is out of scope.    
//Example of a reference error:
console.log(myVariable); // myVariable is not defined
//Type errors
//Type errors occur when you try to perform an operation on a value of the wrong type, such as calling a non-function or accessing a property of undefined.
//Example of a type error:
let num = 5;
num(); // num is not a function

//Range errors
//Range errors occur when a value is not within the expected range, such as trying to create an array with a negative length.
//Example of a range error:
let arr = new Array(-1); // Invalid array length


//Handling errors with try...catch
// You can handle errors in JavaScript using try...catch blocks, which allow you to catch and manage exceptions that occur during the execution of your code.
//Example of using try...catch to handle errors:
try {
    console.log(myVariable); // This will throw a reference error
} catch (error) {
    console.error("An error occurred: " + error.message);
}
//Handling errors with throw
// You can throw custom errors using the throw statement, which allows you to create your own error messages and handle specific error conditions in your code.
//Example of throwing a custom error:
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
try {
    console.log(divide(10, 0)); // This will throw an error
} catch (error) {   
    console.error("An error occurred: " + error.message);
}
//Understanding errors and how to handle them is essential for writing robust and reliable JavaScript code, as it allows you to gracefully manage unexpected situations and prevent your application from crashing. 
//Using try...catch blocks and throwing custom errors can help you identify and resolve issues in your code effectively.
