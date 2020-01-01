/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  const dp = [];

  for (let i = nums.length-1; i >= 0; i--) {
    const currentValue = nums[i];
    const o = {};

    if (i === nums.length-1) {
      if (currentValue === 0) {
        o[0] = 2;
      } else {
        o[currentValue] = 1;
        o[-currentValue] = 1;
      }
    } else {
      const lastHash = dp[i+1];
      for (let v in lastHash) {
        const value = parseInt(v, 10);
        const newValue1 = value + currentValue;
        const newValue2 = value - currentValue;
        if (o[newValue1]) {
          o[newValue1] = o[newValue1] + lastHash[v];
        } else {
          o[newValue1] = lastHash[v];
        }
        if (o[newValue2]) {
          o[newValue2] = o[newValue2] + lastHash[v];
        } else {
          o[newValue2] = lastHash[v];
        }
      }
    }
    dp[i] = o;
  }
  console.log(dp);
  return dp[0][S]? dp[0][S] : 0;
};

findTargetSumWays([1,0], 1)