var lengthOfLongestSubstring = function(s) {
  var start = 0; 
  var result = 0; 
  var charCollection = {}; 

  for(let i = 0; i < s.length; i++) {
      let currentChar = s.charAt(i);
      if(currentChar in charCollection) {
          start = Math.max(start, charCollection[currentChar] + 1);
      }
      charCollection[currentChar] = i; 
      result = Math.max(result, i - start + 1);
  }    
  return result;
};