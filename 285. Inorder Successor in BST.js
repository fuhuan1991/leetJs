/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if (!root) return null;
  
    if (p.right) {
      // has right children
      let r = p.right;
      while (r.left) {
        r = r.left;
      }
      return r;
    } else {
      // no right children
      if (root === p) {
        // no father
        return null;
      } else {
        const r = [];
        inOrder(root, p, false, r);
        // return r.node;
      }
    }
  };
  
  const inOrder = (node, r) => {
    if (!node) return;
  
    inOrder(node.left, r);
    console.log(node.val)
    r.push(node.val)
    inOrder(node.right, r);
    
  }