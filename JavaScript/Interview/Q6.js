// Given a string, write a function that returns the most common character(s) in the string. If there are multiple characters with the same highest frequency, return all of them.

function mostCommonCharacters(str) {
    const charMap = {};
    let maxCount = 0;
    let mostCommonChars = [];
  
    // Count the occurrences of each character in the string
    for (let char of str) {
      charMap[char] = (charMap[char] || 0) + 1;
      if (charMap[char] > maxCount) {
        maxCount = charMap[char];
        mostCommonChars = [char];
      } else if (charMap[char] === maxCount) {
        mostCommonChars.push(char);
      }
    }
  
    return mostCommonChars;
  }
  
  // Test the function
  console.log(mostCommonCharacters("hello")); // Output: ["l"]
  