// Question:

// Write a function that takes a sorted array of integers and returns the index of a target value. If the target is not found, return -1. You may assume that the array does not contain any duplicates.
// Input:
// arr = [1, 3, 5, 7, 9, 11]
// target = 7

// Output:
// 3

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Target found
      } else if (arr[mid] < target) {
        left = mid + 1; // Continue searching in the right half
      } else {
        right = mid - 1; // Continue searching in the left half
      }
    }
  
    return -1; // Target not found
  }
  
  // Test the function
  const arr = [1, 3, 5, 7, 9, 11];
  const target = 7;
  console.log(binarySearch(arr, target)); // Output: 3
  