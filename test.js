/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const dp_len = new Array(nums.length).fill(0);
  const dp_num = new Array(nums.length).fill(0);
  dp_len[nums.length-1] = 1;
  dp_num[nums.length-1] = 1;
  let globalMaxLen = 1;
  let globalMaxNum = 0;

  for (let i = nums.length - 2; i >= 0; --i) {
    const current = nums[i];
    let maxLen = 0;
    let counter = 0;

    for (j = i; j <= nums.length-1; ++j) {
      if (nums[j] > current) {
        maxLen = Math.max(maxLen, dp_len[j]);
      }
    }

    dp_len[i] = maxLen + 1;
    
    for (j = i; j <= nums.length-1; ++j) {
      if (dp_len[j] === maxLen && nums[j] > current) {
        counter += dp_num[j];
      }
    }

    dp_num[i] = counter === 0? 1 : counter;

    globalMaxLen = Math.max(globalMaxLen, dp_len[i]);
    console.log(dp_len.toString(), dp_num.toString())
  }

  for (let i = 0; i <= nums.length-1; ++i) {
    if (dp_len[i] === globalMaxLen) {
      globalMaxNum += dp_num[i];
    }
  }
  return globalMaxNum;
};

findNumberOfLIS([1,2,4,3,5,4,7,2]);