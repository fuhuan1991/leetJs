/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
  const dp = new Array(A.length);
  for (let i = 0; i<= A.length-1; ++i) {
    dp[i] = {};
  }

  let max = 2;

  for (let i = 0; i<= A.length-1; ++i) {
    if (i === 0) {
      dp[i] = {};
    } else {
      dp[i] = {};
      for (let j = 0; j<= i-1; ++j) {
        const diff = A[i] - A[j];
        if (dp[j][diff]) {
          dp[i][diff] = dp[j][diff] + 1;
        } else {
          dp[i][diff] = 2;
        }
        max = Math.max(max, dp[i][diff]);
      }
    }
  }
  return max;
};

console.log(longestArithSeqLength([9,4,7,2,10]));