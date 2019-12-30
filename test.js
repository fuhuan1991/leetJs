/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  const dp = {};
  let max = 1;
  
  for (let integer of arr) {
    const target = integer - difference;
    let oldValue = 0;
    if (dp[target.toString] !== undefined) oldValue = dp[target.toString];

    dp[integer.toString()] = oldValue + 1;
    max = Math.max(max, oldValue + 1);
  }

  return max;
};