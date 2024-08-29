// Write a function to reverse a string without using the built-in reverse() method.
function reverseString(str) {
    let reversed = '';
  
    // Iterate backward through the string and append each character to reversed
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  
    return reversed;
  }
  
  // Test the function
  console.log(reverseString("hello")); // Output: "olleh"
  