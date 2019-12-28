/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  nums.sort((a, b) => a - b);
  const Q = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    const current = nums[i];
    if (Q.length === 0 || Q[0].val === current) {
      // add new
      Q.push({val: current, currentLength: 1});
    } else if (Q[0].val === current - 1) {
      // update
      const o = Q.shift();
      o.val = current;
      o.currentLength++;
      if (o.currentLength < k) {
        Q.push(o);
      }
    } else {
      // stop
      return false;
    }
    console.log(Q)
  }
  if (Q.length === 0) {
    return true;
  } else {
    return false;
  }
};

isPossibleDivide([1,2,3,3,4,4,5,6], 4)