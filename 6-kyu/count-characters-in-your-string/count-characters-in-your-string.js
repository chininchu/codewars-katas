function count(string) {
  // Return an empty object if the input string is empty
  if (string.length === 0) return {};
​
  // Map to store the frequency of each character
  const charFrequency = new Map();
​
  // Loop through each character in the string
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }
​
  // Convert the Map to a plain object and return
  return Object.fromEntries(charFrequency);
}