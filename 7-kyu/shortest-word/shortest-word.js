function findShort(s) {
  // Split the string into an array of words using space as delimiter
  const result = s.split(" ").sort((a, b) => {
    // Sort by comparing word lengths (ascending order)
    return a.length - b.length;
  });
​
  // Return the length of the shortest word (first element after sorting)
  return result[0].length;
​
}