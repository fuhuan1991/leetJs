/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    const l1 = str1.length;
    const l2 = str2.length;
  
    const dp = new Array(l1+1);
    for (let i = 0; i <= l1; ++i) {
      dp[i] = new Array(l2+1).fill('');
    }
  
    for (let i = 1; i <= l1; ++i) {
      for (let j = 1; j <= l2; ++j) {
        if (str1[i-1] === str2[j-1]) {
          dp[i][j] = dp[i-1][j-1] + str1[i-1];
        } else {
          if (dp[i-1][j].length > dp[i][j-1].length) {
            dp[i][j] = dp[i-1][j];
          } else {
            dp[i][j] = dp[i][j-1];
          } 
        }
      }
    }
  
    // console.log(dp)
    const LCS = dp[l1][l2];
    // console.log(LCS)
    if (LCS.length == l1) return str2;
    if (LCS.length == l2) return str1;
  
    let p1 = 0, p2 = 0;
    let r = '';
    for (let i = 0; i <= LCS.length-1; ++i) {
      while (str1[p1] !== LCS[i]) {
        r = r + str1[p1];
        p1++;
      }
      while (str2[p2] !== LCS[i]) {
        r = r + str2[p2];
        p2++;
      }
      r = r + LCS[i];
      p1++;
      p2++;
    } 
    while (p1 <= l1-1) {
      r = r + str1[p1];
      p1++;
    }
    while (p2 <= l2-1) {
      r = r + str2[p2];
      p2++;
    }
    // console.log(r)
    return r;
  };
  
  shortestCommonSupersequence('abac','cab')