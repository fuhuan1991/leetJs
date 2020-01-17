/**
 * @param {number[]} stones
 * @param {number} K
 * @return {number}
 */

var mergeStones = function(stones, K) {
    const prefixSum = [];
    const N = stones.length;
    let s = 0;
    for (let i = 0; i <= stones.length-1; ++i) {
      s = s + stones[i];
      prefixSum[i] = s;
    }
  // console.log(prefixSum)
    const dp = new Array(N);
    for (let i = 0; i <= N-1; ++i) {
      dp[i] = new Array(N);
      for (let j = 0; j <= N-1; ++j) {
        dp[i][j] = new Array(K+1).fill(Infinity); 
      }
    }
  // console.log(dp)
    for (let i = 0; i <= N-1; ++i) {
      dp[i][i][1] = 0;
    }
  
    const r = rec(0, stones.length-1, 1, dp, K, prefixSum);
    // console.log(dp)
    return (r < Infinity) ? r : -1; 
  };
  
  const rec = (start, end, target, dp, K, prefixSum) => {
  // console.log('rec', start, end, target)
  // console.log(dp)
    if (dp[start][end][target] < Infinity) {
      return dp[start][end][target];
    }
  // console.log(1)
    if ((end - start + 1 - target)%(K-1) !== 0) return Infinity;
    // console.log(2)
    if (start === end) {
      if (target === 1) {
        dp[start][end][target] = 0;
        return 0;
      }
      if (target !== 1) return Infinity; 
    }
    // console.log(3)
    if (target === 1) {
      const mk = (dp[start][end][K] < Infinity) ? dp[start][end][K] : rec(start, end, K, dp, K, prefixSum);
      const r = mk + prefixSum[end] - ((start === 0) ? 0 : prefixSum[start-1]);
      // console.log('r',r)
      dp[start][end][target] = r;
      return r;
    }
    // console.log(4)
    let v = Infinity;
    for (let mid = start; mid < end; mid = mid+K-1) {
      const s1 = rec(start, mid, 1, dp, K, prefixSum);
      const s2 = rec(mid+1, end, target-1, dp, K, prefixSum);
      v = Math.min(v, s1 + s2);
      // console.log(start, mid, end, s1, s2, target);
    }
    dp[start][end][target] = v;
    return v;
  }
  
  console.log(mergeStones([3,2,4,1],2))