/**
 * @param {number} num
 * @return {string}
 */
var encode = function(num) {
    if (num === 0) return '';
    let start = 1;
    let len = 1;
    let end = start + Math.pow(2, len) - 1;
    while (end < num) {
      len++;
      start = end + 1;
      end = start + Math.pow(2, len) - 1;
    }
    let r = (num - start).toString(2);
    while (r.length < len) {
      r = '0' + r;
    }
    return r;
  };