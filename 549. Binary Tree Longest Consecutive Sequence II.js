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
    if (!root) return 0; 
    const r = {val : 0}
    f(root, r);
    return r.val;
  };
  
  function f(node, result) {
    // let maxLeftDown, maxLeftUp, maxRightDown, maxRightUp;
    let inr = 1, drc = 1;
    if (node.left) {
      const rLeft = f(node.left, result);
      if (node.val === node.left.val + 1) drc = rLeft[1] + 1;
      if (node.val === node.left.val - 1) inr = rLeft[0] + 1; 
    }
    if (node.right) {
      const rRight = f(node.right, result);
      if (node.val === node.right.val + 1) drc = Math.max(drc, rRight[1] + 1);
      if (node.val === node.right.val - 1) inr = Math.max(inr, rRight[0] + 1); 
    }
    if (result.val < drc + inr -1) result.val = drc + inr -1;
    return [inr, drc];
  }