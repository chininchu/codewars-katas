function persistence(num) {
  let stepCount = 0;
​
  while (num >= 10) {
    // Multiply all digits together
    const productOfDigits = String(num)
      .split("")
      .map(Number)
      .reduce((acc, digit) => acc * digit, 1);
​
    num = productOfDigits;
    stepCount++;
  }
​
  return stepCount;
}