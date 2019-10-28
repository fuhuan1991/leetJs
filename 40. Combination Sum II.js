/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const r = [];
  
    candidates.sort((a,b) => {return a - b;});
  
    let prev = null;
    
    for (let i = 0; i <= candidates.length - 1; i++) {
      if (candidates[i] === prev) continue; 
      f(candidates, i, target, r, []);
      prev = candidates[i];
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
  
    let prev = null;
  
    for (let i = start + 1; i <= candidates.length - 1; i++) {
      if (candidates[i] === prev) continue; 
      f(candidates, i, newRest, r, [...path, candidates[start]]);
      prev = candidates[i];
    }
  }
  
  combinationSum2([10,1,2,7,6,1,5], 8);