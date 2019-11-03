/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = [];
  const sortedArr = candidates.sort((a,b) => {return a-b;});
  f(target, 0, sortedArr, [], result);
  return result;
};

var f = function(t, index, candidates, path, result) {
  const visited = {};
  for (let i = index; i <= candidates.length - 1; i ++) {

    const current = candidates[i];

    if (!visited[current] || index > candidates.length-1) {
      
      const newPath = path.concat(current)
      visited[current] = true;

      if (current === t) {
        result.push(newPath);
      } else if (t - current > 0) {
        f(t - current, i + 1, candidates, newPath, result);
      }
    }
  }
}


combinationSum2([10,1,2,7,6,1,5], 8)