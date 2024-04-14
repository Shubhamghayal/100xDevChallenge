/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '')
  var reverseStr = lowRegStr.split('').reverse().join('');
  if (reverseStr===lowRegStr){
    return true
  }
  else{
    return false
  }

}

module.exports = isPalindrome;
