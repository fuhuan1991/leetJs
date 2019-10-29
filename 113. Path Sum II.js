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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) return [];
    const r = [];
    f(root, sum, [], r);
    return r;
  };
  
  
  function f(node, rest, path, r) {
    const newPath = path.concat(node.val);
    if (!node.left && !node.right) {
      if (node.val === rest) r.push(newPath);
    } else {
      if (node.left) f(node.left, rest - node.val, newPath, r);
      if (node.right) f(node.right, rest - node.val, newPath, r);
    }
  }
  