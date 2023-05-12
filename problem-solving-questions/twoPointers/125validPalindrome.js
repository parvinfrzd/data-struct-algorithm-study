//first solution 
var isPalindrome = function(s) {
  if(s.length === 0 ) return true; 
     s = s.toLowerCase() .replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('');
     let right = s.length - 1; 
     let left = 0;
 
     while(right >= left) {
       if(s[left] !== s[right]) return false; 
       right --; 
       left ++; 
     }
 
     return true; 
 
};

//second solution 

var isValidPalindrome = function(s) {
  let left = 0; 
  let right = s.length - 1; 

  while(left <= right) {
    while(!isAlphaNumeric(s[left])) 
        left ++; 
    while(!isAlphaNumeric(s[right])) 
        right --;
    if(s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) return false;

    left++; 
    right --;
  }

  return true;
};

var isAlphaNumeric = function (str) {
  return /^[a-z0-9]+$/gi.test(str);
}