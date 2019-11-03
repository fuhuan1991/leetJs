/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    if (n === 1) return 0;
    
    if (n%2 === 0) {
      return integerReplacement(n / 2) + 1;
    } else {
      return Math.min(integerReplacement(n + 1) + 1, integerReplacement(n - 1) + 1);
    }
  };
  
  console.log(integerReplacement(65550))