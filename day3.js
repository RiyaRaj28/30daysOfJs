// Activity 1: If-Else Statements

// Task 1: Check if a number is positive, negative, or zero, and log the result to the console.
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
// Outputs
checkNumber(10);  // Positive
checkNumber(-5);  // Negative
checkNumber(0);   // Zero

// Task 2: Check if a person is eligible to vote (age >= 18) and log the result to the console.
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible to vote");
    }
}
// Outputs
checkVotingEligibility(20);  // Eligible to vote
checkVotingEligibility(16);  // Not eligible to vote

// Activity 2: Nested If-Else Statements

// Task 3: Find the largest of three numbers using nested if-else statements.
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a);
    } else if (b >= a && b >= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
// Outputs
findLargest(1, 2, 3);  // 3
findLargest(5, 3, 4);  // 5
findLargest(7, 9, 6);  // 9

// Activity 3: Switch Case

// Task 4: Determine the day of the week based on a number (1-7) and log the day name to the console.
function dayOfWeek(number) {
    switch (number) {
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
            break;
    }
}
// Outputs
dayOfWeek(3);  // Wednesday
dayOfWeek(7);  // Sunday
dayOfWeek(0);  // Invalid day

// Task 5: Assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function assignGrade(score) {
    switch (true) {
        case (score >= 90):
            console.log('A');
            break;
        case (score >= 80):
            console.log('B');
            break;
        case (score >= 70):
            console.log('C');
            break;
        case (score >= 60):
            console.log('D');
            break;
        case (score < 60):
            console.log('F');
            break;
        default:
            console.log("Invalid score");
            break;
    }
}
// Outputs
assignGrade(85);  // B
assignGrade(72);  // C
assignGrade(59);  // F

// Activity 4: Conditional (Ternary) Operator

// Task 6: Check if a number is even or odd and log the result to the console.
function checkEvenOdd(num) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
}
// Outputs
checkEvenOdd(10);  // Even
checkEvenOdd(7);   // Odd

// Activity 5: Combining Conditions

// Task 7: Check if a year is a leap year using multiple conditions and log the result to the console.
function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}
// Outputs
checkLeapYear(2020);  // Leap year
checkLeapYear(2021);  // Not a leap year
checkLeapYear(1900);  // Not a leap year
checkLeapYear(2000);  // Leap year

// Feature Requests

// 1. Number Check Script
function numberCheckScript(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
// Outputs
numberCheckScript(5);  // Positive
numberCheckScript(-3); // Negative
numberCheckScript(0);  // Zero

// 2. Voting Eligibility Script
function votingEligibilityScript(age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible to vote");
    }
}
// Outputs
votingEligibilityScript(25); // Eligible to vote
votingEligibilityScript(17); // Not eligible to vote

// 3. Day of the Week Script
function dayOfTheWeekScript(number) {
    switch (number) {
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
            break;
    }
}
// Outputs
dayOfTheWeekScript(5); // Friday
dayOfTheWeekScript(2); // Tuesday
dayOfTheWeekScript(0); // Invalid day

// 4. Grade Assignment Script
function gradeAssignmentScript(score) {
    switch (true) {
        case (score >= 90):
            console.log('A');
            break;
        case (score >= 80):
            console.log('B');
            break;
        case (score >= 70):
            console.log('C');
            break;
        case (score >= 60):
            console.log('D');
            break;
        case (score < 60):
            console.log('F');
            break;
        default:
            console.log("Invalid score");
            break;
    }
}
// Outputs
gradeAssignmentScript(95); // A
gradeAssignmentScript(67); // D
gradeAssignmentScript(50); // F

// 5. Leap Year Check Script
function leapYearCheckScript(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}
// Outputs
leapYearCheckScript(2000); // Leap year
leapYearCheckScript(2001); // Not a leap year
leapYearCheckScript(1900); // Not a leap year
