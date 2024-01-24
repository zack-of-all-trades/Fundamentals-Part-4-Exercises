const repeatString = function(string, num) {

  let repeatStr = '';
  
  if(num < 0) return 'ERROR';

  while (num > 0){
    repeatStr += string;
    num--;
  }
  return repeatStr;
}

// Do not edit below this line
module.exports = repeatString;
