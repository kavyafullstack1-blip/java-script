const product = {
    name: "Laptop",
    price: 999.99,
    category: "Electronics"
};
console.log(product.name); // Output: Laptop
console.log(product.price); // Output: 999.99
console.log(product.category); // Output: Electronics
typeof product; // Output: object
console.log(typeof product); // Output: object

const profile = {
    name: "John Doe",
    age: 30,
    email: "jhon@gmail.com",
    posts: 12,
    followers: 100,
    isFollowing: false,
    following: 50
};
console.log(profile.name); // Output: John Doe
console.log(profile.age); // Output: 30
console.log(profile.email); // Output: jhon@gmail.com   
console.log(profile.posts); // Output: 12
console.log(profile.followers); // Output: 100
console.log(profile.isFollowing); // Output: false
console.log(profile.following); // Output: 50
typeof profile; // Output: object
console.log(typeof profile.name); // Output: string
console.log(typeof profile.age); // Output: number
console.log(typeof profile.email); // Output: string
console.log(typeof profile.posts); // Output: number
console.log(typeof profile.followers); // Output: number
console.log(typeof profile.isFollowing); // Output: boolean
console.log(typeof profile.following); // Output: number

//arithmetic operators
let a= 10;
let b = 20;
let c = a + b;
console.log(c); // Output: 30
console.log("a+b=" ,a+b); // Output: a+b=30
console.log("a-b=", a-b); // Output: a-b= -10
console.log("a*b=", a*b); // Output: a*b= 200
console.log("a/b=", a/b); // Output: a/b= 0.5
console.log("a%b=", a%b); // Output: a%b= 10
console.log("a**b=", a**b); // Output: a**b= 100000000000000000000

//unary operators
let x = 5,  y = 10;
console.log(-x); // Output: -5
console.log(+x); // Output: 5
console.log(++x); // Output: 6
console.log(--x); // Output: 5
console.log(!true); // Output: false
console.log(!false); // Output: true
console.log(typeof x); // Output: number
console.log(typeof y); // Output: number
console.log(x++); // Output: 5
console.log(x); // Output: 6
console.log(y--); // Output: 10
console.log(y); // Output: 9

//assignment operators
let m = 10;
m += 5;
console.log(m); // Output: 15
m -= 3;
console.log(m); // Output: 12
m *= 2;
console.log(m); // Output: 24
m /= 4;
console.log(m); // Output: 6
m %= 5;
console.log(m); // Output: 1
m **= 3;
console.log(m); // Output: 1  

//comparison operators
let p = 10;
let q = 20;
console.log(p == q); // Output: false
console.log(p != q); // Output: true
console.log(p > q); // Output: false
console.log(p < q); // Output: true
console.log(p >= q); // Output: false
console.log(p <= q); // Output: true

//logical operators
let r = true;
let s = false;
let t = true;
console.log(r && s); // Output: false
console.log(r && t); // Output: true
console.log(r || s); // Output: true
console.log(!r); // Output: false
console.log(!s); // Output: true
console.log(r && !s); // Output: true
console.log(!r || s); // Output: false

let age = 25;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

let num = 7;
if (num % 2 === 0) {
    console.log(num + " is even.");
} else {
    console.log(num + " is odd.");
}

//else if statement
let mode= "dark";
if (mode === "light") {
    console.log("Light mode is enabled.");
} else if (mode === "dark") {
    console.log("Dark mode is enabled.");
} else {
    console.log("Unknown mode.");
}

//ternary operator-if :else statement in a single line
let marks = 85;
let result = (marks >= 50) ? "Pass" : "Fail";
console.log(result); // Output: Pass

//switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");    
        break;
    case 5:
        console.log("Friday");  
        break;
    case 6:
        console.log("Saturday");    
        break;
    case 7:
        console.log("Sunday");    
        break;
    default:
        console.log("Invalid day");
}

//practice questions
// alert("Welcome to JavaScript Practice!");
// let userName = prompt("Please enter your name:");

let number = prompt("enter your number");
if(number%5===0){
    console.log(number + " is divisible by 5.");
}   else{
    console.log(number + " is not divisible by 5.");
}

let score = prompt("enter your score");
if(score>=90 && score<=100){
    console.log("Grade: A");
}   else if(score>=70 && score<89){
    console.log("Grade: B");
}   else if(score>=60 && score<69){
    console.log("Grade: C");
}   else if(score>=50 && score<59){
    console.log("Grade: D");
}   else{
    console.log("Grade: F");
}


for(let i=1; i<=5; i++){
    console.log("hello");
}






