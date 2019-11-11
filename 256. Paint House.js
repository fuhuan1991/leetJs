/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    if (costs.length === 0) return 0;
    const R = [];
    const B = [];
    const G = [];
  
    for (let i = 0; i <= costs.length-1; i++) {
      if (i === 0) {
        R.push(costs[0][0]);
        B.push(costs[0][1]);
        G.push(costs[0][2]);
      } else {
        R.push(costs[i][0] + Math.min(B[i-1], G[i-1]));
        B.push(costs[i][1] + Math.min(R[i-1], G[i-1]));
        G.push(costs[i][2] + Math.min(R[i-1], B[i-1]));
      }
    }
    return Math.min(R[costs.length-1], B[costs.length-1], G[costs.length-1]);
  };