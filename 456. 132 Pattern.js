/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let min = Infinity;
    const minArr = [];
    for (let i = 0; i <= nums.length-1; i++) {
      if (nums[i] < min) {
        min = nums[i];
      }
      minArr[i] = min;
    }
  
    const stack = [nums[nums.length-1]];
    let i = nums.length-2;
    while (i > 0) {
      console.log(stack, i)
      if (nums[i] === minArr[i]) {
        i--;
        continue;
      }
      if (stack.length === 0) {stack.unshift(nums[i]); continue;}
      if (minArr[i] < stack[0] && stack[0] < nums[i]) {
        return true;
      } else if (stack[0] >= nums[i]) {
        stack.unshift(nums[i]);
        i--;
      } else {
        while (stack[0] <= minArr[i]) {
          stack.shift();
        }
      }
  
    }
    return false;
  };
  
  console.log(find132pattern([1,0,1,-4,-3]));