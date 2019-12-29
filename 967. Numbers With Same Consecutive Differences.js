/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, k) {
    const dp = new Array(10);
    for (let i = 0; i <= 9; i++) {
      dp[i] = new Array(N+1).fill('x');
    }
  
    for (let len = 1; len <= N; len++) {
      // console.log(dp)
      for (let digit = 0; digit <= 9; digit++) {
  
        if (len === 1) {
          const s = new Set();
          s.add(digit);
          dp[digit][len] = s;
        } else {
          let tempArr = [];
          if (digit + k <= 9) {
            const oldSet = dp[digit + k][len - 1];
            const newIntArr = [...oldSet].map(integer => parseInt(integer.toString() + digit.toString(), 10));
            // console.log(tempArr)
            tempArr = [...tempArr, ...newIntArr];
          }
  
          if (digit - k >= 0) {
            const oldSet = dp[digit - k][len - 1];
            const newIntArr = [...oldSet].map(integer => parseInt(integer.toString() + digit.toString(), 10));
            // console.log('a',newIntArr)
            tempArr = [...tempArr, ...newIntArr];
          }
          console.log(tempArr)
          dp[digit][len] = new Set(tempArr);
        }
      }
    }
      
    let r = [];
    for (let digit = 0; digit <= 9; digit++) {
      r = [...r, ...dp[digit][N]];
    }
      console.log(dp)
    return r.filter(int => int.toString().length === N);
  };
  
  numsSameConsecDiff(2,1);