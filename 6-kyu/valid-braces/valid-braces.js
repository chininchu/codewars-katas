function validBraces(braces) {
​
  // Stack to hold unmatched opening braces
  const finalBraces = [];
​
  // Loop through each character in the input string
  for (let i = 0; i < braces.length; i++) {
​
    // If it's an opening brace, push it onto the stack
    if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
      finalBraces.push(braces[i]);
​
    // If it's a closing bracket that matches the last opened "(", pop it
    } else if (finalBraces[finalBraces.length - 1] === "(" && braces[i] === ")") {
      finalBraces.pop();
​
    // Match closing "}" against last opened "{"
    } else if (finalBraces[finalBraces.length - 1] === "{" && braces[i] === "}") {
      finalBraces.pop();
​
    // Match closing "]" against last opened "["
    } else if (finalBraces[finalBraces.length - 1] === "[" && braces[i] === "]") {
      finalBraces.pop();
​
    // Any other case (unmatched or wrong closing brace) is invalid
    } else {
      return false;
    }
  }
​
  // Valid only if every opening brace was matched and popped
  return finalBraces.length === 0;
}