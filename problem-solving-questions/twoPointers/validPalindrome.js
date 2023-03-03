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

console.log(isPalindrome("A man, a plan, a canal: Panama"))