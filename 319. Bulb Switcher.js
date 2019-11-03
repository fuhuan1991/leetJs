/**
 * @param {number} n
 * @return {number}
 */
// only the bulbs with a square index can on at the end
// we need only to find all the square numbers between 1 and n(inclusive).
var bulbSwitch = function(n) {
    let r = 1;
    while (r*r <= n) {
      r++;
    }
    return --r;
  };
  