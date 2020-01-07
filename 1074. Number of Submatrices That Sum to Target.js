/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    const N = matrix.length;
    const M = matrix[0].length;
    const prefixSum = new Array(N);
    for (let i = 0; i<= N-1; ++i) {
      prefixSum[i] = new Array(M).fill(0);
    }
  
    for (let i = 0; i<= N-1; ++i) {
      for (let j = 0; j <= M-1; ++j) {
        if (i === 0 && j === 0) {
          prefixSum[i][j] = matrix[i][j];
        } else if (i === 0) {
          prefixSum[i][j] = prefixSum[i][j-1] + matrix[i][j];
        } else if (j === 0) {
          prefixSum[i][j] = prefixSum[i-1][j] + matrix[i][j];
        } else {
          prefixSum[i][j] = prefixSum[i-1][j] + prefixSum[i][j-1] - prefixSum[i-1][j-1] + matrix[i][j];
        }
      }
    }
    // console.log(prefixSum);
    let result = 0;
    for (let i1 = 0; i1<= N-1; ++i1) {
      for (let i2 = i1; i2<= N-1; ++i2) {
        // counter[i] records how many submatrices with sum i has been discovered so far
        // thoes submatrices has the same height: from i1 to i2
        const counter = [1];
        for (let j = 0; j <= M-1; ++j) {
          const sum = prefixSum[i2][j] - (i1 === 0 ? 0 : prefixSum[i1-1][j]);
          // console.log('sum ',sum)
          const diff = sum - target;
          if (counter[diff] !== undefined) result += counter[diff];
          if (counter[sum] === undefined) {
            counter[sum] = 1;
          } else {
            counter[sum]++;
          }
        }
        // console.log(i1, i2, result)
      }
    }
    // console.log(result)
    return result;
  };
  
  // numSubmatrixSumTarget([[0,1,0],[1,1,1],[0,1,0]], 0)