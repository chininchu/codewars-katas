function XO(str) {
    //code here
  
​
const countX = (str.match(/x/gi) ?? []).length; // count 'x' occurrences
  
const countO = (str.match(/o/gi) ?? []).length; // count 'o' occurrences
​
return countX === countO; // return true if counts are equal
​
​
  
​
  
  
  
  
  
  
}