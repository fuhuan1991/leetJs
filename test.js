/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const deque = [];
  if (nums.length === 0 || k ===0) return [];
  if (nums.length === 1) return nums;

  // initial the deque
  for (let i = 0; i <= k - 1; i++) {
    clearDeque(i, k, deque, nums);
    deque.push(i);
  }

  // output array
  const r = [];
  r.push(nums[deque[0]]);
  for (let i = k; i <= nums.length-1; i++) {
    clearDeque(i, k, deque, nums);
    deque.push(i);
    r.push(nums[deque[0]]);
  }

  return r;
};

const clearDeque = (i, k, deque, nums) => {
  // remove the element that is out of the window's boundary.
  if (deque[0] === i-k) deque.shift();
  // remove all the element that is smaller than the new comer.
  while (nums[deque[deque.length-1]] < nums[i]) {
    deque.pop();
  }
}
