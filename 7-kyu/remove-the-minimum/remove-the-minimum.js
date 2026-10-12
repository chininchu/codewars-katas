function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
​
  // Find the smallest number
  const min = Math.min(...numbers);
​
  // Track if we've removed the first occurrence
  let seen = false;
​
  // Keep everything except the first instance of min
  const filteredList = numbers.filter(num => {
    if (num !== min) return true;
​
    if (!seen) {
      seen = true;
      return false;
    }
​
    return true;
  });
​
  return filteredList;
}