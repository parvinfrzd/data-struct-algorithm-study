var isSubtree = function(root, subRoot) {
  if(!root) return false; 

  if(isSameTree(root, subRoot)) return true; 

  return (isSameTree(root.left, subRoot) || isSameTree(root.right, subRoot)); 
};

var isSameTree = function(p, q) {
  if(!p && !q) return true;
  if(!p || !q) return false; 
  if(p.val !== q.val) return false; 

  
  return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};