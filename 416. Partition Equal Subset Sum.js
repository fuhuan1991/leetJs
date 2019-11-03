/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {

    let sum = 0;
    for (i in nums) {
      sum = sum + nums[i];
    }
    if (sum%2 === 1) return false;
  
    const half = sum/2;
    nums.sort((a,b) => {return a-b;});
    const r = f(nums, 0, half);
    console.log(r)
    return r;
  };
  
  function f (nums, start, sum) {
    console.log(start, sum);
    let prev = '';
    for (let i = start; i <= nums.length - 1; i++) {
      if (nums[i] !== prev) {
        prev = nums[i];
        if (sum - nums[i] === 0) {
          return true;
        } else if (sum - nums[i] > 0) {
          if (f(nums, i+1, sum-nums[i])) {
            return true;
          }
        }
      }
    }
    return false;
  }
  
  canPartition([1,2,3,4,5,6,7]);