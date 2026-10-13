function arrayDiff(a, b) {
  
​
  const secondListSet = new Set(b);
  
  const newList = a.filter(num => !secondListSet.has(num));
  
  return newList;  
  
  
  
}