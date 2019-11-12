/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let sum = 0;
    for (let w of stones) {
      sum += w;
    }
    const dp = new Array(Math.floor(sum/2) + 1).fill(false)
    dp[0] = true;
  
    for (let w of stones) {
      for (let s = dp.length-1; s >= w; s--) {
        dp[s] = dp[s] || dp[s-w];
      }
    }
    let p = dp.length-1;
    while (!dp[p]) {
      p--;
    }
    console.log(sum,dp)
    return sum - p - p;
  
  };
  
  lastStoneWeightII([2,7,4,1,8,1])