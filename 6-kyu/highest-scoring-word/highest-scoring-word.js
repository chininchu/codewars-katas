function high(x) {
  const words = x.split(" ");
  
  let highestScore = 0;
  let bestWord = "";
  
  for (let i = 0; i < words.length; i++) {
    let currentScore = 0;
    
    for (let j = 0; j < words[i].length; j++) {
      currentScore += words[i][j].charCodeAt(0) - 96;
    }
    
    if (currentScore > highestScore) {
      highestScore = currentScore;
      bestWord = words[i];
    }
  }
  
  return bestWord;
}