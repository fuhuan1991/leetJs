/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const arr1 = [];
    inorder(root1, arr1);
    const arr2 = [];
    inorder(root2, arr2);
    let i = 0, j = 0;
    const r = [];
  // console.log(arr1, arr2)
    while (i <= arr1.length-1 || j <= arr2.length-1) {
      if (i === arr1.length) {
        r.push(arr2[j]);
        j++;
      } else if (j === arr2.length) {
        r.push(arr1[i]);
        i++;
      } else if (arr1[i] <= arr2[j]) {
        r.push(arr1[i]);
        i++;
      } else {
        r.push(arr2[j]);
        j++;
      }
    }
    return r;
  };
  
  const inorder = (node, container) => {
    if (!node) return;
  
    inorder(node.left, container);
    container.push(node.val);
    inorder(node.right, container);
  }