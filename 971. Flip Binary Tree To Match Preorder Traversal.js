/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
    const indexMap = {};
    for (let i = 0; i <= voyage.length-1; ++i) {
      const v = voyage[i];
      if (indexMap[v]) return [-1];
      indexMap[v] = i;
    }
    const needToFlip = [];
    let invalid = false;
    check(root, voyage, indexMap, needToFlip, () => {
      invalid = true;
    });
    if (invalid) return [-1];
    return needToFlip;
  };
  
  const check = (node, voyage, indexMap, needToFlip, fail) => {
    const iRoot = indexMap[node.val];
    if (node.left && node.right) {
      const iLeft = indexMap[node.left.val];
      const iRight = indexMap[node.right.val];
      if (iLeft === iRoot + 1) {
        check(node.left, voyage, indexMap, needToFlip, fail);
        check(node.right, voyage, indexMap, needToFlip, fail);
      } else if (iRight === iRoot + 1) {
        needToFlip.push(node.val);
        check(node.left, voyage, indexMap, needToFlip, fail);
        check(node.right, voyage, indexMap, needToFlip, fail);
      } else {
        fail();
      }
    } else if (node.left || node.right) {
      const childNode = node.left? node.left : node.right;
      const childVal = childNode.val;
      const childIndex = indexMap[childVal];
      if (childIndex === iRoot + 1) {
        check(childNode, voyage, indexMap, needToFlip, fail);
      } else {
        fail();
      }
    }
  }