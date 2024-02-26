// Question:

// Write a function that takes an array of integers as input and returns the maximum sum of a contiguous subarray within the array.

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    // Iterate through the array, updating maxSum and currentSum
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Test the function
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
