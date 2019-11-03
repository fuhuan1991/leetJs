/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    d = gcd(x,y);
    return z === 0 || ((x + y >= z) && z % d === 0)
  };
  
  function gcd(x, y) {
    return y === 0? x : gcd(y, x%y);
  }