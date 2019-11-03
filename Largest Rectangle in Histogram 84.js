/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [];
    let max = 0;
  
    for (let i = 0; i <= heights.length - 1; i++) {
      
      const currentHeight = heights[i];
      // console.log('----', i, currentHeight)
  
      max = Math.max(max, heights[i]);
  
      while (stack.length > 0 && stack[stack.length - 1].height > currentHeight) {
  
        const target = stack.pop();
        // console.log('target', target)
        const right = (i - target.index - 1) * target.height;
        // console.log('right dis', i - target.index - 1)
        const center = target.height;
        let left = 0;
      
        if (stack.length === 0) {
          left = (target.index) * target.height;
          // console.log('left dis', target.index)
        } else if (stack.length > 0) {
          const leftTarget = stack[stack.length - 1];
          left = (target.index - leftTarget.index - 1) * target.height;
          // console.log('left dis', target.index - leftTarget.index - 1)
        }
        // console.log(left,center,right)
  
        const r = left + center + right;
        max = Math.max(max, r);
        // console.log('r', r)
        
      }
      
      stack.push({
        height: heights[i],
        index: i,
      });
    }
    // console.log('stack', stack)
    
    const visited = {};
    for (let j = 0; j <= stack.length - 1; j++ ){
      
      const target = stack[j];
      
      if (!visited[target.height]) {
        // console.log('target', target)
        let left = 0;
        let right = 0;
  
        if (j === 0) {
          left = target.index * target.height;
        } else if (j > 0) {
          const leftTarget = stack[j-1];
          left = (target.index - leftTarget.index - 1) * target.height;
        }
  
        const center = target.height;
  
  
        const rightTarget = stack[stack.length - 1];
        // console.log('rightTarget',rightTarget)
        right = target.height * (rightTarget.index - target.index);
  
        const r = left + center + right;
        // console.log(left,center,right)
        max = Math.max(max, r);
        visited[target.height] = true;
      }
    }
    // console.log('max', max)
  
    return max;
  };
  
  // largestRectangleArea([2,1,5,6,2,3]);
  largestRectangleArea([5,4,1,2]);
  