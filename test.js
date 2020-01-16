/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  const dp = new Array(steps+1);
  for (let i = 0; i <= steps; ++i) {
    dp[i] = [];
  }
  dp[0][0] = 1;
  // dp[0][1] = 0;
  const M = 1000000007;
// console.log(dp)
  for (let i = 1; i <= steps; ++i) {
    for (let pos = 0; pos <= i; ++pos) {
      const v1 = pos === 0 ? 0 : dp[i-1][pos-1];
      const v2 = (dp[i-1][pos] === undefined)? 0 : dp[i-1][pos];
      const v3 = (pos === arrLen-1 || dp[i-1][pos+1] === undefined) ? 0 : dp[i-1][pos+1];
      console.log(v1,v2,v3)

      dp[i][pos] = (v1 + v2 + v3)%M; 
    }
  }

  return dp[steps][0];

};