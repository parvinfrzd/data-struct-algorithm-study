var romanToInt = function(s = '') {
  hash = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }; 
  let result = 0; 
  for (let i = 0; i < s.length; i++) {
    if(i+1 < s.length && hash[s[i]] < hash[s[i+1]]) {
        result -= hash[s[i]]; 
    } else {
      result += hash[s[i]]; 
    }
  }

  return result

};

console.log(romanToInt('III')); 