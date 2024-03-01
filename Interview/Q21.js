function removeVowels(str) {
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Filter out vowels from the string
    const result = str.split('').filter(char => !vowels.includes(char.toLowerCase())).join('');
  
    return result;
  }
  
  // Test the function
  console.log(removeVowels("Hello World")); // Output: "Hll Wrld"
  function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert strings to lowercase
    const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    // Sort the characters of the cleaned strings and compare them
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2;
  }
  
  // Test the function
  console.log(areAnagrams("listen", "silent")); // Output: true
  console.log(areAnagrams("hello", "world"));   // Output: false
  
  