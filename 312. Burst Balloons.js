/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const newNums = [1, ...nums, 1];
    const n = nums.length;
    const mm = new Array(n+2).fill(0);
    for (let i in mm) {
      mm[i] = new Array(n+2).fill(0);
    }
    // console.log(mm);
    return dp(mm, newNums, 0, n+1);
  };
  // this function will figure out which element in the range (left, right) should be the 
  // last to brust in order to maximize the coins.
  function dp (mm, nums, left, right) {
    if (left + 1 === right) return 0;
    if (mm[left][right] > 0) return mm[left][right];
    let  max = 0;
    for (let i = left + 1; i <= right-1; i++) {
      // Now, let nums[i] to be the last balloon to brust and calculate the number of coins.
      // When this balloon is brusted, the left and right neighbors are nums[left] and nums[right].
      max = Math.max(max, nums[i] * nums[left] * nums[right] + dp(mm, nums, left, i) + dp(mm, nums, i, right));
    }
    mm[left][right] = max;
    return max;
  }
  
  console.log(maxCoins([3,1,5,8]))