// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let array = [1, 2, 3, 4, 5];
console.log("Array:", array); 
// Output: Array: [1, 2, 3, 4, 5]

// Task 2: Access the first and last elements of the array and log them to the console.
console.log("First element:", array[0]); 
// Output: First element: 1

console.log("Last element:", array[array.length - 1]); 
// Output: Last element: 5

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
array.push(6);
console.log("Array after push:", array); 
// Output: Array after push: [1, 2, 3, 4, 5, 6]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
array.pop();
console.log("Array after pop:", array); 
// Output: Array after pop: [1, 2, 3, 4, 5]

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
array.shift();
console.log("Array after shift:", array); 
// Output: Array after shift: [2, 3, 4, 5]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
array.unshift(1);
console.log("Array after unshift:", array); 
// Output: Array after unshift: [1, 2, 3, 4, 5]

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubledArray = array.map(num => num * 2);
console.log("Doubled array:", doubledArray); 
// Output: Doubled array: [2, 4, 6, 8, 10]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenArray = array.filter(num => num % 2 === 0);
console.log("Even array:", evenArray); 
// Output: Even array: [2, 4]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = array.reduce((acc, num) => acc + num, 0);
console.log("Sum of array:", sum); 
// Output: Sum of array: 15

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Array elements using for loop:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// Output:
// Array elements using for loop:
// 1
// 2
// 3
// 4
// 5

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Array elements using forEach:");
array.forEach(num => console.log(num));
// Output:
// Array elements using forEach:
// 1
// 2
// 3
// 4
// 5

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix);
// Output: Matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Task 13: Access and log a specific element from the two-dimensional array.
console.log("Element at [1][1]:", matrix[1][1]);
// Output: Element at [1][1]: 5

// Feature Request Scripts

// 1. Array Manipulation Script: Demonstrate creation, adding, and removing elements using push, pop, shift, and unshift.
let arrManipulation = [10, 20, 30];
arrManipulation.push(40); // Add to end
arrManipulation.pop();    // Remove from end
arrManipulation.shift();  // Remove from beginning
arrManipulation.unshift(5); // Add to beginning
console.log("Array after manipulations:", arrManipulation); 
// Output: Array after manipulations: [5, 20, 30]

// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
let transformedArray = arrManipulation.map(num => num * 2).filter(num => num > 20);
let aggregatedValue = transformedArray.reduce((acc, num) => acc + num, 0);
console.log("Transformed array:", transformedArray); 
// Output: Transformed array: [40, 60]

console.log("Aggregated value:", aggregatedValue); 
// Output: Aggregated value: 100

// 3. Array Iteration Script: Iterate over an array using both for loop and forEach method and log each element.
let iterArray = [5, 10, 15];
console.log("Iteration using for loop:");
for (let i = 0; i < iterArray.length; i++) {
    console.log(iterArray[i]);
}
// Output:
// Iteration using for loop:
// 5
// 10
// 15

console.log("Iteration using forEach:");
iterArray.forEach(num => console.log(num));
// Output:
// Iteration using forEach:
// 5
// 10
// 15

// 4. Two-dimensional Array Script: Create and manipulate a two-dimensional array.
let twoDArray = [
    [1, 2],
    [3, 4]
];
twoDArray.push([5, 6]); // Add new row
twoDArray[0].push(7);   // Add new element to existing row
console.log("Two-dimensional array after manipulations:", twoDArray); 
// Output: Two-dimensional array after manipulations: [[1, 2, 7], [3, 4], [5, 6]]
