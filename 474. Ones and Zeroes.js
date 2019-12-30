/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const dp = new Array(m+1);
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n+1).fill(0);
    }
    // console.log(dp);
  
    for (let str of strs) {
      const ones = counter(str)[1];
      const zeros = counter(str)[0];
  
      for (let i = m; i >= zeros; i--) {
        for (let j = n; j>= ones; j--) {
          dp[i][j] = Math.max(dp[i][j], dp[i-zeros][j-ones] + 1);
        }
      }
    }
    console.log(dp)
    return dp[m][n];
  
  };
  
  const counter = (str) => {
    const r = [0, 0];
    for (let i = 0; i <= str.length-1; i++) {
      if (str[i] === '0') {
        r[0]++;
      } else {
        r[1]++;
      }
    }
    return r;
  }
  
  findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3);