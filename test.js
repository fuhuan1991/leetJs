/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
  if (A.length === 0) return 0;
  const dp_low = [];
  const dp_high = [];
  let max = 1;

  for (let i = 0; i <= A.length-1; i++) {
    if (i === 0) {
      dp_high[i] = 1;
      dp_low[i] = 1;
    } else if (A[i] > A[i-1]) {
      dp_high[i] = dp_low[i-1] + 1;
      dp_low[i] = 1;
    } else if (A[i] < A[i-1]) {
      dp_high[i] = 1;
      dp_low[i] = dp_high[i-1] + 1;
    } else {
      dp_high[i] = 1;
      dp_low[i] = 1;
    }
      // console.log(dp_high,dp_low)
    max = Math.max(max, dp_high[i], dp_low[i]);
  }
  return max;

};