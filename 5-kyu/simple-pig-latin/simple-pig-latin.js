function pigIt(str) {
  // Match each word: capture the first letter, then the rest
  const regex = /([a-zA-Z])[a-zA-Z]*/g;
​
  const result = str.replace(regex, (word, first) => {
    // Move the first letter to the end and append "ay"
    const rest = word.slice(1);
    return rest + first + 'ay';
  });
​
  return result;
}