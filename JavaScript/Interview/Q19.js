function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    let leftProduct = 1;
    let rightProduct = 1;

    // Calculate left products
    for (let i = 0; i < n; i++) {
        result[i] *= leftProduct;
        leftProduct *= nums[i];
    }

    // Calculate right products and multiply them with left products
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}

// Test the function
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
