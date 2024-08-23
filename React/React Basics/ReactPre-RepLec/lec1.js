// Javascript basics
// 1. Data Types
// Understanding JavaScript's data types is crucial because you'll use them frequently in React to manage state, props, and more.
// Primitive Data Types: string, number, boolean, null, undefined, symbol.
// Complex Data Types: object, array, function.
let name = "John"; // string
let age = 30; // number
let isStudent = true; // boolean
let address = null; // null
let city; // undefined
let uniqueId = Symbol("id"); // symbol
let users = { name: "John", age: 30 }; // object
let hobbies = ["reading", "gaming"]; // array

// 2. Using var, let, and const
// Understanding the differences between var, let, and const is important for managing variable scope and avoiding common bugs.
// var: Function-scoped, can be redeclared and updated.
// let: Block-scoped, can be updated but not redeclared.
// const: Block-scoped, cannot be updated or redeclared.
function example() {
  var x = 10; // function-scoped
  if (true) {
    let y = 20; // block-scoped
    const z = 30; // block-scoped
  }
  console.log(x); // 10
  x = 20;
  //   console.log(y); // ReferenceError: y is not defined
  //   console.log(z); // ReferenceError: z is not defined
}
example();

//3. Using Objects, Arrays, and Functions
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
console.log(user);
