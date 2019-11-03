/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const r = [];
    if(root){
      f(root, r);
    }
    return r;
  };
  
  function f (node, r) {
    r.push(node.val);
    if (node.left) {
      f(node.left, r)
    }
    if (node.right) {
      f(node.right, r)
    }
  }