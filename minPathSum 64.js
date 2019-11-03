/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

    // if (!Array.isArray(grid[0])) {
  
    // }
  
    const height = grid.length;
    const length = grid[0].length;
  
    const dp = new Array(height);
    for (let i = 0; i <= height - 1; i++) {
      dp[i] = new Array(length).fill(Infinity);
    }
    // console.log(dp)
  
    for (let i = height - 1; i >= 0; i--) {
      for (let j = length - 1; j >= 0; j--) {
        // console.log(grid[i][j]);
        if (i === height - 1 && j === length - 1) {
          dp[i][j] = 0;
        } else if (i === height - 1){
          dp[i][j] = grid[i][j + 1] + dp[i][j + 1];
        } else if (j === length - 1) {
          dp[i][j] = grid[i + 1][j] + dp[i + 1][j];
        } else {
          dp[i][j] = Math.min(grid[i][j + 1] + dp[i][j + 1], grid[i + 1][j] + dp[i + 1][j]);
        }
      }
    }
    console.log(grid[0][0] + dp[0][0])
    return grid[0][0] + dp[0][0];
  
  };
  minPathSum([1]);