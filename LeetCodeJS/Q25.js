// JSON

// Q25:Join Two Arrays by ID (Medium)
// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.
// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique
// values of id. The returned array should be sorted in ascending order based on the id key.
// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.
// If two objects share an id, their properties should be merged into a single object:
// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

// Example 1:
// Input:
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ],
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Output:
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]
// Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.

// Example 2:
// Input:
// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ],
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Output:
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.

// Example 3:
// Input:
// arr1 = [
//     {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
// ]
// arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
// ]
// Output: [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// ]
// Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.

// Constraints:
// arr1 and arr2 are valid JSON arrays
// Each object in arr1 and arr2 has a unique integer id key
// 2 <= JSON.stringify(arr1).length <= 106
// 2 <= JSON.stringify(arr2).length <= 106

var join = function (arr1, arr2) {
  const map = new Map();

  // Process the first array
  for (const obj of arr1) {
    map.set(obj.id, obj);
  }

  // Process the second array
  for (const obj of arr2) {
    if (map.has(obj.id)) {
      // Merge properties from arr2 into the object from arr1
      map.set(obj.id, { ...map.get(obj.id), ...obj });
    } else {
      map.set(obj.id, obj);
    }
  }

  // Convert the map back to an array and sort by id
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
};

// Example 1:
const arr1_1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
];
const arr2_1 = [{ id: 3, x: 5 }];
console.log(join(arr1_1, arr2_1));
// Output: [ { id: 1, x: 1 }, { id: 2, x: 9 }, { id: 3, x: 5 } ]

// Example 2:
const arr1_2 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
const arr2_2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
console.log(join(arr1_2, arr2_2));
// Output: [ { id: 1, x: 2, y: 3 }, { id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 } ]

// Example 3:
const arr1_3 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
const arr2_3 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
console.log(join(arr1_3, arr2_3));
// Output: [ { id: 1, b: { c: 84 }, v: [1, 3], y: 48 } ]