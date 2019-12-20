/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const maxLen = Math.min(matrix.length, matrix[0].length);
    // let len = 2;
    let result = 0;
  
    for (let i = 0; i <= matrix.length-1; i++) {
      for(let j = 0; j <= matrix[0].length-1; j++) {
        if (matrix[i][j] === 1) result ++;
      }
    } 
  
    for (let len = 2; len <= maxLen; len++) {
  // console.log(len, result)
      for (let i = 0; i <= matrix.length-len; i++) {
        for(let j = 0; j <= matrix[0].length-len; j++) {
          if (matrix[i][j] === 1 && matrix[i+1][j] === 1 && matrix[i][j+1] === 1 && matrix[i+1][j+1] === 1) {
            matrix[i][j] = 1;
            result ++;
          } else {
              matrix[i][j] = 0;
          }
        }
      }
        // console.log(matrix)
    }
    
    return result;
  };