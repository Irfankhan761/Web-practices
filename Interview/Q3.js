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

