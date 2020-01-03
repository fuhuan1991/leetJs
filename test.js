/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
  const N = A.length;
  const dp = new Array(N);
  const index = {};
  let max = 0;

  for (let i = 0; i <= N-1; ++i) {
    dp[i] = new Array(N).fill(2);
  }
  for (let i = 0; i <= N-1; ++i) {
    index[A[i]] = i;
  }

  for (let i = 0; i <= N-1; ++i) {
    for (let j = i+1; j<= N-1; ++j) {
      const diff = A[j] - A[i];
      const x = index[diff];
      if (x !== undefined && x >= 0 && x <= N-1 && x < i) {
        dp[i][j] = dp[x][i] + 1;
        max = Math.max(max, dp[i][j]);
      }

    }
  }
  console.log(dp)
  return max;
};

lenLongestFibSubseq([1,2,3,4,5,6,7,8])