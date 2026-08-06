function removeSmallest(numbers) {
  // Return an empty array if the input is empty or invalid
  if (!numbers || numbers.length === 0) return [];
​
  // Math.min finds the smallest value; indexOf returns the FIRST (lowest) index of that value
  const minIndex = numbers.indexOf(Math.min(...numbers));
​
  // Return a new array omitting the smallest element at minIndex without mutating the original
  return numbers.filter((_, index) => index !== minIndex);
}