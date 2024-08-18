// 4. Using Objects, Arrays, and Functions
// Understanding how to work with objects, arrays, and functions is fundamental in React since these are the core structures for managing data and logic.
// Object
let user = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

// Array
let fruits = ["apple", "banana", "orange"];

// Function
function add(a, b) {
  return a + b;
}

user.greet(); // Hello, John
console.log(add(5, 10)); // 15

// 5. ES6 Arrow Functions
// Arrow functions provide a concise syntax and maintain the context of this.

// Example:

// Traditional Function
function greet(name) {
  return "Hello, " + name;
}

// Arrow Function
const greet2 = (name) => "Hello, " + name;

console.log(greet("John")); // Hello, John

// 6. In-built Functions: map(), forEach(), and Promises
// These functions are powerful tools for working with arrays and asynchronous operations.

// map(): Creates a new array with the results of calling a function for every array element.
// forEach(): Executes a function for each array element.
// Promises: Represent the eventual completion (or failure) of an asynchronous operation.

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

numbers.forEach((num) => console.log(num)); // 1, 2, 3, 4, 5

let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//   7. Destructuring Arrays and Objects
//   Destructuring allows you to extract values from arrays or properties from objects into distinct variables.

// Array Destructuring
let [first, second] = [10, 20];
console.log(first); // 10
console.log(second); // 20

// Object Destructuring
let user2 = { name: "John", age: 30 };
let { name, age } = user2;
console.log(name); // John
console.log(age); // 30

// Error Handling
// Error handling ensures that your application can gracefully handle errors and provide useful feedback.

try {
  let result = add(10, undefined);
  if (!result) throw new Error("Invalid input");
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Execution completed.");
}
