// Question:

// Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array

function sumOfPositiveNumbers(arr) {
    // Initialize a variable to store the sum
    let sum = 0;
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current number is positive
      if (arr[i] > 0) {
        // Add the positive number to the sum
        sum += arr[i];
      }
    }
    
    // Return the sum
    return sum;
  }
  
  // Test the function
  console.log(sumOfPositiveNumbers([1, -2, 3, -4, 5])); // Output: 9

  function firstDuplicateIndex(arr) {
    // Create an empty object to store seen numbers
    const seen = {};
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current number has been seen before
      if (seen[arr[i]] !== undefined) {
        // If it has been seen before, return its index
        return seen[arr[i]];
      } else {
        // Otherwise, mark the current number as seen and store its index
        seen[arr[i]] = i;
      }
    }
    
    // If no duplicates are found, return -1
    return -1;
  }
  
  // Test the function
  console.log(firstDuplicateIndex([2, 3, 1, 0, 2, 5, 3])); // Output: 1
  