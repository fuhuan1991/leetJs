/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    while (i <= nums.length - 1) {
      if (nums[i] !== i + 1 && nums[i] > 0 && nums[i] < nums.length && nums[nums[i] - 1] !== nums[i]) {
        swap(i, nums[i] - 1, nums);
      } else {
        i++;
      }
    }
    // console.log(nums)
    for (let i = 0; i <= nums.length - 1; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
    return nums.length + 1;
  };
  
  function swap (i, j, A) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
  }
  firstMissingPositive([3,4,-1,1])
  