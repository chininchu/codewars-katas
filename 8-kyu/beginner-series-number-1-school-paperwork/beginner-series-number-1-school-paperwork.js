function paperwork(n, m) {
​
  // If either number of sheets (n) or minutes per sheet (m) is negative,
  // the task is invalid, so return 0. Otherwise, return total time needed.
  const result = n < 0 || m < 0 ? 0 : n * m;
​
  // Return the calculated result
  return result;
​
}