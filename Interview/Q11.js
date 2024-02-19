// Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) contained in the string. Ignore case sensitivity.


function countVowels(str) {
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Convert the input string to lowercase
    str = str.toLowerCase();
    
    let count = 0;
    
    // Iterate through the string and count the occurrences of vowels
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    
    return count;
  }
  
  // Test the function
  console.log(countVowels("Hello World")); // Output: 3
  