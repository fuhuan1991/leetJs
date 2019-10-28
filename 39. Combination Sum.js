/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const r = [];
    
    for (let i = 0; i <= candidates.length - 1; i++) {
      f(candidates, i, target, r, []);
    }
    console.log(r);
    return r;
  };
  
  function f(candidates, start, rest, r, path) {
  
    const newRest = rest - candidates[start];
    // console.log(start, newRest);
  
    if (newRest < 0) {
      return;
    }
  
    if (newRest === 0) {
      r.push([...path, candidates[start]]);
      return;
    }
  
    for (let i = start; i <= candidates.length - 1; i++) {
      f(candidates, i, newRest, r, [...path, candidates[start]]);
    }
  }
  
  combinationSum([2,3,6,7], 7);