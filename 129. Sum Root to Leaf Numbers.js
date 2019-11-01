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
var sumNumbers = function(root) {
    const r = {val: 0};
    if (!root) return 0;
    f(root, 0, r);
    return r.val;
  };
  
  function f(node, num, r) {
    const newNum = num*10 + node.val;
    if (!node.left && !node.right) {
      r.val = r.val + newNum;
    } else {
      if (node.left) f(node.left, newNum, r);
      if (node.right) f(node.right, newNum, r);
    }
  }