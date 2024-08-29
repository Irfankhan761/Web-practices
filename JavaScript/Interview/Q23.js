function mostFrequentChar(str) {
    const charMap = {};
    let maxFreq = 0;
    let mostFrequentChar = '';

    // Count the frequency of each character
    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
        if (charMap[char] > maxFreq) {
            maxFreq = charMap[char];
            mostFrequentChar = char;
        }
    }

    return mostFrequentChar;
}

// Test the function
console.log(mostFrequentChar("hello")); // Output: "l"
