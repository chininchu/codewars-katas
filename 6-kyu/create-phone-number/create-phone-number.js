function createPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join('');
  const prefix   = numbers.slice(3, 6).join('');
  const lineNum  = numbers.slice(6).join('');
​
  return `(${areaCode}) ${prefix}-${lineNum}`;
}