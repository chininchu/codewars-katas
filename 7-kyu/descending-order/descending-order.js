function descendingOrder(n) {
  // Convert the number to a string, split into an array of digits
  // Sort the array in descending order (highest to lowest)
  // Join the array back into a string and convert to a Number
  return Number(String(n).split('').sort((a, b) => b - a).join(''));
}
​
​