function areYouPlayingBanjo(name) {
  // Check if the first letter of the name is 'R' or 'r'
  if (name[0] === "R" || name[0] === "r") {
    // If it starts with R/r, they play banjo
    return `${name} plays banjo`;
  } else {
    // Otherwise, they do not play banjo
    return `${name} does not play banjo`;
  }
}