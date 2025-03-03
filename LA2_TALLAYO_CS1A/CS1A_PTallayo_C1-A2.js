// 1. Declare variables and constant with given values
let a = 25;
let b = 20;
let c = 12;
let d = "15"; // String type
const e = 15; // Constant

// 2a. Display the sum of [a, b, c, d] and [e] combined
let sum = a + b + c + Number(d) + e; // Convert d to a number before adding
console.log("Sum of a, b, c, d, and e:", sum);

// 2b. Compare d and e using relational operators
console.log("d > e:", Number(d) > e);   
console.log("d < e:", Number(d) < e);
console.log("d >= e:", Number(d) >= e);
console.log("d <= e:", Number(d) <= e);
console.log("d === e:", d === e); // Strict equality (false because d is a string)

// 2c. Declare new variables to store results of the required operations

// 1. Subtract all values of the declared variables
let subtractionResult = a - b - c - Number(d);
console.log("Subtraction result (a - b - c - d):", subtractionResult);

// 2. Multiply a and c, then divide by e
let multiplicationDivisionResult = (a * c) / e;
console.log("Multiplication and division result ((a * c) / e):", multiplicationDivisionResult);

// 3. Display the exponent value of e raised to the power of c
let exponentResult = e ** c;
console.log("Exponent result (e^c):", exponentResult);

// 4. Reassign the exponent result to a new variable (since e is a constant)
let newE = exponentResult;
console.log("Reassigned value (newE):", newE);
