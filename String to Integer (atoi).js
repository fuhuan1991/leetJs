/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {  
    const s = str.trim();
    let i = 0;
    const len = s.length;
  
    if (len === 0) {
      return 0;
    }
  
    let positive = true;
    let signed = false;
    let r = 0;
    
    while (i <= len - 1) {
      const current = s[i];
  
      if (current === '+' && !signed) {
        positive = true;
        signed = true;
      } else if (current === '-' && !signed) {
        positive = false;
        signed = true;
      } else if ((48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57)) {
        // 0 - 9
        r = r * 10 + parseInt(current);
        signed = true;
      } else {
        r = r > 2147483648? 2147483648 : r;
        return positive? r : r * (-1);
      }
      i++;
    }
  
    if (positive) {
      return r >= 2147483648? 2147483647 : r;
    } else {
      return r >= 2147483648? -2147483648 : r * (-1);
    }
  };
  
  // console.log(myAtoi('-91283472332'))