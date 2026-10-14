function isIsogram(str){
  
  const isUnique = new Set(str.toLowerCase());
  const compareLength = isUnique.size === str.toLowerCase().length;
  return compareLength;
  
 }