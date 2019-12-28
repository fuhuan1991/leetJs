/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
  const count = new Array(26).fill(0);
  // let start;
  let currentLen = 1;

  for (let i = 0; i <= p.length-1; i++) {
    if (i > 0 && p.charCodeAt(i) === p.charCodeAt(i-1)+1 || p.charCodeAt(i) === p.charCodeAt(i-1) - 25) {
      currentLen++;

    } else {
      currentLen = 1;
      // start = i;
    }
    const index = p.charCodeAt(i) - 97;
    count[index] = Math.max(count[index], currentLen);
  }

  return count.reduce((a, b) => a + b, 0);
};

console.log(findSubstringInWraproundString('zab'))