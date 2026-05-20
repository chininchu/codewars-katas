function areYouPlayingBanjo(name) {
  let result = "";
​
  // Loop through the first character only
  for (let i = 0; i < 1; i++) {
    if (name[i] === 'R' || name[i] === 'r') {
      result = name + " plays banjo";
    } else {
      result = name + " does not play banjo";
    }
  }
​
  return result;
}