function digPow(n, p) {
  // Convert the number to a string so we can loop over each digit
  const digits = n.toString();
​
  // Accumulate sum of each digit raised to an increasing power (p, p+1, p+2, ...)
  let digitPowerSum = 0;
​
  for (let i = 0; i < digits.length; i++) {
    const currentDigit = Number(digits[i]);
    const currentExponent = p + i;
​
    digitPowerSum += Math.pow(currentDigit, currentExponent);
  }
​
  // Return the multiplier k if the sum is divisible by n, otherwise -1
  return digitPowerSum % n === 0 ? digitPowerSum / n : -1;
}