/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    const m = matrix.length;
    if(m === 0) {
      return 0;
    }
    const n = matrix[0].length;
  
    let height = new Array(m);
    for (let i = 0; i <= m-1; i++) {
      height[i] = new Array(n).fill(0);
    }
  
    for (let i = 0; i <= m-1; i++) {
      for (let j = 0; j <= n-1; j++) {
        if (matrix[i][j] === '0') {
          height[i][j] = 0;
        } else {
          if (i === 0) {
            height[i][j] = 1;
          } else {
            height[i][j] = height[i-1][j] + 1;
          }
        }
      }
    }
  
    let max = 0;
    for (let i = 0; i <= m-1; i++) {
      max = Math.max(max, f(height[i]));
    }
    
    // console.log(matrix)
    // console.log(height)
    // console.log(max)
    return max;
  };
  
  
  function f(heights) {
  
    max = 0;
    heights.push(0);
    const stack = [];
    let i = 0;
    // console.log(heights)
    while (i <= heights.length - 1) {
      // console.log(i)
      // console.log(stack)
      if (stack.length === 0 || heights[i] > heights[stack[stack.length - 1]]) {
        stack.push(i);
        i++;
      } else {
        const oldIndex = stack.pop();
        const newArea = stack.length === 0 ? heights[oldIndex] * i : heights[oldIndex] * (i - stack[stack.length - 1] - 1);
        // console.log('newArea',newArea)
        max = Math.max(max, newArea);
      }
    }
    
    return max;
  }
  
  
  // console.log(f([30, 1, 3, 2, 0]))
  maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]);
  