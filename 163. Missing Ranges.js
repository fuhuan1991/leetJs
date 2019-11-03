/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {

    const r = [];
  
    if (lower === upper) {
      if (nums.length === 0) return [upper.toString()];
      return [];
    }
    if (lower > upper) return r;
  
    for (let i = 0; i <= nums.length-2; i++) {
      if (nums[i] === nums[i+1]) {
        continue;
      } else if (nums[i]+1 === nums[i+1]) {
        continue;
      } else if (nums[i]+2 === nums[i+1]) {
        const number = (nums[i]+1).toString();
          r.push(number);
      } else if (nums[i]+2 < nums[i+1]) {
        const left = nums[i]+1;
        const right = nums[i+1]-1;
        r.push(left + '->' + right);
      }
    }
    if (nums.length === 0) {
      r.push(lower + '->' + upper);
    } else{
      if (lower < nums[0]-1) {
        r.unshift(lower + '->' + (nums[0]-1))
      } else if (lower === nums[0]-1){
        r.unshift(lower.toString());
      }
  
      if (upper > nums[nums.length-1]+1) {
        r.push((nums[nums.length-1]+1) + '->' + upper);
      } else if (upper === nums[nums.length-1]+1) {
        r.push(upper.toString());
      }
    }
  
    // console.log(r)
    return r;
  };
  console.log(findMissingRanges([0,1,3,50,75], -1, 99));