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
var maxLevelSum = function(root) {
  const level = [root];
  let max = -Infinity;
  let index = 1;
  let maxIndex = 1;
  while (level.length > 0) {
    const sum = getSumAndUpdateLevel(level);
    if (sum > max) {
        max = sum;
        maxIndex = index
    }
    index++;
  }
  return maxIndex;
};

const getSumAndUpdateLevel = (level) => {
  const len = level.length;
  let sum = 0;
  let i = 1;
  while (i <= len) {
    const node = level.shift();
    sum += node.val;
    if (node.left) level.push(node.left);
    if (node.right) level.push(node.right);
    i++;
  }
  return sum;
}


