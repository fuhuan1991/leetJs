/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (i = 1; i <= dp.length - 1; i++) {
    let min = Infinity;
    for (j = 1; j * j <= i; j++) {
      const val = 1 + dp[i - j * j];
      if (val < min) {
        dp[i] = val;
        min = val;
      }
    }
  }
  return dp[n];
};

/**
* @param {number} n
* @return {number}
*/
var numSquares = function (n) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 1; i + j * j <= n; j++) {
      dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1);
    }
  }

  return dp[n]
};

// console.log(numSquares(13))

console.log(numSquares(14))