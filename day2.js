// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.
let add = (a, b) => a + b;
console.log("Addition:", add(10, 5)); // Output: 15

// Task 2: Write a program to subtract two numbers and log the result to the console.
let subtract = (a, b) => a - b;
console.log("Subtraction:", subtract(10, 5)); // Output: 5

// Task 3: Write a program to multiply two numbers and log the result to the console.
let multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(10, 5)); // Output: 50

// Task 4: Write a program to divide two numbers and log the result to the console.
let divide = (a, b) => a / b;
console.log("Division:", divide(10, 5)); // Output: 2

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let remainder = (a, b) => a % b;
console.log("Remainder:", remainder(10, 5)); // Output: 0

// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let x = 10;
x += 5;
console.log("x after += 5:", x); // Output: 15

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
x -= 3;
console.log("x after -= 3:", x); // Output: 12

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log("10 > 5:", 10 > 5); // Output: true
console.log("10 < 5:", 10 < 5); // Output: false

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log("10 >= 5:", 10 >= 5); // Output: true
console.log("10 <= 5:", 10 <= 5); // Output: false

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log("10 == '10':", 10 == '10'); // Output: true
console.log("10 === '10':", 10 === '10'); // Output: false

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
console.log("10 > 5 && 5 < 10:", 10 > 5 && 5 < 10); // Output: true

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log("10 > 5 || 5 > 10:", 10 > 5 || 5 > 10); // Output: true

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log("!(10 > 5):", !(10 > 5)); // Output: false

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to determine if a number is positive or negative and log the result to the console.
let number = 10;
let result = number >= 0 ? "Positive" : "Negative";
console.log("Number is:", result); // Output: Positive

number = -5;
result = number >= 0 ? "Positive" : "Negative";
console.log("Number is:", result); // Output: Negative

// Feature Requests:

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
let a = 15, b = 4;
console.log("Addition:", add(a, b)); // Output: 19
console.log("Subtraction:", subtract(a, b)); // Output: 11
console.log("Multiplication:", multiply(a, b)); // Output: 60
console.log("Division:", divide(a, b)); // Output: 3.75
console.log("Remainder:", remainder(a, b)); // Output: 3

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
let num1 = 8, num2 = 12;
console.log("num1 > num2:", num1 > num2); // Output: false
console.log("num1 < num2:", num1 < num2); // Output: true
console.log("num1 >= num2:", num1 >= num2); // Output: false
console.log("num1 <= num2:", num1 <= num2); // Output: true
console.log("num1 == num2:", num1 == num2); // Output: false
console.log("num1 === num2:", num1 === num2); // Output: false
console.log("num1 != num2:", num1 != num2); // Output: true
console.log("num1 !== num2:", num1 !== num2); // Output: true
console.log("num1 > 5 && num2 < 15:", num1 > 5 && num2 < 15); // Output: true
console.log("num1 > 10 || num2 < 15:", num1 > 10 || num2 < 15); // Output: true
console.log("!(num1 > num2):", !(num1 > num2)); // Output: true

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let num = -20;
let isPositive = num >= 0 ? "Positive" : "Negative";
console.log("Number is:", isPositive); // Output: Negative

num = 30;
isPositive = num >= 0 ? "Positive" : "Negative";
console.log("Number is:", isPositive); // Output: Positive
