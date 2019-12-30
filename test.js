/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  const N = s1.length;
  const M = s2.length;
  const dp = new Array(N+1);
  for (let i = 0; i <= N; i++) {
    dp[i] = new Array(M+1).fill(0);
  }
// console.log(dp);
  let sum = 0;
  for (let start = M-1; start >= 0; start --) {
    dp[N][start] = s2.charCodeAt(start) + sum;
    sum += s2.charCodeAt(start);
  }
  sum = 0;
  for (let start = N-1; start >= 0; start --) {
    dp[start][M] = s1.charCodeAt(start) + sum;
    sum += s1.charCodeAt(start);
  }

  // console.log(dp);
  for (let start1 = N-1; start1 >= 0; start1--) {
    for (let start2 = M-1; start2 >= 0; start2--) {
      // console.log(start1,start2)
      if (s1.charCodeAt(start1) === s2.charCodeAt(start2)) {
        dp[start1][start2] = dp[start1 + 1][start2 + 1];
      } else {
        dp[start1][start2] = Math.min(
          dp[start1][start2+1] + s2.charCodeAt(start2),
          dp[start1+1][start2] + s1.charCodeAt(start1)
        );
        // console.log(dp[start1][start2+1] + s2.charCodeAt(start2), dp[start1+1][start2] + s1.charCodeAt(start1))
      }
    }
  } 
  console.log(dp);
  return dp[0][0];
};

minimumDeleteSum('delete','leet')