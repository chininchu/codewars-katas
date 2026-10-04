function filter_list(l) {
  // Return a new array with the strings filtered out
​
  
const newList = l.filter(element => typeof element === 'number')
  
return newList;
  
}
​
​
​