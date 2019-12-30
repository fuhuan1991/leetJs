/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    if (A.length < 3) return 0;
    const dp = [0, 0];
  
    for (let i = 2; i <= A.length-1; i++) {
      let v = 0;
  
      if (A[i] - A[i-1] === A[i-1] - A[i-2]) {
        v += dp[i-1];
        v++;
      }
      dp[i] = v;
    }
  console.log(dp)
    return dp.reduce((a, b) => a + b, 0);
  };
  console.log(numberOfArithmeticSlices([1,2,3,4]))