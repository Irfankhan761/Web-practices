// Closures: A function return another function.

// Q4:Counter II:
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Example 1:
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// Example 2:
// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0

// Constraints:
// -1000 <= init <= 1000
// 0 <= calls.length <= 1000
// calls[i] is one of "increment", "decrement" and "reset"
"use strict";
var createCounter = function (init) {
  var original = init;
  return {
    increment: function () {
      return (init += 1);
    },
    decrement: function () {
      return (init -= 1);
    },
    reset: function () {
      init = original;
      return original;
    },
  };
};
const test = (counter, calls) => {
  var results = [];
  calls.forEach((item) => {
    if (item == "increment") {
      results.push(counter.increment());
    } else if (item == "decrement") {
      results.push(counter.decrement());
    } else {
      results.push(counter.reset());
    }
  });
  return results;
};

// Example 1:
const counter1 = createCounter(5);
const calls1 = ["increment", "reset", "decrement"];
const example1 = test(counter1, calls1);
console.log(example1);
// Example 2:
const counter2 = createCounter(0);
const calls2 = ["increment", "increment", "decrement", "reset", "reset"];
const example2 = test(counter2, calls2);
console.log(example2);

// Example 1:
const counter = createCounter(5);
var increment = counter.increment();
var reset = counter.reset();
var decrement = counter.decrement();
console.log(increment, reset, decrement);
