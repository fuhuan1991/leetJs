/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = [];
  f(1, n, k, [], result);
  return result;
};

var f = function(index, remain, headCount, path, result) {
  // console.log(index, path)
  for (let i = index; i <= 9; i++ ) {
    // console.log('--', i)
    // const o = i;

    if (remain === i && headCount === 1) {
      // console.log('@')
      result.push(path.concat(i))
    } else if (remain - i > 0 && headCount > 0) {
      // console.log('#')
      f(i + 1, remain - i, headCount - 1, path.concat(i), result);
    }

  }
}

