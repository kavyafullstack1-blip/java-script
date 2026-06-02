//complex data type 
//Arrays and Objects are complex data types in JavaScript. 
// They are used to store collections of data and more complex entities, respectively.

//Arrays: An array is an ordered collection of values.
//  It can hold multiple values of different types, including other arrays and objects. 
// Arrays are created using square brackets [] and can be accessed using their index. 
let myArray = [1, "Hello", true, [2, 3], { name: "kavya" }];
console.log(myArray[0]); // Output: 1
console.log(myArray[1]); // Output: "Hello"
console.log(myArray[3]); // Output: [2, 3]
console.log(myArray[4].name); // Output: "kavya"

//Objects: An object is a collection of key-value pairs. 
// It is used to represent more complex entities and can contain properties and methods. 
// Objects are created using curly braces {} and can be accessed using dot notation or bracket notation.    
let myObject = {
    name: "Keerti",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(myObject.name); // Output: "Keerti"
console.log(myObject.age); // Output: 30
myObject.greet(); // Output: "Hello, my name is Keerti"

// Both arrays and objects are mutable, meaning their contents can be changed after they are created.

// In JavaScript, arrays and objects are reference types, 
// which means that when you assign an array or object to a variable, 
// you are assigning a reference to the memory location where the data is stored, 
// rather than the actual data itself.
let arr1 = [1, 2, 3];
let arr2 = arr1;    
arr2.push(4);
console.log(arr1); // Output: [1, 2, 3, 4] - arr1 is also modified because arr2 is a reference
//  to the same array in memory

let obj1 = { name: "Bob" };  
let obj2 = obj1;
obj2.name = "Charlie";
console.log(obj1.name); // Output: "Charlie" - obj1 is also modified because obj2 is a reference
//  to the same object in memory

// When you want to create a copy of an array or object, 
// you need to use methods that create a new array or object in memory,
//  such as the spread operator (...) for arrays and Object.assign() for objects.
let arr3 = [...arr1];   
arr3.push(5);
console.log(arr1); // Output: [1, 2, 3, 4] - arr1 is not modified because arr3 is a new array in memory
let obj3 = Object.assign({}, obj1);
obj3.name = "Dave";
console.log(obj1.name); // Output: "Charlie" - obj1 is not modified because obj3 is a new object in memory  

// Understanding the difference between primitive and reference types is crucial for working with data in JavaScript,
// as it affects how variables are assigned and how data is manipulated in memory.  
//arrays functions
let numbers = [1, 2, 3, 4, 5];
//forEach() method - executes a provided function once for each array element
numbers.forEach(function (number) {
    console.log(number);
});
//map() method - creates a new array with the results of calling a provided function on every element in the calling array
let squaredNumbers = numbers.map(function (number) {
    return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
//filter() method - creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]
//reduce() method - executes a reducer function on each element of the array, resulting in a single output value
let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15
//objects functions
let person = {
    name: "Alice",  
    age: 25,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};  
person.greet(); // Output: "Hello, my name is Alice"
//In a regular function, this refers to the object that is executing the function
function Person(name) {
    this.name = name;
}
let person1 = new Person("Bob");
console.log(person1.name); // Output: "Bob"

//array methods,
//In an array method, this refers to the array on which the method is called
let myArray1 = [1, 2, 3];
myArray1.forEach(function (number) {
    console.log(this); // Output: [1, 2, 3] - the array on which forEach is called
    console.log(number); // Output: 1, then 2, then 3
});
//pop(), push(), shift(), unshift() methods also have this referring to the array they are called on.
//pop() method removes the last element from an array and returns that element.
//push() method adds one or more elements to the end of an array and returns the new length of the array.
//shift() method removes the first element from an array and returns that element.
//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

myArray1.pop(); // this refers to myArray1
myArray1.push(4); // this refers to myArray1
myArray1.shift();   // this refers to myArray1
myArray1.unshift(0); // this refers to myArray1
console.log(myArray1); // Output: [0, 2, 3, 4]

//toString() method also has this referring to the object it is called on.

let myObject1 = {
    name: "Charlie",
    toString: function () {
        return "Name: " + this.name;
    }
};
console.log(myObject1.toString()); // Output: "Name: Charlie"

//concat() method also has this referring to the array it is called on.
let myArray2 = [4, 5, 6];
let combinedArray = myArray1.concat(myArray2); // this refers to myArray1
console.log(combinedArray); // Output: [0, 2, 3, 4, 4, 5, 6]

//splice() method also has this referring to the array it is called on.
myArray1.splice(1, 2, "a", "b"); // this refers to myArray1
console.log(myArray1); // Output: [0, "a", "b", 4]  

//slice() method also has this referring to the array it is called on.
let slicedArray = myArray1.slice(1, 3); // this refers to myArray1
console.log(slicedArray); // Output: ["a", "b"]



