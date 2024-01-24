const reverseString = function(words) {
  
  let string = words;
  
  let reversed = string.split('').reverse().join('');
  
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
