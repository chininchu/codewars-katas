function sum(numbers) {
  // Initialize a variable to hold the running total, starting at 0
  let finalResult = 0;
​
  // Loop through each element in the input array
  for (let i = 0; i < numbers.length; i++) {
    // Add the current number in the array to the running total
    finalResult += numbers[i];
  }
​
  // Return the final sum after processing all elements
  return finalResult;
}