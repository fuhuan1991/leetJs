/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
  return insert(root, val);
};

const insert = (root, val) => {
  if (!root || val > root.val) {
    const newNode = {
      val: val,
      left: root,
      right: null,
    }
    return newNode;
  } else {
    root.right = insert(root.right, val);
    return root;
  }
}