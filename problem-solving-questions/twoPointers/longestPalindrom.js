/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s === s.split("").reverse().join("")) return s;
  var start = 0; 
  var result = '';
  var currentCharCollection = '';
  var resultLength = 0; 

  for (let end = 0; end < s.length; end ++) {
      currentCharCollection += s.charAt(end);
      if(currentCharCollection === currentCharCollection.split("").reverse().join("")) {
        
        result = currentCharCollection;
      }
        start = Math.max(start, result[end] + 1);
      console.log(result, currentCharCollection)


      
  }
  return result;
};

/*
cbbd 
start = 0 
end = 0
result = c 

start = 0 
end = 1 
result = cb X 

start = math.Max(start, result[end] + 1)


start = 1; 
end = 2; 
result = bb; it passes 


 */