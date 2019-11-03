/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length-1;
    return f(left, right, nums);
  }
  
  function f(left, right, nums) {
    console.log(left, right)
    let mid = Math.floor((left + right)/2);
  
    if (nums[left] < nums[right]) {
      return nums[left];
    }
  
    if (left === mid) {
      return Math.min(nums[left], nums[right]);
    }
    
    if (nums[mid - 1] > nums[mid] && nums[mid] < nums[mid + 1]) {
      return nums[mid];
    } else if (nums[mid] > nums[left]){
      return f(mid + 1, right, nums);
    } else if (nums[mid] < nums[right]) {
      return f(left, mid - 1, nums);
    }
  }
  
  console.log(findMin([5,1,2,3,4]));