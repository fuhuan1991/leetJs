/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0],nums[1]);
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(dp[0], nums[1]);
    // let max = Math.max(dp[0], dp[1]);
  
    for (let i = 2; i <= nums.length - 1; i++) {
      dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
      // max = Math.max(max, dp[i]);
    }
  
    return dp[nums.length - 1];
  };