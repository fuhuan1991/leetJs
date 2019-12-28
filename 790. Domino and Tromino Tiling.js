/**
 * @param {number} N
 * @return {number}
 */
var numTilings = function(N) {
    if (N === 1) return 1;
    if (N === 2) return 2;
  
    const M = 1000000007;
    const dp = [1, 1, 2];
    let sum = 4;
  
    for (let i = 3; i <= N; i++) {
      // sum supposed to be the sum from index 0 to index i-1
      dp[i] = (sum * 2 - dp[i-1] - dp[i-2])%M;
      sum += dp[i];
      // sum = sum;
      console.log(sum)
    }
    console.log(dp)
    return dp[N];
  };
  
  numTilings(105)