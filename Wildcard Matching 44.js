/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0;
    let j = 0;
    let istar = -1;
    let jstar = -1;
  
    while (i <= s.length - 1) {
      if (s[i] === p[j] || p[j] === '?') {
        i++; 
        j++;
      } else if (p[j] === '*') {
        jstar = j;
        j++;
        istar = i;
      } else if (istar >= 0) {
        j = jstar + 1;
        istar++;
        i = istar;
      } else {
        return false;
      }
    }
  
    while (j <= p.length - 1 && p[j] === '*') {
      j++;
    }
    
    return j === p.length;
  };