// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
console.log("Task 1:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log("Task 2:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
console.log("Task 3:");
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("Sum:", sum);
// Output:
// Sum: 55

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
console.log("Task 4:");
i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}
// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
console.log("Task 5:");
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
// Output:
// 1
// 2
// 3
// 4
// 5

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
console.log("Task 6:");
let number = 5; // Example number
let factorial = 1;
i = number;
do {
  factorial *= i;
  i--;
} while (i >= 1);
console.log(`Factorial of ${number}:`, factorial);
// Output:
// Factorial of 5: 120

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops.
console.log("Task 7:");
for (let i = 1; i <= 4; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}
// Output:
// *
// * *
// * * *
// * * * *

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
console.log("Task 8:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
console.log("Task 9:");
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6

// Feature Requests:

// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
console.log("Feature 1:");
console.log("Using for loop:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("Using while loop:");
i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// Output:
// Using for loop:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// Using while loop:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
console.log("Feature 2:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
console.log("Feature 3:");
for (let i = 1; i <= 4; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}
// Output:
// *
// * *
// * * *
// * * * *

// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
console.log("Feature 4:");
sum = 0;
i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("Sum:", sum);
// Output:
// Sum: 55

// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
console.log("Feature 5:");
number = 5; // Example number
factorial = 1;
i = number;
do {
  factorial *= i;
  i--;
} while (i >= 1);
console.log(`Factorial of ${number}:`, factorial);
// Output:
// Factorial of 5: 120
