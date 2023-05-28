var kthSmallest = function(root, k, smallest = []) {
  if(!root) return smallest; 
  return dfs(root,k,smallest); 
}
function dfs(root, k, smallest=[]) {
  if(root.left) kthSmallest(root.left, k, smallest); 
  smallest.push(root.val); 
  if(root.right) kthSmallest(root.right, k, smallest);
  return smallest[k-1]; 
}
