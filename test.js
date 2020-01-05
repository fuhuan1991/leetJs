/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const N = s.length;
  const M = t.length;

  if (N === 0 && M > 0) return 0;
  if (N === 0 && M === 0) return 1;

  const dp = new Array(N);
  for (let i = 0; i <= N-1; i++) {
    dp[i] = new Array(M).fill(0);
  }

  for (let i = 0; i <= N-1; ++i) {
    for (let j = 0; j <= M-1; ++j) {
      if (i < j) {
        dp[i][j] = 0;
      } else if (i === j) {
        if (s.slice(0, i+1) === t.slice(0, j+1)) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = 0;
        }
      } else if (j === 0) {
        if (s.charAt(i) === t.charAt(j)) {
          dp[i][j] = 1 + dp[i-1][j];
        } else {
          dp[i][j] = dp[i-1][j];
        }
      } else {
        if (s.charAt(i) === t.charAt(j)) {
          dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
        } else {
          dp[i][j] = dp[i-1][j];
        }
      }
    }
  }
console.log(dp)
  return dp[N-1][M-1];
};

numDistinct("babgbag","bag");