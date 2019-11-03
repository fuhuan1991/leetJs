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
var rob = function(root) {
  const cache = [];
  return f(root, cache);
};

var f = function (node, cache) {
  if (!node) {
    return 0;
  }

  if (cache[node]) {
    return cache[node];
  }

  if (!node.left && !node.right) {
    return node.val;
  }

  const s1_left = node.left ? f(node.left.left, cache) + f(node.left.right, cache) : 0;
  const s1_right = node.right ? f(node.right.left, cache) + f(node.right.right, cache) : 0;
  const s1 = node.val + s1_left + s1_right;
  const s2 = f(node.left, cache) + f(node.right, cache);

  const r = Math.max(s1, s2);
  cache[node] = r;
  return r;
}