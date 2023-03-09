
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var invertTree = function(root) {
  if(root === null) return null; 
  let tempNode = root.left; 
  root.left = root.right; 
  root.right = tempNode; 

  if(root.left) invertTree(root.left); 
  if(root.right) invertTree(root.right); 
  return root; 
};