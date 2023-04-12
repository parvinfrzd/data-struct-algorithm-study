var simplifyPath = function(path) {
  var stack = []; 
  var result = []; 

  path = path.split('/'); 

  for(let i = 0; i < path.length; i ++) {
      if(path[i] === '..' && stack ) stack.pop(); 
      else if(path[i] !== '' && path[i] !== '.') stack.push(path[i]); 
  }

  if (stack.length === 0) return '/';

  while(stack.length > 0) {
      result.unshift(stack[stack.length-1]);
      result.unshift('/');
      stack.pop();
  }

  return result.join('');
};