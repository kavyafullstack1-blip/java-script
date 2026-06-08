console.log("2nd file");

//while loop
let i=2
while(i<=10){
    console.log("i=",i);
    i++;
}

//do while loop
let a=1;
do{
  console.log("hi",a);
  a++;
}while(a<=10);

//for of loop
let str="hello my name is kavya";
for (let i  of str) {
    console.log("i=",i)
    i++;
}

//for in loop
 let j=0;
for (let j in str) {
    if (!str.hasOwn(str, j)) continue;
    
    let j = str[j];    
    
    
}