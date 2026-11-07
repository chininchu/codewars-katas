function findOutlier(integers) {
  // Get all odd numbers
  const oddNumber = Number(integers.filter(num => num % 2 !== 0));
​
  // Get all even numbers
  const evenNumber = Number(integers.filter(num => num % 2 === 0));
​
  // Return the first truthy value (odd if exists, else even)
  return oddNumber || evenNumber;
}
​