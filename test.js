/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  if (n === 1) return 10;
  let r = 10;
  for (let i = 2; i <= Math.min(n, 10); i++) {
    r += helper(i);
  }
  return r;
};

const helper = (k) => {
  let r = 9;
  let v = 9;
  while (k > 1) {
    r = r * v;
    v--;
    k--;
  } 
  return r;
}

// console.log(helper(3))