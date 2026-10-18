function findEvenIndex(arr) {
​
  // Sum of all elements in the array
  const totalSum = arr.reduce((accumulator, element) => accumulator + element, 0);
​
  // Running sum of everything to the left of the current index
  let leftSum = 0;
​
  for (let i = 0; i < arr.length; i++) {
​
    // Everything to the right = total minus left side and current element
    let rightSum = totalSum - leftSum - arr[i];
​
    // Found the balance point where both sides are equal
    if (leftSum === rightSum) {
      return i;
    }
​
    // Include current element in left sum before moving on
    leftSum += arr[i];
  }
​
  // No such index exists
  return -1;
}