function maximumProduct(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    const n = nums.length;

    // The maximum product can either be the product of the three largest numbers or the product of the two smallest numbers and the largest number
    return Math.max(nums[n - 1] * nums[n - 2] * nums[n - 3], nums[0] * nums[1] * nums[n - 1]);
}

// Test the function
console.log(maximumProduct([-4, -3, -2, -1, 1, 2, 3])); // Output: 36 (product of -4, -3, and 3)
console.log(maximumProduct([-1, -2, -3, -4]));          // Output: -6 (product of -1, -2, and -3)
