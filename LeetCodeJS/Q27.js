// JSON

// Q27:Compact Object (Medium)
// Given an object or array obj, return a compact object.
// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the
// object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

// Example 1:
// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.

// Example 2:
// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

// Example 3:
// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

// Constraints:
// obj is a valid JSON object
// 2 <= JSON.stringify(obj).length <= 106
var compactObject = function (obj) {
  // Check if the input is an array
  if (Array.isArray(obj)) {
    return obj.reduce((acc, item) => {
      const compactedItem = compactObject(item);
      if (compactedItem !== undefined) acc.push(compactedItem);
      return acc;
    }, []);
  }

  // Check if the input is an object
  if (obj !== null && typeof obj === "object") {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const compactedValue = compactObject(value);
      if (compactedValue !== undefined) acc[key] = compactedValue;
      return acc;
    }, {});
  }

  // If it's a primitive value, return it if it's truthy
  return Boolean(obj) ? obj : undefined;
};

// Example 1:
console.log(compactObject([null, 0, false, 1]));
// Output: [1]

// Example 2:
console.log(compactObject({ a: null, b: [false, 1] }));
// Output: {"b": [1]}

// Example 3:
console.log(compactObject([null, 0, 5, [0], [false, 16]]));
// Output: [5, [], [16]]
