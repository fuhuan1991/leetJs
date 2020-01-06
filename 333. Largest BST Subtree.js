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
var largestBSTSubtree = function(root) {
    const max = {value: 0};
    if (!root) return max.value;
    getInfo(root, max);
    return max.value;
  };
  
  const getInfo = (root, o) => {
    if (!root) {
      return {
        max: -Infinity,
        min: Infinity,
        isBST: true,
        number: 0,
      }
    } else {
      const r1 = getInfo(root.left, o);
      const r2 = getInfo(root.right, o);
      const maxL = r1.max;
      const minR = r2.min;
      const isBST = r1.isBST && r2.isBST && maxL < root.val && root.val < minR;
      const number = r1.number + 1 + r2.number;
      if (isBST) {
        o.value = Math.max(o.value, number);
      }
      const maxRoot = Math.max(r1.max, r2.max, root.val); 
      const minRoot = Math.min(r1.min, r2.min, root.val);
      //   if (root.val === 5) {
      //       console.log(root.left)
      //       console.log(root.right)
      //       console.log(r1,r2)
      //       console.log(number)
      //   }
      // console.log(root.val, isBST, number)
      return {
        max: maxRoot,
        min: minRoot,
        isBST: isBST,
        number: number,
      }
    }
  }