var isValid = function(s) {
  if(s.length === 0 || s.length % 2 !== 0) return false; 
  let hash = { ')': '(' , ']': '[', '}': '{'};
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    if(hash[s[i]]){
      if (stack.length && stack[stack.length - 1] == hash[s[i]]) {
        stack.pop();
      } else {
        return false; 
      }
    } else {
      stack.push(s[i]);
    }
  }
  if(stack.length === 0) return true; 
  else{ return false; }
};