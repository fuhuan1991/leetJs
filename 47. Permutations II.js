/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const r = [];
    nums.sort((a, b) => {return a - b;});
    f(nums, [], r);
    console.log(r)
    return r;
  };
  
  function f (arr, path, r) {
    let prev = '';
  
    if (arr.length === 1) {
      r.push([...path, arr[0]]);
    } else {
      for (let i = 0; i <= arr.length - 1; i ++) {
  
        const current = arr[i];
        if (current === prev) continue;
  
        const newArr = arr.slice(0, i).concat(arr.slice(i+1));
        // console.log(newArr);
        f(newArr, [...path, current], r);
        prev = current;
      }
    }
  }
  
  permuteUnique([1,1,2]);
  
  