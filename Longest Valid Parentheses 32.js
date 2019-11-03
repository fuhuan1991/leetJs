/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let anchor = null;
    let left = 0;
    let right = 0;
    let max = 0;
  
    for (i = 0; i <= s.length - 1; i ++) {
      const current = s[i];
      if (current === '(') {
        left++;
        if (!anchor && anchor !== 0) {
          anchor = i;
        }
      } else {
        right ++;
        if (left === right) {
          max = Math.max(max, i - anchor + 1);
        } else if (right > left) {
          left = 0;
          right = 0;
          anchor = null;
        }
      }
      // console.log('left',left,'right',right,'anchor',anchor)
    }
  
    anchor = null;
    left = 0;
    right = 0;
  
    for (i = s.length - 1; i >= 0; i --) {
      const current = s[i];
      if (current === ')') {
        left++;
        if (!anchor && anchor !== 0) {
          anchor = i;
        }
      } else {
        right ++;
        if (left === right) {
          max = Math.max(max, anchor - i + 1);
        } else if (right > left) {
          left = 0;
          right = 0;
          anchor = null;
        }
      }
      // console.log('left',left,'right',right,'anchor',anchor)
    }
  
    console.log(max)
    return max;
  };
  
  longestValidParentheses('()((())')
  