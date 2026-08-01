function invert(array) {
​
  const newArraySet = [];
​
  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      newArraySet.push(-array[i]);
    } else {
      newArraySet.push(-1 * array[i]);
    }
  }
​
  return newArraySet;
}