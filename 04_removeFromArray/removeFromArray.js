const removeFromArray = function(array, ...takeAway) {

  newArray = array.filter(value => !takeAway.includes(value));
  
  return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
