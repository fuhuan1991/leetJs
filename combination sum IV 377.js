/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const cache = {};
  const arr = nums.sort((a,b) => {return a - b;});
  return f(arr, target, cache); 

};

var f = function(nums, remain, cache){
// console.log('remain',remain)
// console.log('c',cache[remain])
  if (cache[remain] === 0 || cache[remain]) {
	// console.log('#')
    return cache[remain];
  }
  let r = 0;
  for (let i = 0; i <= nums.length - 1; i ++) {
    const current = nums[i];
    if (remain === current) {
      r++;
    } else if (remain > current) {
      r = r + f(nums, remain - current, cache);
    } else {
      break;
    }
  }
  cache[remain] = r;
// console.log(cache)
  return r;
}

combinationSum4([3,33,333], 100);