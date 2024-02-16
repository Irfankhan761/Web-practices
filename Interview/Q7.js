// Question:
// Given an array of integers, write a function that returns the maximum product of two distinct elements in the array.

function maxProductOfTwo(arr) {
    let maxProduct = Number.NEGATIVE_INFINITY;
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // Calculate the product of current pair of elements
            const product = arr[i] * arr[j];
            // Update maxProduct if the current product is greater
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    return maxProduct;
}

// Test the function
console.log(maxProductOfTwo([3, 5, 2, 6, 8, 1])); // Output: 48
