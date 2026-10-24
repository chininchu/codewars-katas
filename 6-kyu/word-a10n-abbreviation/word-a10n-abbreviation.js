function abbreviate(string) {
​
  // Find runs of 4+ ASCII letters; everything else passes through untouched
  const result = string.replace(/[a-zA-Z]{4,}/g, (word) => {
​
    // Numeronym: first letter + count of middle letters + last letter
    // e.g. "abbreviation" -> "a12n"
    const finalResult =
      word[0] +
      word.slice(1, word.length - 1).length +  // inner length = word.length - 2
      word[word.length - 1];
​
    return finalResult;
  });
​
  return result;
  
}