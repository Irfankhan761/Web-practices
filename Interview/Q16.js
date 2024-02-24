// Write a function that takes a number as input and returns true if the number is a prime number, otherwise returns false.

function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
      return false;
    }
  
    // Check if the number is divisible by any integer from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // If divisible, it's not a prime number
      }
    }
  
    return true; // If not divisible by any number, it's a prime number
  }
  
  // Test the function
  console.log(isPrime(17)); // Output: true
  