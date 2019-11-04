/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    const arr = [];
    check(s, t, arr);
    for (let node of arr) {
      if (analysis(node, t)) return true;
    }
    return false;
  };
  
  
  const check = function(node, t, arr) {
      // console.log(node.val, t.val)
    if (!node) return;
    if (t.val === node.val) arr.push(node);
    check(node.left, t, arr);
    check(node.right, t, arr);
  }
  
  const analysis = function (node, model) {
    if (!node && !model) return true;
    if (!node || !model) return false;
    
    if (node.val === model.val) {
      return analysis(node.left, model.left) && analysis(node.right, model.right);
    } else return false;
  }