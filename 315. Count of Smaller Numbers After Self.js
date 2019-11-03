/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let sorted = [];
    const r = [];
    for (let i = nums.length - 1; i >= 0; i-- ) {
      const current = nums[i];
      let left = 0;
      let right = sorted.length;
  
      while (left < right) {
        const mid = Math.floor((left + right)/2);
        if (current > sorted[mid]) {
          left = mid+1;
        } else {
          right = mid;
        }
      }
  
      sorted.splice(right, 0, current);
      // console.log(left, right)
      r.unshift(right);
      
    }
    // console.log(sorted,r)
    return r;
  };
  
  
  // countSmaller([5,2,6,1])