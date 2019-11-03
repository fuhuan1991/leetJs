/**
 * @param {number[]} heights
 * @param {number} V
 * @param {number} K
 * @return {number[]}
 */
var pourWater = function(heights, V, K) {

    for (let i = 1; i <= V; i++) {
      let base = heights[K];
      // search left
      let p = K;
      let firstFall = -1;
      while (p >= 0) {
        if (heights[p] < base) {
          // eventually fall
          firstFall = p;
          base = heights[p];
        } else if (heights[p] > base){
          break;
        }
        p--;
      }
      if (firstFall >= 0) {
        heights[firstFall]++;
        continue;
      }
  
      // search right
      base = heights[K];
      p = K;
      firstFall = -1;
      while (p <= heights.length-1) {
        if (heights[p] < base) {
          // eventually fall
          firstFall = p;
          base = heights[p];
        } else if (heights[p] > base){
          break;
        }
        p++;
      }
      if (firstFall >= 0) {
        heights[firstFall]++;
        continue;
      }
  
      heights[K]++;
    }
    // console.log(heights)
    return heights;
  };
  
  // pourWater([2,1,1,2,1,2,2], 10, 3);
  
  