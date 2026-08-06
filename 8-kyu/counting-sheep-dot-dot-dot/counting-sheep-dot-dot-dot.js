function countSheeps(sheep) {
  
  // We receive an array containing boolean values (true or false).
  // We will iterate over the array to check each element.
  // A conditional statement checks if sheep[i] is true; if so, we increment a counter variable named numberOfSheep.
  
  let numberOfsheep = 0;
  
  for(let i = 0; i < sheep.length; i++){
    
    // If the current element is true, add it to the count.
    if(sheep[i] === true ){
      
      numberOfsheep += sheep[i];
      
    }
    
    // If the element is false, undefined, or null, skip to the next iteration.
    else if(sheep[i] === false || sheep[i] === undefined || sheep[i] === null){
      
      continue;
      
    }    
   
  }
  
  return numberOfsheep;
}