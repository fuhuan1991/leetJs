/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var findClosestLeaf = function(root, k) {
  let target = null;
  connect(root, k, (t) => {
    target = t;
  });
  const Q = [target];
  const mem = new Set();
  while(Q.length > 0) {
    const node = Q.shift();
    mem.add(node);
    if (node.left === null && node.right === null) {
      return node.val;
    } else {
      if (node.left && !mem.has(node.left)) Q.push(node.left);
      if (node.right && !mem.has(node.right)) Q.push(node.right);
      if (node.parent && !mem.has(node.parent)) Q.push(node.parent);
    }
  }
};

const connect = (node, k, cb) => {
  if (node.val === k) cb(node);
  if (node.left) {
    node.left.parent = node;
    connect(node.left, k, cb);
  }
  if (node.right) {
    node.right.parent = node;
    connect(node.right, k, cb);
  }
}