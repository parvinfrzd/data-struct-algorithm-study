var convert = function(s, numRows) {
  if (numRows === 1) return s;

  const step = 2 * numRows - 2; 
  var result = '';

  for (let i = 0; i < numRows; i ++) {
    for (let j = i ; j < s.length; j+=step) {
      result += s.charAt(j);
      if( i !== 0 && i !== numRows - 1 && (j + step -2 * i) < s.length) {
        result += s[j + step - 2 * i];
      }
    }
  } 

  return result; 
};