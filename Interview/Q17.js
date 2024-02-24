// Question:

// Write a function that takes an array of numbers and returns the "majority" element. A majority element is an element that appears more than ⌊ n/2 ⌋ times, where n is the length of the array. Assume the array always has a majority element.

function majorityElement(nums) {
    let majority = nums[0];
    let count = 1;

    // Find the majority element using Boyer-Moore Voting Algorithm
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === majority) {
            count++;
        } else {
            count--;
            if (count === 0) {
                majority = nums[i];
                count = 1;
            }
        }
    }

    return majority;
}

// Test the function
console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])); // Output: 4
