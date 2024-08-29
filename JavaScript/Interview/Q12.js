// Write a function that takes an array of numbers and returns the second largest number in the array. If there is no second largest number, return null.

function secondLargest(arr) {
    if (arr.length < 2) {
      return null; // If the array has less than 2 elements, return null
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    // Find the largest and second largest numbers
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }
  
    // If there's no second largest number, return null
    if (secondLargest === -Infinity) {
      return null;
    }
  
    return secondLargest;
  }
  
  // Test the function
  console.log(secondLargest([4, 2, 5, 7, 1])); // Output: 5
  