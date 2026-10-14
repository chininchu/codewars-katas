function solution(str) {
  // If the string has an odd length, append an underscore
  // so it can be split evenly into pairs of characters
  if (str.length % 2 !== 0) str += "_";
​
  // Array that will hold the resulting two-character chunks
  const finalArray = [];
​
  // Step through the string two characters at a time
  for (let i = 0; i < str.length; i += 2) {
    // Grab the pair starting at index i and push it into the result
    finalArray.push(str.slice(i, i + 2));
  }
​
  // Return the array of pairs, e.g. "abcdef" -> ["ab", "cd", "ef"]
  return finalArray;
}