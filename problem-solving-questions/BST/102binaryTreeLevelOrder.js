var levelOrder = function(root) {
  if(!root) return []; 

  let res = []; 
  let q = []; 
  q.push(root);
  while(q.length) {
      let level = [];
      
      for (let i = (q.length - 1); 0 <= i; i--) {
          let node = q.shift(); 
          if(node.left) q.push(node.left); 
          if(node.right) q.push(node.right);
          level.push(node.val); 
      }
      if (level)
          res.push(level.slice());
  }

  return res; 
};