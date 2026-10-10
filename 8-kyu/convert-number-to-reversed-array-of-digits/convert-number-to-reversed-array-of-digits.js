function digitize(n) {
  
  
  const str = String(n).split("").join("");
  
  const finalOutput = [];
  
  
  for(let i = str.length -1 ; i >= 0; i--){
    
    finalOutput.push(Number(str[i]));
    
  }
  
 return finalOutput;
  
  
}