/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const hei = matrix.length;
      if (hei === 0) return false;
    const len = matrix[0].length;
      if (len === 0) return false;
  
    left = 0;
    right = hei * len - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right)/2);
        // console.log(left, mid,right)
      const midValue = matrix[Math.floor(mid/len)][mid%len];
      if (midValue === target) return true;
      if (midValue < target) {
        left = mid+1;
      } else {
        right = mid -1;
      }
    }
  
    return false;
  };