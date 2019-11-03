/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    if (nums.length === 0) return 0;
    const dp = new Array(target+1).fill(0);
    
    //dp[i] represents the number of combinations to divide the number i.
    //because the numbers in nums are all positive, there is no way to add up to 0, so, dp[0] = 0;
    for (let i = 1; i <= target; i++) {
      for (let index in nums) {
        const num = nums[index];
        // num === i means that we found a number in nums equals to i. 
        // This single number can be count as a combination, so dp[i]++
        if (num === i) {
          dp[i]++;
        } else if (num < i){
          // num < i meas that we found that a number in nums smaller than i.
          // num can be part of the combination. In this case, the total number of combinations depends on d[i-num]
          // if dp[i-num] === 0, there is no way to make a (i-num) which means there is no way to make a (i) with this num.
          // if dp[i-num] !== 0, let's make it equals to k. There is k ways to make a (i-num)
          // Then with num involved, how many ways are there to make a i? i = (i-num) + num
          // the answer is k, not k*(something) or k+(something)
          dp[i] = dp[i] + dp[i-num];
        }
      }
    }
  
    console.log(dp)
    return dp[target];
  };
  
  combinationSum4([1,2,3],4);