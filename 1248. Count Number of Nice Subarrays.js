/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    const oddIndex = [];
    for (let i = 0; i <= nums.length-1; i++) {
      if (nums[i]%2 === 1) oddIndex.push(i);
    }
  
    if (oddIndex.length < k) return 0;
  
    let r = 0;
  // console.log(oddIndex)
    for (let i = 0; i+k-1 <= oddIndex.length-1; i++) {
      // const leftIndex = oddIndex[i];
      // const rightIndex = oddIndex[i+k-1];
      let leftFactor, rightFactor;
      if (i > 0) {
        leftFactor = oddIndex[i] - oddIndex[i-1];
      } else {
        leftFactor = oddIndex[i] - 0 + 1;
      }
  
      if (i+k-1 < oddIndex.length-1) {
        rightFactor = oddIndex[i+k] - oddIndex[i+k-1];
      } else {
        rightFactor = nums.length - oddIndex[i+k-1];
      }
  // console.log(leftFactor, rightFactor)
      r = r + rightFactor * leftFactor;
    }
    return r;
  };
  
  // numberOfSubarrays([2044,96397,50143],1)