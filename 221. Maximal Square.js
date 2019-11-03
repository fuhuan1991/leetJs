/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const height = matrix.length;
    if (!height) return 0;
    const length = matrix[0].length;
  
    // console.log(height, length)
    const dp = new Array(height).fill(0);
    for (let i in dp) {
      dp[i] = new Array(length).fill(0);
    }
    let max = 0;
    // console.log(dp)
    for (let h = height-1; h >= 0; h--) {
  
      for (let i = length-1; i >= 0; i--) {
        if (h === height-1) {
          dp[h][i] = parseInt(matrix[h][i], 10);
        } else {
          if (matrix[h][i] === '0') continue; 
          if (i === length - 1) {
            dp[h][i] = parseInt(matrix[h][i], 10);
          } else {
            dp[h][i] = Math.min(dp[h+1][i], dp[h][i+1], dp[h+1][i+1]) + 1;
          }
        }
        max = Math.max(max, dp[h][i]);  
      }
      // console.log(dp)
    }
    // console.log(max)
    return max * max;
  };
  
  // maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])