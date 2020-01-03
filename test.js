/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function(A, K) {
  const N = A.length;
  const p = new Array(N).fill(0);
  const dp = new Array(N).fill(0);
  p[0] = A[0];
  for (let i = 1; i <= N-1; ++i) {
    p[i] = A[i] + p[i-1]; 
  }

  for (let i = 0; i <= N-1; ++i) {
    dp[i] = new Array(K).fill(0);
    dp[i][0] = p[i]/(i+1);
  }
  console.log(dp)
  for (let end = 0; end <= N-1; ++end) {
    for (let j = 1; j <= end; ++j) {
      for (n = 1; n <= K-1; ++n) {
        const v = dp[j-1][n-1] + (p[end] - p[j-1])/(end - j + 1);
        dp[end][n] = Math.max(dp[end][n], v);
      }
    }
  }
  // console.log(dp)
  return dp[N-1][K-1];
};

console.log(largestSumOfAverages([9,1,2,3,9], 3));