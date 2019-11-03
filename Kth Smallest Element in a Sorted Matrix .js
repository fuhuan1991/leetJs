/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length;
    let lo = matrix[0][0];
    let hi = matrix[n-1][n-1] + 1;
    while (lo < hi) {
      
      let mid = Math.floor(lo + (hi - lo) / 2);
      // console.log(lo,mid, hi)
      let j = n - 1;
      let counter = 0;
      for (let i = 0; i <= n-1; i++) {
        while (j >= 0 && matrix[i][j] > mid) {
          j--;
        }
        counter = counter + j + 1;
      }
      // console.log(counter)
      if (counter < k) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    // console.log(lo)
    return lo;
  };
  
  kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8);