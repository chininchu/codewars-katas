function updateLight(current) {
  const first = current[0];
​
  if (first === 'g') return 'yellow';
  if (first === 'r') return 'green';
  
  return 'red';
}