/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return nums[0];
  }
  if (len === 2) {
    if (nums[0] > nums[1]) {
      return nums[0];
    } else {
      return nums[1];
    }
  }

  if (len === 3) {
    return Math.max(nums[0],nums[1],nums[2])
  }

  const str1 = nums.slice(1);
  const str2 = nums.slice(2, -1);
  const cache1 = [];
  const cache2 = [];
  const s1 = f(str1, str1.length, cache1);
  const s2 = f(str2, str2.length, cache2) + nums[0];
  if (s1 > s2) {
    return s1;
  } else {
    return s2;
  }
};

var f = function(nums, k, cache) {

  if (cache[k]) {
    return cache[k];
  }

  if (k === 1) {
    return nums[0];
  }

  if (nums[k - 1] === 0) {
    return f(nums, k-1, cache);
  }

  if (k === 2) {
    if (nums[0] > nums[1]) {
      cache[2] = nums[0];
      return nums[0];
    } else {
      cache[2] = nums[1];
      return nums[1];
    }
  }

  if (k === 3) {
    if (nums[0] + nums[2] > nums[1]) {
      cache[3] = nums[0] + nums[2];
      return nums[0] + nums[2];
    } else {
      cache[3] = nums[1];
      return nums[1];
    }
  }

  const s1 = f(nums, k - 1, cache);
  const s2 = f(nums, k - 2, cache) + nums[k - 1];

  if (s1 > s2) {
    cache[k] = s1;
    return s1;
  } else {
    cache[k] = s2;
    return s2;
  }
}


