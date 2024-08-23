// Promises and Time

// Q16:Promise Time Limit
// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments
// provided to the time limited function.
// The time limited function should follow these rules:
// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

// Example 1:
// Input:
// fn = async (n) => {
//   await new Promise(res => setTimeout(res, 100));
//   return n * n;
// }
// inputs = [5]
// t = 50
// Output: {"rejected":"Time Limit Exceeded","time":50}
// Explanation:
// const limited = timeLimit(fn, t)
// const start = performance.now()
// let result;
// try {
//    const res = await limited(...inputs)
//    result = {"resolved": res, "time": Math.floor(performance.now() - start)};
// } catch (err) {
//    result = {"rejected": err, "time": Math.floor(performance.now() - start)};
// }
// console.log(result) // Output
// The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.

// Example 2:
// Input:
// fn = async (n) => {
//   await new Promise(res => setTimeout(res, 100));
//   return n * n;
// }
// inputs = [5]
// t = 150
// Output: {"resolved":25,"time":100}
// Explanation:
// The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.

// Example 3:
// Input:
// fn = async (a, b) => {
//   await new Promise(res => setTimeout(res, 120));
//   return a + b;
// }
// inputs = [5,10]
// t = 150
// Output: {"resolved":15,"time":120}
// Explanation:
// ​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.

// Example 4:
// Input:
// fn = async () => {
//   throw "Error";
// }
// inputs = []
// t = 1000
// Output: {"rejected":"Error","time":0}
// Explanation:
// The function immediately throws an error.

// Constraints:
// 0 <= inputs.length <= 10
// 0 <= t <= 1000
// fn returns a promise

var timeLimit = function (fn, t) {
  return async function (...args) {
    // Create a promise for the timeout
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    // Create a promise for the original function
    const fnPromise = fn(...args);

    // Return a race between the two promises
    return Promise.race([fnPromise, timeoutPromise]);
  };
};

// Example 1
const fn1 = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};
const limited1 = timeLimit(fn1, 50);
limited1(5).then(console.log).catch(console.error); // Should reject with "Time Limit Exceeded"

// Example 2
const limited2 = timeLimit(fn1, 150);
limited2(5).then(console.log).catch(console.error); // Should resolve with 25

// Example 3
const fn3 = async (a, b) => {
  await new Promise((res) => setTimeout(res, 120));
  return a + b;
};
const limited3 = timeLimit(fn3, 150);
limited3(5, 10).then(console.log).catch(console.error); // Should resolve with 15

// Example 4
const fn4 = async () => {
  throw "Error";
};
const limited4 = timeLimit(fn4, 1000);
limited4().then(console.log).catch(console.error); // Should reject with "Error"
