function findOdd(A) {
  // Create a frequency map to count occurrences of each number
  const m = new Map();
​
  // Iterate through the array and count each element's occurrences
  for (let i = 0; i < A.length; i++) {
    // Get current count (default to 0 if not found) and increment by 1
    m.set(A[i], (m.get(A[i]) || 0) + 1);
  }
​
  // Loop through the map entries to find the element with an odd count
  for (const [key, value] of m) {
    // If the count is odd, return that number
    if (value % 2 !== 0) {
      return key;
    }
  }
}