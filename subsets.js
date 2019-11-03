/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    const r = f(nums)
    console.log(r)
    return r;
  };
  
  function f (arr) {
    // console.log(arr)
    if (arr.length === 1) {
      return [arr];
    } else {
      const result = [];
      const subResult = f(arr.slice(1));
      // console.log('subResult',subResult)
      const target = arr[0];
      result.push([target]);
      subResult.map((w) => { 
        // console.log('w',w)
        // console.log('target', target)
        result.push([...w, target]);
      });
      // console.log('result',result)
      return [...result, ...subResult];
    }
  }
  
  subsets([1,2,3])