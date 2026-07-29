function arrayDiff(a, b) {
  
  const bSet = new Set(b);
  
  
  return a.filter(item => !bSet.has(item));
  
 }
​
  
​