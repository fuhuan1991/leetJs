/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    // make coordinates
    const nodeMap = [];
    dfs(root, 0, 0, nodeMap);
    nodeMap.sort((a, b) => {
      if (a.x !== b.x) {
        return a.x - b.x;
      } else if (a.y !== b.y){
        return a.y - b.y;
      } else {
        return a.val - b.val;
      }
    });
  
    const r = [];
    let lastX = null;
    for (let item of nodeMap) {
      if (item.x === lastX) {
        r[r.length-1].push(item.val);
      } else {
        r.push([item.val]);
        lastX = item.x;
      }
    }
    console.log(r)
    return r;
  };
  
  var dfs = function (node, x, y, nodeMap) {
    if (!node) return;
    node.x = x;
    node.y = y;
    dfs(node.left, x-1, y+1, nodeMap);
    dfs(node.right, x+1, y+1, nodeMap);
    nodeMap.push(node);
  }