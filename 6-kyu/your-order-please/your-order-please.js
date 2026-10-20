function order(words) {
  // Split the input string into an array of words
  const splitAndSort = words.split(" ").sort((wordA, wordB) => {
    // Extract the first digit from wordA and wordB using regex
    const numA = wordA.match(/\d/)[0];
    const numB = wordB.match(/\d/)[0];
    
    // Compare the numeric values to sort in ascending order
    return numA - numB;
  });
​
  // Join the sorted array back into a single string and return it
  return splitAndSort.join(" ");
}