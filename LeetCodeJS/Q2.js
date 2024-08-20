// Closures: A function return another function.

// Q2:Counter:
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is
// called (n, n + 1, n + 2, etc).

// Example 1:
// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]
// Explanation:
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

// Example 2:
// Input:
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

// Constraints:
// -1000 <= n <= 1000
// 0 <= calls.length <= 1000
// calls[i] === "call"
"use strict";
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
function mul(x) {
  let a = 0;
  return function () {
    ++a;
    let res = x * a;

    return x + " x " + a + " = " + res;
  };
}
const n1 = mul(2);
console.log(n1());
console.log(n1());
console.log(n1());
console.log(n1());
console.log(n1());
console.log(n1());
console.log(n1());
console.log(n1());
console.log(n1());
console.log(n1());

console.log("min max");
const minmax = (arr) => {
  var max1 = -Infinity;
  var max2 = -Infinity;
  var min1 = Infinity;
  var min2 = Infinity;
  return function () {
    arr.forEach((element) => {
      if (element > max1) {
        max2 = max1;
        max1 = element;
      } else if (element > max2 && element < max1) {
        max2 = element;
      }
      if (element < min1) {
        min2 = min1;
        min1 = element;
      } else if (element > min1 && element < min2) {
        min2 = element;
      }
    });
    return (
      " max 1 = " +
      max1 +
      " max 2 = " +
      max2 +
      " min 1 = " +
      min1 +
      " min 2 = " +
      min2
    );
  };
};
const arr = [2, 322, 12, 42, 1, 1, 121, 121, 41, 12, 12, 12];
const f = minmax(arr);

console.log(f());
console.log(f());
console.log(f());
