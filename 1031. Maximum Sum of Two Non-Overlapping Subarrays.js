/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {

    const preSum = [];
    let sum = 0;
  
    for (let i = 0; i <= A.length-1; i++) {
      sum += A[i];
      preSum[i] = sum;
    }
  
    console.log(preSum)
    let max = -1;
    for (let i = 0; i <= A.length-L; i++) {
      let sumL;
      if (i === 0) {
        sumL = preSum[i + L - 1];
      } else {
        sumL = preSum[i + L - 1] - preSum[i-1];
      }
  // console.log(i, sumL)
      sumMLeft = findSum(A, 0, i-1, M);
      sumMRight = findSum(A, i+L, A.length-1, M);
      
      sumM = Math.max(sumMLeft, sumMRight);
      console.log(i, sumL, sumM)
      max = Math.max(max, sumL + sumM);
    }
    console.log(max)
    return max
  };
  
  const findSum = (A, left, right, M) => {
    if (right - left + 1 < M) return -1;
    let max = 0;
    let sum = 0
    for (i = left; i <= left + M - 1; i++) {
      sum += A[i];
    }
    max = sum;
    for (i = left + 1; i <= right - M + 1; i++) {
      sum = sum - A[i - 1] + A[i + M - 1];
      max = Math.max(max, sum);
    }
    return max;
  }
  
  maxSumTwoNoOverlap([2,1,5,6,0,9,5,0,3,8], 4,3)