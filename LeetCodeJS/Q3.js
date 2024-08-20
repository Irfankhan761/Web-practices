// Closures: A function return another function.

// Q3:To Be Or Not To Be:
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Example 1:
// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Example 2:
// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Example 3:
// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.
"use strict";
var expect = function (val) {
  return {
    toBe: function (other) {
      if (val === other) {
        return "value :" + true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (other) {
      if (val !== other) {
        return "value :" + true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

// Example 1:
try {
  const f1 = expect(5).toBe(5);
  console.log(f1);
} catch (error) {
  console.log(error.message);
}

// Example 2:
try {
  const f2 = expect(5).toBe(null);
  console.log(f2);
} catch (error) {
  console.log(error.message);
}

// Example 3:
try {
  const f3 = expect(5).notToBe(null);
  console.log(f3);
} catch (error) {
  console.log(error.message);
}
