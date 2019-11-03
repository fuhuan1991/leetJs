/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {

    const nums = input.split(/[+\-*]/).map((a) => {return parseInt(a, 10)});
    const ops = input.split(/[0-9]/).filter((a) => { return a.length > 0;});
    // console.log(nums, ops);
  
    const r = f1(nums, ops, 0, nums.length - 1);
    return r;
  };
  
  function cal(a, b, op) {
    if (op === '+') {
      return a + b;
    } else if (op === '-') {
      return a - b;
    } else if (op === '*') {
      return a * b;
    }
  }
  
  function f1(nums, ops, left, right) {
    // console.log(nums,ops, left,right)
    let arr = [];
  
    if (right === left + 1) {
      return [cal(nums[left], nums[right], ops[left])];
    }
  
    if (right === left) {
      return [nums[left]]
    }
  
    for (let i = left; i <= right - 1; i++) {
  
      const op = ops[i];
      const arr1 = f1(nums, ops, left, i);
      const arr2 = f1(nums, ops, i+1, right);
  
      for (j in arr1) {
        for (k in arr2){
          arr.push(cal(arr1[j], arr2[k], op));
        }
      }
    }
    return arr;
  }
  
  // console.log(diffWaysToCompute('2*3-4*5'));