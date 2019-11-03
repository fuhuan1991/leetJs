/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i = matrix.length - 1;
    let j = 0;
    while (i >= 0 && j <= matrix[0].length - 1) {
      if (matrix[i][j] === target) {
        return true;
      } else if (matrix[i][j] > target) {
        i--;
      } else if (matrix[i][j] < target) {
        j++;
      }
    }
  
    return false;
  };