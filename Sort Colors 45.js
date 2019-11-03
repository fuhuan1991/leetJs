/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let current = 0;
    let right = nums.length - 1;
  
    while (current <= right) {
      // console.log('-',left,current,right)
      // console.log(nums)
      if (nums[current] === 0) {
        swap(left, current, nums);
        left++;
        if (current < left) {
          current = left;
        }
      } else if (nums[current] === 2) {
        swap(current, right, nums);
        right--;
      } else if (nums[current] === 1) {
        current++;
      }
    }
    // console.log(nums)
    return nums;
  };
  
  function swap (i,j,A){
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
  }
  
  sortColors([2,0])