/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    const dp = new Array(3);
    dp[0] = new Array(nums.length).fill(0);
    dp[1] = new Array(nums.length).fill(0);
    dp[2] = new Array(nums.length).fill(0);
  
    for (let pos = 0; pos <= nums.length-1; pos++) {
      const mod = nums[pos]%3;
      if (pos === 0) {
        dp[mod][0] = nums[0];
      } else {
        dp[0][pos] = Math.max(dp[(3-mod)%3][pos-1] + nums[pos], dp[0][pos-1]);
        dp[1][pos] = Math.max(dp[(4-mod)%3][pos-1] + nums[pos], dp[1][pos-1]);
        dp[2][pos] = Math.max(dp[(5-mod)%3][pos-1] + nums[pos], dp[2][pos-1]);
      }
    }
  
    return dp[0][nums.length-1];
  };