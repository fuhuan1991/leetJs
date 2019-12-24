/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */
var deleteTreeNodes = function(nodes, parent, value) {
  const nodeMap = {};
  const blockedNodes = {};

  for (let i = 0; i <= parent.length - 1; i++) {
    const p = parent[i];
    if (nodeMap[p] === undefined) {
      nodeMap[p] = [i];
    } else {
      nodeMap[p].push(i);
    }
  }
  analyzeNode(nodeMap, 0, value, blockedNodes);

  // run a BFS, count the number of node left.
  const queue = [0];
  let result = 0;
  
  while (queue.length > 0) {
    const index = queue.shift();
    if (blockedNodes[index] === undefined) {
      result++;
      if (nodeMap[index] !== undefined) {
        for (let child of nodeMap[index]) {
          queue.push(child);
        }
      }
    }
  }
  return result;
  // console.log(blockedNodes)
};

const analyzeNode = (nodeMap, index, value, blockedNodes) => {
  if (nodeMap[index] === undefined) {
    // this node has no children
    if (value[index] === 0) blockedNodes[index] = true;
    return value[index];
  } else {
    let sum = 0;
    for (let child of nodeMap[index]) {
      sum += analyzeNode(nodeMap, child, value, blockedNodes);
    }
    sum += value[index];
    if (sum === 0) blockedNodes[index] = true;
    return sum;
  }
}

deleteTreeNodes(7, [-1,0,0,1,2,2,2], [1,-2,4,0,-2,-1,-1]);