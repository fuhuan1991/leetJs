/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;
    return f(root, sum);
  };
  
  function f(node, rest) {
    if (!node.left && !node.right) {
      return node.val === rest;
    } else {
      const resultLeft = node.left? f(node.left, rest - node.val) : false;
      const resultRight = node.right? f(node.right, rest - node.val) : false;
      return resultLeft || resultRight;
    }
  }