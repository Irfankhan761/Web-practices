var map = function (arr, fn) {
  let returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArray.push(fn(arr[i], i));
  }
  return returnedArray;
};

// Example 1:
const arr = [1, 2, 3];
const plusOne = function (n) {
  return (n += 1);
};
const newArray = map(arr, plusOne);
console.log(newArray);

// Example 2:
const arr2 = [1, 2, 3];
const plusI = function (n, i) {
  return (n += i);
};
const newArray2 = map(arr2, plusI);
console.log(newArray2);

// Example 3:
const arr3 = [10, 20, 30];
const constant = function (n) {
  return 42;
};
const newArray3 = map(arr3, constant);
console.log(newArray3);
