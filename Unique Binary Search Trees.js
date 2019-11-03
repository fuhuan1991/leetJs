/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n == 0) {return 1;}
    if (n == 1) {return 1;}
    if (n == 2) {return 2;}
  
    const dp = [1,1,2];
    
    
  
    for (let i = 3; i <= n; i++) {
      // console.log(i)
      let r = 0;
      const rest = i - 1;
      for (let j = 0; j <= rest; j++) {
        r = r + dp[j] * dp[rest - j];
      }
      dp[i] = r;
    }
  
    return dp[n];
  
  };
  
  console.log(numTrees(4))