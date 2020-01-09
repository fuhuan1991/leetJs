/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [];
  
    for (let i = 0; i <= s.length-1; ++i) {
      const current = s.charAt(i);
      if (stack.length === 0) {
        stack.push(current);
      } else {
        const top = stack[stack.length-1];
        if (top[0] === current) {
          top = top + current;
          if (top.length === k) {
            stack.pop();
          } else {
            stack[stack.length-1] = top;
          }
        } else {
          stack.push(current);
        }
      }
    }
    return stack.join('');
  };