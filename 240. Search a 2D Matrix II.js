/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // console.log()
    const hei = matrix.length;
      if (hei === 0) return false;
    const len = matrix[0].length;
    
    let i = 0;
    let j = len - 1;
    while (i < hei && j >= 0) {
      if (matrix[i][j] < target) {
        i++;
      } else if (matrix[i][j] > target){
        j--;
      } else {
        return true;
      }
    }
  
    return false;
  };