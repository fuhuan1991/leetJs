/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  if (nums.length === 0) { return false; }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    console.log(left, right)

    if (left + 1 === right) {
      return (target === nums[left] || target === nums[right]);
    }

    if (left === right) {
      return target === nums[left];
    }

    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return true;

    if (nums[mid] > nums[left]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < nums[left]) {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target === nums[mid]) {
        return true;
      } else {
        left = left + 1;
      }
    }
  }
};

console.log(search([1, 1, 3], 3))