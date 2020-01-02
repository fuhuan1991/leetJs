/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
    if (K === 0) return 1;
    const dp = new Array(N);
    for (let i = 0; i <= N-1; i++) {
      dp[i] = new Array(N);
      for (let j = 0; j <= N-1; j++) {
        dp[i][j] = new Array(K+1).fill(0);
      }
    }
  
    const isInside  = (col, row) => {
      // console.log(col,row)
      if (col < 0 || col > N-1 || row < 0 || row > N-1) {
        // console.log(col,row);
        return false;
      }
      
      return true; 
    }
  
    for (let step = 1; step <= K; step++) {
      for (let rr = 0; rr <= N-1; rr++) {
        for (let cc = 0; cc <= N-1; cc++) {
          if (step === 1) {
            let v = 0;
            if (isInside(cc+2, rr+1)) v++;
            if (isInside(cc+2, rr-1)) v++;
            if (isInside(cc-2, rr+1)) v++;
            if (isInside(cc-2, rr-1)) v++;
            if (isInside(cc+1, rr+2)) v++;
            if (isInside(cc+1, rr-2)) v++;
            if (isInside(cc-1, rr+2)) v++;
            if (isInside(cc-1, rr-2)) v++;
            
            dp[cc][rr][step] = v/8;
          } else {
            let v = 0;
            if (isInside(cc+2, rr+1)) v = v + dp[cc+2][rr+1][step-1];
            if (isInside(cc+2, rr-1)) v = v + dp[cc+2][rr-1][step-1];
            if (isInside(cc-2, rr+1)) v = v + dp[cc-2][rr+1][step-1];
            if (isInside(cc-2, rr-1)) v = v + dp[cc-2][rr-1][step-1];
            if (isInside(cc+1, rr+2)) v = v + dp[cc+1][rr+2][step-1];
            if (isInside(cc+1, rr-2)) v = v + dp[cc+1][rr-2][step-1];
            if (isInside(cc-1, rr+2)) v = v + dp[cc-1][rr+2][step-1];
            if (isInside(cc-1, rr-2)) v = v + dp[cc-1][rr-2][step-1];
            dp[cc][rr][step] = v/8
          }
        } 
      }
    }
    console.log(dp)
    return dp[c][r][K];
  };
  
  
  console.log(knightProbability(3,3,0,0));
  
  