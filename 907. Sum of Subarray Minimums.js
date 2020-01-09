/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
    const minStack = [];
    let r = 0;
    let rowSum = 0;
    const MOD = 1_000_000_007;
  
    for (let end = 0; end <= A.length-1; ++end) {
      if (minStack.length === 0) {
        minStack.push([A[end], 1]);
        r += A[end];
        rowSum = r;
      } else {
        const newValue = A[end];
        let newCounter = 1;
        while (minStack.length > 0 && minStack[minStack.length-1][0] >= newValue) {
          const p = minStack.pop();
          newCounter = newCounter + p[1];
          rowSum = rowSum - p[1] * p[0];
        }
        minStack.push([newValue, newCounter])
        rowSum = rowSum + newValue * newCounter;
        r = r + rowSum;
        r = r % MOD;
      }
    }
    return r;
  };