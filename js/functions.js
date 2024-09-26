/* eslint-disable no-console */


function checkLengthString(string,maxLength){
  return string.length <= maxLength;
}

console.log(checkLengthString('привет', 10));
console.log(checkLengthString('привет', 5));

function checkPalindrome(string){
  for (let i = 0; i < string.length / 2; i++){
    if (string[i] !== string[string.length - 1 - i]){
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome('привет'));
console.log(checkPalindrome('топот'));
