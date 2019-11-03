/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
  
    while (left < right) {
      let mid = Math.floor((left + right)/2);
  
      if (nums[right] < nums[mid]) {
        left = mid + 1;
      } else if (nums[right] > nums[mid]) {
        right = mid;
      } else {
        right --;
      }
    }
  
    return nums[left];
  };
  
  console.log(findMin([1,2,3,4,5]));