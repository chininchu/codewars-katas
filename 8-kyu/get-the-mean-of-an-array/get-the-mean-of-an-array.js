function getAverage(marks) {
  // Sum up each element divided by the array length (accumulates the average)
  const result = marks.reduce((acc, cur) => {
    const value = acc + cur / marks.length;
    return value;
  }, 0);
​
  // If the result has a decimal part, round it down; otherwise keep as-is
  const isDecimal = Number.isInteger(result) ? result : Math.floor(result);
​
  return isDecimal;
}
​