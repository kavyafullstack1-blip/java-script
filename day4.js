//Execution Context in JavaScript
//Everything in JavaScript is wrapped inside an execution context, which is an abstract concept (can be treated as a container) that holds all the information about the environment within which the current JavaScript code is being executed.

//Phases of the JavaScript Execution Context

//Memory Allocation Phase: In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. 
// In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigned undefined as a placeholder.
//Code Execution Phase: In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of Execution) of the Execution Context.

// Global Scoped letiable
let global_letiable = "global scope";

// First function...
function first_function() {
    return global_letiable;
}

// Second function...
function second_function() {
    return first_function();
}

console.log(second_function());

function main_function() {

    // letiable with Local Scope...    
    let a = 2;

    // Nested Function having Function Scope    
    let multiply = function () {

        // It can be accessed and altered as well
        console.log(a * 5);
    }

    // Will be called out when main_function gets called
    multiply();
}

// Display's the result...
console.log(main_function());

// Throws a reference error since it 
// is a locally scoped letiable
console.log(a);

// Throws a reference error since it 
// is a locally scoped function
multiplyBy2();

{
    let x = 13;
}
// Throws a reference error 
// since x is declared inside a block which 
// cannot be used outside the block
console.log(x);