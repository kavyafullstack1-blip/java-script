//usage of this keyword
//this keyword is used to refer to the current object
//it can be used to access the properties and methods of the current object 
//In a function, this refers to the global object (window in browsers)
function myFunction() {
    console.log(this); // Output: Window object
}
myFunction();
//In an object method, this refers to the object itself
let myObject = {
    name: "Alice",
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }   
};
myObject.greet(); // Output: "Hello, my name is Alice"

//In a constructor function, this refers to the newly created object
function Person(name) {
    this.name = name;
}   
let person1 = new Person("Bob");
console.log(person1.name); // Output: "Bob"
//In an arrow function, this is lexically bound,
//  meaning it takes the value of this from the surrounding context
let myArrowFunction = () => {
    console.log(this); // Output: Window object 
    // (or the surrounding context if used inside another function)
};
myArrowFunction();
//The value of this can be changed using call(), apply(), or bind() methods
let anotherObject = {
    name: "Charlie"
};
myObject.greet.call(anotherObject); // Output: "Hello, my name is Charlie" - 
// this is set to anotherObject using call()  
myObject.greet.apply(anotherObject); // Output: "Hello, my name is Charlie" -
//  this is set to anotherObject using apply()
let boundGreet = myObject.greet.bind(anotherObject);
boundGreet(); // Output: "Hello, my name is Charlie" - this is set to anotherObject using bind()            

//Understanding the behavior of this is crucial for working with objects and functions in JavaScript, as it affects how properties and methods are accessed and how functions are executed in different contexts.


//Function Property Members & Prototype
//In JavaScript, functions are first-class objects, which means they can have properties and methods just like any other object.
function myFunction() {
    console.log("Hello, World!");
}
//Function properties
myFunction.name; // Output: "myFunction" - the name of the function
myFunction.length; // Output: 0 - the number of parameters the function expects
//Function prototype
myFunction.prototype.greet = function () {
    console.log("Hello from the prototype!");
};
myFunction.prototype.greet(); // Output: "Hello from the prototype!" - accessing the greet method from the prototype
//The prototype property of a function is an object that is shared among all instances created by that function when used as a constructor.
function Person(name) {
    this.name = name;
}   
Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
}
let person2 = new Person("Dave");
person2.greet(); // Output: "Hello, my name is Dave" - accessing the greet method from the prototype
//Understanding function properties and prototypes is essential for working with functions and objects in JavaScript, as it allows you to create reusable code and share functionality among instances. 
//The prototype chain is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects, enabling a powerful and flexible way to create and manage objects in the language.
//In JavaScript, every object has a prototype, which is another object that it inherits properties and methods from.
//When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null)
let obj1 = {
    name: "Eve"
};
console.log(obj1.toString()); // Output: "[object Object]" - toString is inherited from the Object prototype
//You can also create your own prototype chain by setting the prototype of an object to another object
let obj2 = Object.create(obj1);
console.log(obj2.name); // Output: "Eve" - name is inherited from obj1 through the prototype chain
//Understanding the prototype chain is crucial for working with objects in JavaScript, as it allows you to create complex objects and share functionality across different objects without having to duplicate code.    
//In summary, the this keyword, function properties, and prototypes are fundamental concepts in JavaScript that enable powerful object-oriented programming and functional programming paradigms. They allow you to create reusable code, manage object behavior, and understand how functions and objects interact in different contexts.
//In JavaScript, the this keyword, function properties, and prototypes are fundamental concepts that play a crucial role in how functions and objects work. Understanding these concepts is essential for writing effective and efficient JavaScript code.
//In JavaScript, the this keyword refers to the current execution context of a function or method. It can refer to different objects depending on how the function is called. For example, in a regular function, this refers to the global object (window in browsers), while in an object method, this refers to the object itself. The value of this can also be explicitly set using call(), apply(), or bind() methods.
//Function properties are special properties that functions have in JavaScript. For example, the name property returns the name of the function, and the length property returns the number of parameters the function expects. These properties can be useful for debugging and introspection.
//Prototypes are a fundamental part of JavaScript's object system. Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from. When you access a property or method on an object, JavaScript first looks for it on the object itself, and if it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null). This allows for powerful inheritance and code reuse in JavaScript.
//Overall, understanding the this keyword, function properties, and prototypes is essential for working with functions and objects in JavaScript, as they allow you to create reusable code, manage object behavior, and understand how functions and objects interact in different contexts.   

// Using "this" with Function Method Members & How to use Call , apply , bind methods
//In JavaScript, the this keyword can be used in conjunction with function method members to access properties and methods of the current object. The call(), apply(), and bind() methods are used to explicitly set the value of this when calling a function.
//The call() method calls a function with a given this value and arguments provided individually.
function greet() {
    console.log("Hello, my name is " + this.name);
}
let person3 = { name: "Alice" };
greet.call(person3); // Output: "Hello, my name is Alice" - this is set to person3 using call()
//The apply() method is similar to call(), but it takes an array of arguments instead of individual arguments.
greet.apply(person3); // Output: "Hello, my name is Alice" - this is set to person3 using apply()
//The bind() method creates a new function that, when called, has its this keyword set to the provided value.
let boundGreet1 = greet.bind(person3);
boundGreet1(); // Output: "Hello, my name is Alice" - this is set to person3 using bind()
//Using call(), apply(), and bind() allows you to control the context in which a function is executed, which can be particularly useful when working with event handlers, callbacks, or when you want to borrow methods from other objects. 
//Understanding how to use the this keyword with function method members and the call(), apply(), and bind() methods is essential for writing flexible and reusable JavaScript code, as it allows you to manage the execution context of functions and access properties and methods of different objects as needed.
//In summary, the this keyword, function properties, and prototypes are fundamental concepts in JavaScript that enable powerful object-oriented programming and functional programming paradigms. They allow you to create reusable code, manage object behavior, and understand how functions and objects interact in different contexts. Understanding these concepts is crucial for writing effective and efficient JavaScript code./
//In JavaScript, the this keyword, function properties, and prototypes are fundamental concepts that play a crucial role in how functions and objects work. Understanding these concepts is essential for writing effective and efficient JavaScript code.
//In JavaScript, the this keyword refers to the current execution context of a function or method. It can refer to different objects depending on how the function is called. For example, in a regular function, this refers to the global object (window in browsers), while in an object method, this refers to the object itself. The value of this can also be explicitly set using call(), apply(), or bind() methods.
//Function properties are special properties that functions have in JavaScript. For example, the name property returns the name of the function, and the length property returns the number of parameters the function expects. These properties can be useful for debugging and introspection.
//Prototypes are a fundamental part of JavaScript's object system. Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from. When you access a property or method on an object, JavaScript first looks for it on the object itself, and if it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null). This allows for powerful inheritance and code reuse in JavaScript.
//Overall, understanding the this keyword, function properties, and prototypes is essential for working with functions and objects in JavaScript, as they allow you to create reusable code, manage object behavior, and understand how functions and objects interact in different contexts.   
