/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (k === num.length) return '0';
  const stack = [];
  for (let char of num) {
    while (k > 0 && stack.length > 0 && stack[stack.length-1] > parseInt(char, 10)) {
      k--;
      stack.pop();
    }
    stack.push(parseInt(char, 10));
  }
  while (k > 0) {
    k--;
    stack.pop();
  }
  
  while (stack[0] === 0) {
    stack.shift();
  }
  
  if(stack.length === 0) return '0';

  return stack.join('');
};

// console.log(removeKdigits('1234', 2));