function findSmallestInt(arr) {
  // Sort numbers ascending (a-b keeps numeric order)
  const sortArray = arr.sort((a, b) => a - b);
​
  // First element is the smallest
  return sortArray[0];
}