// Question:

// Write a function that takes a string as input and returns the string with its characters in alphabetical order.

function sortString(str) {
    // Split the string into an array of characters, sort it, and join it back into a string
    return str.split('').sort().join('');
  }
  
  // Test the function
  console.log(sortString("hello")); // Output: "ehllo"
  