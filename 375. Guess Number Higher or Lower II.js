/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    const dp = new Array(n+2);
    for (let i = 0; i <= n+1; i++) {
      dp[i] = new Array(n+2).fill(0);
    }
    
    // console.log(dp)
    for (len = 2; len <= n; len ++) {
      // console.log(dp)
      for (start = 1; start <= n - len + 1; start ++) {
        // console.log(dp)
        let min = Infinity;
    
        for (pivot = start; pivot <= start + len - 1; pivot ++) {
          const value = pivot + Math.max(dp[start][pivot - 1], dp[pivot + 1][start + len - 1]);
          min = Math.min(min, value);
          // console.log(pivot,value,dp[start][pivot - 1],dp[pivot + 1][pivot + len - 1])
        }
        dp[start][start + len - 1] = min;
      }
    }
    return  dp[1][n];
    
    };
    
    getMoneyAmount(4)