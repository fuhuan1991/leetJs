
const c = console.log;

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];
  
  tokens.forEach((item, index) => {
    if (/^[+|\-|*|/]$/.test(item)) {
      const b = parseInt(stack.pop(), 10);
      const a = parseInt(stack.pop(), 10);
      // c(a, item, b)
      if (item === '+') {
        stack.push(a + b);
      }

      if (item === '-') {
        stack.push(a - b);
      }

      if (item === '*') {
        stack.push(a * b);
      }

      if (item === '/') {
        const x = a/b;
        r = x >= 0 ? Math.floor(x) : Math.ceil(x)
        stack.push(r);
      }

    } else {
      stack.push(item)
    }
  })
  // console.log(stack)
  return stack[0];
};

// evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])

