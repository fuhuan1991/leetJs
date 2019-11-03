/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result  = [];
  f(1, n, k, [], result);
  return result;
};

var f = function(index, n, k_remain, path, result) {
  for (let i = index; i <= n; i++) {
    if (k_remain === 1) {
      result.push(path.concat(i));
    } else {
      f(i + 1, n, k_remain - 1, path.concat(i), result);
    }
  }
}

combine(4, 2);