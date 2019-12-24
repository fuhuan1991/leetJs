/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function(m, n, N, i, j) {
  if (N === 0) return 0;
  const dp = new Array(m);

  for (let i = 0; i <= m-1; i++) {
    dp[i] = new Array(n);
    for (let j = 0; j <= n-1; j++) {
      dp[i][j] = new Array(N).fill(-1);
    }
  }

  return helper(i, j, m, n, N, dp);
  
};

const helper = (i, j, m, n, moves, dp) => {
  const M = 1000000007;
  let r = 0;
  if (moves === 1) {
    if (i === 0) r++;
    if (i === m - 1) r++;
    if (j === 0) r++;
    if (j === n-1) r++;
    return r;
  } else {
    if (i === 0) r++;
    if (i === m - 1) r++;
    if (j === 0) r++;
    if (j === n-1) r++;

    if (i > 0) {
      if (dp[i - 1][j][moves - 1]  > -1) {
        r += dp[i - 1][j][moves - 1];
      } else {
        const temp = helper(i - 1, j, m, n, moves - 1, dp) % M;
        r = r + temp;
        dp[i - 1][j][moves - 1] = temp;
      }
    }
    
    if (i < m-1) {
      if (dp[i + 1][j][moves - 1]  > -1) {
        r += dp[i + 1][j][moves - 1];
      } else {
        const temp = helper(i + 1, j, m, n, moves - 1, dp) % M;
        r = r + temp;
        dp[i + 1][j][moves - 1] = temp;
      }
    }

    if (j > 0) {
      if (dp[i][j - 1][moves - 1]  > -1) {
        r += dp[i][j - 1][moves - 1];
      } else {
        const temp = helper(i, j - 1, m, n, moves - 1,dp) % M;
        r = r + temp;
        dp[i][j - 1][moves - 1] = temp;
      }
    }

    if (j < n - 1) {
      if (dp[i][j + 1][moves - 1]  > -1) {
        r += dp[i][j + 1][moves - 1];
      } else {
        const temp = helper(i, j + 1, m, n, moves - 1,dp) % M;
        r = r + temp;
        dp[i][j + 1][moves - 1] = temp;
      }
    }

    return r;
  }
}