/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function(root) {
    if (!root) {
      return 1;
    }
    let maxMid = 1;
    let maxLeft, maxRight;
    maxLeft = root.left ? f(1, root.val, root.left) : 0;
    maxRight = root.right ? f(1, root.val, root.right) : 0;
    return Math.max(maxLeft, maxMid, maxRight);
  };
  
  function f(len, prev, node) {
    let maxLeft, maxRight, maxMid;
  
    if (node.val === prev + 1) {
      maxMid = len + 1;
      maxLeft = node.left ? f(len + 1, node.val, node.left) : 0;
      maxRight = node.right ? f(len + 1, node.val, node.right) : 0;
      return Math.max(maxLeft, maxMid, maxRight);
    } else {
      maxMid = len;
      maxLeft = node.left ? f(1, node.val, node.left) : 0;
      maxRight = node.right ? f(1, node.val, node.right) : 0;
      return Math.max(maxLeft, maxMid, maxRight);
    }
  }