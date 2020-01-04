/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
    const dp = new Array(d + 1);
    const M = 1000000000+7;
    for (let i = 0; i <= d; ++i) {
      dp[i] = new Array(target + 1).fill(0);
    }
  
    for (let dices = 1; dices <= d; ++dices) {
      for (let t = 0; t <= target; t++) {
        if (dices === 1) {
          if (t === 0) {
            dp[dices][t] = 0;
          } else if (1 <= t && t <= f) {
            dp[dices][t] = 1;
          } else {
            dp[dices][t] = 0;
          }
        } else {
          let sum = 0;
          for (let k = t-1; k >= t-f && k >= 0; --k) {
            sum += dp[dices-1][k];
          }
          dp[dices][t] = sum%M;
        }
      }
    }
    console.log(dp)
    return dp[d][target];
  };
  
  console.log(numRollsToTarget(2,6,7));