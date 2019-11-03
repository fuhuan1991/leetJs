
var rob = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  const cache = [];
  return f(nums, nums.length, cache);
}

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


