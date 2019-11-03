/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if (!root) return null;
    const r = f(root);
    r[0].left = r[1];
    r[1].right = r[0];
    return r[0];
  };
  
  function f (node) {
  
    const result = [null, null];
  
    if (node.left) {
      const resultL = f(node.left);
      const LL = resultL[0];
      const LR = resultL[1];
      LR.right = node;
      node.left = LR;
      result[0] = LL;
    } else {
      result[0] = node;
    }
  
    if (node.right) {
      const resultR = f(node.right);
      const RL = resultR[0];
      const RR = resultR[1];
      RL.left = node;
      node.right = RL;
      result[1] = RR;
    } else {
      result[1] = node;
    }
    
    return result;
  }