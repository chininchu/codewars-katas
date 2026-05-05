function toCamelCase(str) {
  // Handle edge case: empty string should return empty string
  if (str === '') return '';
​
  let result = '';
​
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
​
    // If current char is a delimiter and there's a next char
    if ((char === '_' || char === '-') && i + 1 < str.length) {
      // Skip delimiter, take next char and uppercase it
      result += str[++i].toUpperCase();
    } else {
      // Otherwise just append the char as-is
      result += char;
    }
  }
​
  return result;
}