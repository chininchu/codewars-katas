function moveZeros(arr) {
  // Collect all non-zero elements in their original order
  const nonZero = arr.filter(num => num !== 0);
​
  // Count how many zeros to append at the end
  const zeroCount = arr.length - nonZero.length;
​
  // Fill the tail with zeros and combine
  const zeros = Array(zeroCount).fill(0);
​
  return [...nonZero, ...zeros];
}