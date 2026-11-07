function revrot(str, sz) {
  if (sz <= 0 || !str || sz > str.length) return "";
​
  let result = "";
​
  for (let i = 0; i <= str.length - sz; i += sz) {
    let chunk = str.slice(i, i + sz);
​
    // Sum of digits (parity is identical to sum of cubes)
    let sum = [...chunk].reduce((acc, char) => acc + Number(char), 0);
​
    // If sum is even, reverse; otherwise, rotate left by 1 position
    if (sum % 2 === 0) {
      result += chunk.split("").reverse().join("");
    } else {
      result += chunk.slice(1) + chunk[0];
    }
  }
​
  return result;
}