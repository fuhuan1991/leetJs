/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    const r = [];
    verticalSearch(root, target, K, r)
  };
  
  const verticalSearch = (node, target, k, r) => {
    if (!node) return Infinity;
    if (node === target) {
      return 1;
    }
    const leftRange = verticalSearch(node.left, target, k, r);
    const rightRange = verticalSearch(node.right, target, k, r);
    // const targetIsInRange = verticalSearch(node.left, target) || verticalSearch(node.right, target);
    const targetRange = Math.min(leftRange, rightRange)
    if (k === targetRange) {
      r.push(node);
    } else if (targetRange < k) {
      if (leftRange === Infinity) findBelow(node.left, r, (k - targetRange - 1)); 
      if (rightRange === Infinity) findBelow(node.right, r, (k - targetRange - 1)); 
    }
    console.log(node.val, targetRange);
    if (targetRange === Infinity) return Infinity;
    return targetRange+1;
  }
  
  const findBelow = (node, r, k) => {
    if (!node) return;
    if (k === 0) {
      r.push(node);
    } else {
      findBelow(node.left, r, k-1);
      findBelow(node.right, r, k-1);
    }
  }