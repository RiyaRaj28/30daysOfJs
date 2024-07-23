// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}
// Example Output:
isEvenOrOdd(3); // 3 is odd
isEvenOrOdd(4); // 4 is even

// Task 2: Write a function to calculate the square of a number and return the result.
function square(number) {
    return number * number;
}
// Example Output:
console.log(square(3)); // 9
console.log(square(4)); // 16

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function(a, b) {
    let max = a > b ? a : b;
    console.log(`The maximum of ${a} and ${b} is ${max}`);
};
// Example Output:
findMax(3, 5); // The maximum of 3 and 5 is 5
findMax(7, 2); // The maximum of 7 and 2 is 7

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};
// Example Output:
console.log(concatenateStrings('Hello, ', 'world!')); // Hello, world!

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b;
// Example Output:
console.log(sum(3, 5)); // 8

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);
// Example Output:
console.log(containsCharacter('Hello, world!', 'w')); // true
console.log(containsCharacter('Hello, world!', 'z')); // false

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
// Example Output:
console.log(multiply(5, 2)); // 10
console.log(multiply(5)); // 5

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 30) {
    return `Hello, ${name}! You are ${age} years old.`;
}
// Example Output:
console.log(greet('John', 25)); // Hello, John! You are 25 years old.
console.log(greet('Jane')); // Hello, Jane! You are 30 years old.

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls that function that many times.
function repeat(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}
// Example Output:
repeat(() => console.log('Hello'), 3);
// Hello
// Hello
// Hello

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}
// Example Output:
const double = x => x * 2;
const sq = x => x * x;
console.log(applyFunctions(double, sq , 3)); // 36 (double(3) = 6, square(6) = 36)

// Feature Request:

// 1. Even or Odd Function Script
function evenOrOddScript(number) {
    isEvenOrOdd(number);
}
// Example Output:
evenOrOddScript(7); // 7 is odd
evenOrOddScript(10); // 10 is even

// 2. Square Calculation Function Script
function squareCalculationScript(number) {
    console.log(square(number));
}
// Example Output:
squareCalculationScript(6); // 36

// 3. Concatenation Function Script
function concatenationFunctionScript(str1, str2) {
    console.log(concatenateStrings(str1, str2));
}
// Example Output:
concatenationFunctionScript('Good ', 'morning!'); // Good morning!

// 4. Sum Calculation Arrow Function Script
function sumCalculationArrowFunctionScript(a, b) {
    console.log(sum(a, b));
}
// Example Output:
sumCalculationArrowFunctionScript(10, 15); // 25

// 5. Higher-Order Function Script
function higherOrderFunctionScript(func1, func2, value) {
    console.log(applyFunctions(func1, func2, value));
}
// Example Output:
higherOrderFunctionScript(double, square, 4); // 64
