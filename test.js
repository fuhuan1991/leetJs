/**
 * @param {number[]} prob
 * @param {number} target
 * @return {number}
 */
var probabilityOfHeads = function(prob, target) {
  const N = prob.length;
  const dp = new Array(N+1);
  prob.unshift(0);

  for (let i = 0; i <= N; i++) {
    dp[i] = new Array(N+1).fill(0);
  }

  // console.log(dp)
  let allTail = 1;
  let allHead = 1;
  for (let coins = 1; coins <= N; coins++) {
    allHead = allHead * prob[coins];
    allTail = allTail * (1 - prob[coins]);
    for (let t = 0; t <= Math.min(target, coins); t++) {
      if (t === 0) {
        dp[coins][t] = allTail;
      } else if (coins === t) {
        dp[coins][t] = allHead;
      } else {
        dp[coins][t] = dp[coins-1][t] * (1-prob[coins]) + dp[coins-1][t-1] * prob[coins];
      }
    } 
  }
  // console.log(dp);
  return dp[N][target];
};

// probabilityOfHeads([0.1,0.2,0.3,0.4,0.5],2)