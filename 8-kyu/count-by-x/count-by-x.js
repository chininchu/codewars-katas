function countBy(x, n) {
  // Array to store the multiples of x
  const newArray = [];
​
  // Loop from 0 up to (but not including) n
  for (let i = 0; i < n; i++) {
    // Push the (i+1)-th multiple of x into the array
    newArray.push((i + 1) * x);
  }
​
  // Return the array of n multiples
  return newArray;
}
​