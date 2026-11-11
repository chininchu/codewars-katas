function openOrSenior(data){
  // "Senior" if age >= 55 and handicap > 7, otherwise "Open"
  return data.map(curr => curr[0] >= 55 && curr[1] > 7 ? "Senior" : "Open")
}