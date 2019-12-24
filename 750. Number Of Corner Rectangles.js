/**
 * @param {number[][]} grid
 * @return {number}
 */
var countCornerRectangles = function(grid) {
    const height = grid.length;
    const length = grid[0].length;
    let result = 0;
  
    const count = new Array(height).fill(0);
    for (let i = 0; i <= height-1; i++) {
      count[i] = new Array(length).fill(0);
    }
  
    for (let i = 0; i <= height - 1; i++) {
      const currentRow = grid[i];
  
      for (let col1 = 0; col1 <= length-2; col1++) {
        if (currentRow[col1] === 1) {
          for (let col2 = col1 + 1; col2 <= length-1; col2++) {
            if (currentRow[col1] === 1 && currentRow[col2] === 1) {
              result += count[col1][col2];
              count[col1][col2]++;
            }
          }
        } 
      }
    }
  
    return result;
  };
  
  
  
  