function findOutlier(integers) {
  // Split into odds and evens — filter keeps elements where callback returns true
  const odds = integers.filter(num => num % 2 !== 0);
  const evens = integers.filter(num => num % 2 === 0);
​
  // Whichever group has only ONE member holds the outlier, so grab that element
  const compareLength = odds.length > evens.length ? evens[0] : odds[0];
​
  return compareLength;
}