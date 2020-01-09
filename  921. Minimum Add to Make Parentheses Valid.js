/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let counter = 0;
    let r = 0;
  
    for (let i = 0; i <= S.length-1; ++i) {
      const current = S.charAt(i);
      if (current === '(') {
        counter++;
      } else {
        if (counter > 0) {
          counter--;
        } else {
          r++;
        }
      }
    }
    return r + counter;
  };