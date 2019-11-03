/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    if (n < 0 || n > 45) return [];
    const r = [];
  
    for (let i = 1; i <= 9; i++) {
      f(i, n, k, r, []);
    }
    console.log(r)
    return r;
  };
  
  function f(start, rest, hc, r, path) {
  
    const newRest = rest - start;
    // console.log(start, newRest);
  
    if (newRest < 0) {
      return;
    }
  
    if (newRest === 0) {
      if (hc > 1) {
        return;
      } else if (hc === 1){
        r.push([...path, start]);
        return;
      }
    }
  
    if (hc >= 2) {
      for (let i = start + 1; i <= 9; i++) {
        f(i, newRest, hc - 1, r, [...path, start]);
      }
    }
  }
  
  combinationSum3(3,7);