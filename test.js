/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  const stack = [0];
  for (let i = 0; i <= S.length-1; ++i) {
    if (S[i] === '(') {
      stack.push(0);
    } else {
      const sum = stack[stack.length-1];
      if (sum === 0) {
        stack.pop();
        stack[stack.length-1]++;
      } else {
        stack.pop();
        stack[stack.length-1] += 2 * sum;
      }
    }
  }
  return stack[0];
};