/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    const N = A.length;
    const dp = new Array(N).fill(0);
    for (let i = 0; i <= N-1; i++) {
      dp[i] = new Array(N).fill(0);
      if (i === N-1) {
        dp[i] = A[N-1].slice();
      }
    }
    console.log(dp);
  
    for (let row = N-2; row >=0; row--) {
      for (let col = 0; col <= N-1; col++) {
        if (col === 0) {
          dp[row][col] = A[row][col] + Math.min(dp[row+1][col], dp[row+1][col+1]);
        } else if (col === N-1) {
          dp[row][col] = A[row][col] + Math.min(dp[row+1][col], dp[row+1][col-1]);
        } else {
          dp[row][col] = A[row][col] + Math.min(dp[row+1][col], dp[row+1][col+1], dp[row+1][col-1]);
        }
      }
    }
    console.log(dp);
    let r = dp[0][0];
    for (let i = 0; i <= N-1; i++) {
      r = Math.min(r, dp[0][i]);
    }
    return r;
  };