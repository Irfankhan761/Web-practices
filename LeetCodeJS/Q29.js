// Classes

// Q29:Array Wrapper (Easy)
// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

// Example 1:
// Input: nums = [[1,2],[3,4]], operation = "Add"
// Output: 10
// Explanation:
// const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// obj1 + obj2; // 10

// Example 2:
// Input: nums = [[23,98,42,70]], operation = "String"
// Output: "[23,98,42,70]"
// Explanation:
// const obj = new ArrayWrapper([23,98,42,70]);
// String(obj); // "[23,98,42,70]"

// Example 3:
// Input: nums = [[],[]], operation = "Add"
// Output: 0
// Explanation:
// const obj1 = new ArrayWrapper([]);
// const obj2 = new ArrayWrapper([]);
// obj1 + obj2; // 0

// Constraints:
// 0 <= nums.length <= 1000
// 0 <= nums[i] <= 1000
// Note: nums is the array passed to the constructor

class ArrayWrapper {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.nums = nums;
  }

  /**
   * @return {number}
   */
  valueOf() {
    // This method is called when performing operations like addition.
    // It returns the sum of the array elements.
    return this.nums.reduce((sum, num) => sum + num, 0);
  }

  /**
   * @return {string}
   */
  toString() {
    // This method is called when String() is used on an instance.
    // It returns the array elements as a comma-separated string, enclosed in brackets.
    return `[${this.nums.join(",")}]`;
  }
}

// Example Usage:

// Example 1:
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // Output: 10

// Example 2:
const obj3 = new ArrayWrapper([23, 98, 42, 70]);
console.log(String(obj3)); // Output: "[23,98,42,70]"

// Example 3:
const obj4 = new ArrayWrapper([]);
const obj5 = new ArrayWrapper([]);
console.log(obj4 + obj5); // Output: 0
