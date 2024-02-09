function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Check if the reversed string is equal to the original string
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
  }
  
  // Test the function
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
  console.log(isPalindrome("race car")); // Output: true
  console.log(isPalindrome("hello world")); // Output: false
  