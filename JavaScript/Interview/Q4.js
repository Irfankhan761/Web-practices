// Question:

// Given an array of integers, write a function that returns the index of the first occurrence of a duplicate number. If no duplicates are found, return -1.
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
  