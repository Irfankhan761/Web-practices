// Write a function that takes a string as input and returns the string with each word reversed.


function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');
  
    // Iterate through the array of words
    const reversedWords = words.map(word => {
      // Reverse each word and return it
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back into a single string
    return reversedWords.join(' ');
  }
  
  // Test the function
  console.log(reverseWords("Hello World")); // Output: "olleH dlroW"
  