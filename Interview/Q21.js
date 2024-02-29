function removeVowels(str) {
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Filter out vowels from the string
    const result = str.split('').filter(char => !vowels.includes(char.toLowerCase())).join('');
  
    return result;
  }
  
  // Test the function
  console.log(removeVowels("Hello World")); // Output: "Hll Wrld"
  