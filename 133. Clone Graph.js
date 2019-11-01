/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const nodeMap = new Map();
    return clone(node, nodeMap);
  };
  
  var clone = function (oldNode, nodeMap) {
      // console.log(oldNode.val)
    if (nodeMap.has(oldNode)) {
      return nodeMap.get(oldNode);
    }
  
    const newNode = {val: oldNode.val, neighbors: []};
    nodeMap.set(oldNode, newNode);
    for (let child of oldNode.neighbors) {
      const replica = clone(child, nodeMap);
      newNode.neighbors.push(replica);
    }
    
    return newNode;
  }