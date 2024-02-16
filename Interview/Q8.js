// Question:

// Write a function that accepts an array of integers and returns a new array containing only the unique elements from the original array.

function uniqueElements(arr) {
    const uniqueArr = [];
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current element is not already in uniqueArr, add it
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    
    return uniqueArr;
  }
  
  // Test the function
  console.log(uniqueElements([1, 2, 3, 2, 4, 5, 3])); // Output: [1, 2, 3, 4, 5]
  