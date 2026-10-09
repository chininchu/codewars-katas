function accum(s) {
  // Initialize an empty string to accumulate our formatted characters
  let finalString = "";
​
  // Iterate over each character in the input string
  for (let i = 0; i < s.length; i++) {
    if (i >= 0) {
      // Build the pattern: 1 uppercase letter + lowercase letter repeated 'i' times + a hyphen separator
      finalString += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";
    }
  }
​
  // Remove the trailing hyphen at the end of the string and return the result
  return finalString.slice(0, -1);
}