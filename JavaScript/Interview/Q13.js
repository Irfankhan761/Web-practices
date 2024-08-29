
// Question:

// Write a function that takes a string as input and returns the same string with all consecutive duplicate characters collapsed into a single character.

function collapseDuplicates(str) {
    let collapsedString = '';
  
    // Iterate through the string
    for (let i = 0; i < str.length; i++) {
      // If the current character is different from the previous one, append it to collapsedString
      if (str[i] !== str[i + 1]) {
        collapsedString += str[i];
      }
    }
  
    return collapsedString;
  }
  
  // Test the function
  console.log(collapseDuplicates("aaabbbcccd")); // Output: "abcd"
  