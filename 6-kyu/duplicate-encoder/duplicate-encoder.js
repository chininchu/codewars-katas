function duplicateEncode(word) {
  // Convert the input word to lowercase for case-insensitive comparison
  const str = word.toLowerCase();
  
  let finalResult = "";
​
  for (let i = 0; i < str.length; i++) {
    // If the first occurrence of the character differs from the last,
    // it means the character is duplicated — encode it as ")"
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      finalResult += ")";
    }
    // Otherwise, the character appears only once — encode it as "("
    else {
      finalResult += "(";
    }
  }
​
  // Return the encoded string
  return finalResult;
}