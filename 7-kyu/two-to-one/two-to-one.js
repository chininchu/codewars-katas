function longest(s1, s2) {
  // your code
  
​
const uniqueSet = new Set();
​
 for(let i = 0; i < s1.length; i++){
   
   
   for(let j = 0; j < s2.length; j++){
     
    uniqueSet.add(s1[i]);
    uniqueSet.add(s2[j]);
​
​
}
   
   
}
  
  
  return [...uniqueSet].sort().join('');
  
​
}