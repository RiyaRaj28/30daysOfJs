// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.
var numVar = 42;
console.log(numVar); 

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
let strLet = "Hello, world Riya here!";
console.log(strLet); 

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.
const boolConst = true;
console.log(boolConst); 

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.
let num = 100; 
let str = "JavaScript"; 
let bool = false; 
let obj = {name: "Riya", branch : IT}; 
let arr = [1, 2, 3, 4, 5]; 

console.log(typeof num); 
console.log(typeof str); 
console.log(typeof bool); 
console.log(typeof obj); 
console.log(typeof arr); 

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.
let reassignVar = "Initial Value";
console.log(reassignVar); 
reassignVar = "New Value";
console.log(reassignVar); 

// Task 6: Try reassigning a variable declared with `const` and observe the error.
const constVar = "Constant Value";
console.log(constVar); 

// constVar = "New Value"; // Error: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
let numberType = 123;
let stringType = "This is a string";
let booleanType = true;
let objectType = { key: "value" };
let arrayType = [1, 2, 3, 4, 5];
let undefinedType;
let nullType = null;

console.log("Value: ", numberType, ", Type: ", typeof numberType);
console.log("Value: ", stringType, ", Type: ", typeof stringType);
console.log("Value: ", booleanType, ", Type: ", typeof booleanType);
console.log("Value: ", objectType, ", Type: ", typeof objectType);
console.log("Value: ", arrayType, ", Type: ", typeof arrayType);
console.log("Value: ", undefinedType, ", Type: ", typeof undefinedType);
console.log("Value: ", nullType, ", Type: ", typeof nullType);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.
let letVariable = "I can be reassigned";
console.log(letVariable); 
letVariable = "I've been reassigned";
console.log(letVariable); 

const constVariable = "I cannot be reassigned";
console.log(constVariable); 
// constVariable = "Attempting reassignment"; // Error: Assignment to constant variable.
