/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkEqualTree = function(root) {
  if (!root) return false;
  const sum = getSum(root);
  const target = sum/2;
  const result = {value: false};
  check(root, target, result);
  return result.value;
};

const getSum = (node) => {
  if (!node) return 0;
  return getSum(node.left) + getSum(node.right) + node.val;
}

const check = (node, target, result) => {
  if (!node) return 0;
  const sum1 = check(node.left, target, result);
  const sum2 = check(node.right, target, result);

  if ((sum1 === target && node.left) || (sum2 === target && node.right)) result.value = true;

  return node.val + sum1 + sum2;
}