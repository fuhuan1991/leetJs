/**
 * @param {number} n
 * @return {number}
 */
var findDerangement = function(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
  
    const dp = [];
    dp[0] = 0;
    dp[1] = 0;
    dp[2] = 1;
    let i = 3;
    while (i <= n) {
      dp[i] = (i-1) * (dp[i-1] + dp[i-2]);
      i++;
    }
    return dp[n]%(10^9+7)
  
  };