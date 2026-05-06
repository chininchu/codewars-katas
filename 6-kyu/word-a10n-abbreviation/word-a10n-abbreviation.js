function abbreviate(string) {
  // ...
  
  let finalResult = "";
  let currentWord = "";  // ADD THIS: to build each word
  
  for(let i = 0; i < string.length; i++ ){
    
    // ADD THIS: check if current character is a letter
    if((string[i] >= 'a' && string[i] <= 'z') || (string[i] >= 'A' && string[i] <= 'Z')) {
      currentWord += string[i];  // ADD THIS: build the word
    } else {
      // ADD THIS: word just ended, process it
      if(currentWord.length >= 4){
        finalResult += currentWord[0] + String(currentWord.length - 2) + currentWord[currentWord.length - 1];
      } else {
        finalResult += currentWord;
      }
      
      finalResult += string[i];  // ADD THIS: add the separator
      currentWord = "";  // ADD THIS: reset for next word
    }
    
    // REMOVE OR COMMENT OUT your old logic:
    /*
    if(string.length >=4){
      finalResult = string[0] + String(string.length - 2) + string[string.length - 1];
    }
    else if(string.length <= 3){
      finalResult +=  string[i];
      console.log(finalResult);
    }
    */
    
  }
  
  // ADD THIS: handle the last word if string doesn't end with separator
  if(currentWord.length >= 4){
    finalResult += currentWord[0] + String(currentWord.length - 2) + currentWord[currentWord.length - 1];
  } else {
    finalResult += currentWord;
  }
  
  return finalResult;
}