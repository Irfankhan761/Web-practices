function uniqueElements(arr) {
    const uniqueArr = [];
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current element is not already in uniqueArr, add it
      if (!uniqueArr.includes(arr[i])) {
        uniqueArr.push(arr[i]);
      }
    }
    
    return uniqueArr;
  }
  
  // Test the function
  console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
  