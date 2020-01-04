/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const N = s.length;
  const dp = new Array(N);
  for (let i = 0; i <= N-1; ++i) {
    dp[i] = new Array(N).fill(0);
    dp[i][i] = 1;
    if (i+1 <= N-1) {
      if (s[i] === s[i+1]) {
        dp[i][i+1] = 2;
      } else {
        dp[i][i+1] = 1
      }
    }
  }
  
  for (let k = 2; k <= N-1; ++k) {
    let end = k;
    let start = 0;
    while (start <= N-1 && end <= N-1) {
      if (s[start] === s[end]) {
        dp[start][end] = dp[start+1][end-1] + 2;
      } else {
        dp[start][end] = Math.max(dp[start+1][end], dp[start][end-1]);
      }
      end++;
      start++;
    }
  }
  console.log(dp)
  return dp[0][N-1];
};


console.log(longestPalindromeSubseq('bbbab'))