/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => {return a - b});
    let r = [[]];
    let lastChar = '';
    let lastNumber = 0;
  
    for (let i = 0; i <= nums.length - 1; i++) {
      const newTuples = [];
      let start;
  
      if (nums[i] === lastChar) {
        start = r.length - lastNumber;
      } else {
        start = 0;
      }
  
      for (let j = start; j <= r.length - 1; j++) {
        newTuples.push([...r[j], nums[i]]);
        // console.log(newTuples)
      }
      r = r.concat(newTuples);
      lastNumber = newTuples.length;
      lastChar = nums[i];
      // console.log(r)
    }
  };
  
  // subsetsWithDup([1,2,3,3])