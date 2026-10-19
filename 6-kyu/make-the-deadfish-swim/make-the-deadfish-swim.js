function parse(data) {
  // Store output values
  const finalArray = [];
  
  // Current numeric value
  let value = 0;
  
  for (const c of data) {
    switch (c) {
      case 'i':
        value++;         // Increment
        break;
        
      case 'd':
        value--;         // Decrement
        break;
        
      case 's':
        value = value * value; // Square the value
        break;
        
      case 'o':
        finalArray.push(value); // Output current value
        break;
        
      default:
        break;
    }
  }
  
  return finalArray;
}