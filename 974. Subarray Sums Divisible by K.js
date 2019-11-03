/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    const p = new Array(A.length);
    let sum = 0;
    for (let i in A) {
      sum = sum + A[i];
      p[i] = sum;
    }
  
    const count = new Array(K).fill(0);
    for (let pp of p) {
      count[(pp % K + K) % K]++;
    }
    console.log(count)
    let r = 0;
    for (let c of count) {
      r = r + (c * (c - 1))/2;
    }
    return r;
  };