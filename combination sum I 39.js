/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result  = [];
  f(0, candidates, target, [], result);
  return result;
};

var f = function(index, candidates, remain, path, result) {
  for (let i = index; i <= candidates.length - 1; i++) {
    const current = candidates[i];

    if (remain === current) {
      result.push(path.concat(current));
    } else if (remain > current){
      // if (i === index) {
      //   f(i , candidates, remain - current, path.concat(current), result);
      // } else {

      // }
      f(i, candidates, remain - current, path.concat(current), result);
    }
  }
}

combinationSum([2,3,6,7], 7)