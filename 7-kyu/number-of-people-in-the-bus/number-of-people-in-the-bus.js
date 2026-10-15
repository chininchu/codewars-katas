var number = function(busStops){
  // Good Luck!
  
  let onTheBus = 0;   // total passengers who got on
  let ofTheBus = 0;   // total passengers who got off
  
  const result = busStops.map((row, index) => {
    
    if(row[0]) onTheBus += row[0]   // add passengers boarding
    if(row[1]) ofTheBus += row[1]   // subtract passengers alighting
​
    });
  
  return onTheBus - ofTheBus;       // net passengers remaining on the bus
  
  
}