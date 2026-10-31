function simpleMultiplication(number) {
  // If the number is even, multiply it by 8;
  // otherwise (if odd), multiply it by 9.
  return number % 2 === 0 ? number * 8 : number * 9;
}