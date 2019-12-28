/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
  const N = A.length;
  const dp_s = [1];
  const dp_n = [0];

  for (let i = 1; i <= N-1; ++i) {
    if (A[i] > A[i-1] && A[i] > B[i-1] && B[i] > A[i-1] && B[i] > B[i-1]) {
      dp_s[i] = Math.min(dp_s[i-1], dp_n[i-1]) + 1;
      dp_n[i] = Math.min(dp_s[i-1], dp_n[i-1]);
    } else if (A[i] > A[i-1] && B[i] > B[i-1]) {
      dp_s[i] = dp_s[i-1] + 1;
      dp_n[i] = dp_n[i-1]; 
    } else {
      dp_s[i] = dp_n[i-1] + 1;
      dp_n[i] = dp_s[i-1]; 
    }
  }
  return Math.min(dp_n[N-1], dp_s[N-1]);
};