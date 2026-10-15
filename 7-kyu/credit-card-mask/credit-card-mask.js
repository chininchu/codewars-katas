// Mask all but the last 4 characters of a string with '#'
function maskify(cc) {
  
  let finalString = ""; // build result here
  
  for (let i = 0; i < cc.length; i++) {
    
    const posFromEnd = cc.length - i; // distance from end (1-based)
    
    if (posFromEnd >= 5) {
      // Character is not in the last 4 -> replace with '#'
      finalString += cc[i].replace(cc[i], "#");
    } else {
      // Keep the last 4 characters as-is
      finalString += cc[i];
    }
  }
  
  return finalString;
}