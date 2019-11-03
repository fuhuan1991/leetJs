/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const numStack = [0];
    const opratorStack = [''];
    let level = 0;
  
    for (let i = 0; i <= s.length - 1; i++) {
  
      const current = s[i];
  
      if (current === '') {
        continue;
      } else if (/[0-9]/.test(current)) {
        const numberB = parseInt(s.slice(i));
        // move forward
        const numLen = numberB.toString().length;
        i = i + numLen - 1;
  
        if (opratorStack[level]) {
          if (opratorStack[level] === '+') {
            numStack[level] = numStack[level] + numberB;
          } else {
            numStack[level] = numStack[level] - numberB;
          }
          opratorStack[level] = '';
        } else {
          numStack[level] = numberB;
        }
  
      } else if (/[+\-]/.test(current)) {
        opratorStack[level] = current;
      } else if (/\(/.test(current)) {
        // console.log(131)
        level++;
      } else if (/\)/.test(current)) {
  
        const r = numStack[level];
        numStack[level] = 0;
        level --;
  
        if (opratorStack[level] === '+') {
          numStack[level] = numStack[level] + r;
          opratorStack[level] = '';
        } else if (opratorStack[level] === '-'){
          numStack[level] = numStack[level] - r;
          opratorStack[level] = '';
        } else {
          numStack[level] = r;
        }
        
      }
    //   console.log(numStack)
    // console.log(opratorStack)
    }
    // console.log(numStack[0])
    return numStack[0]
    
  };
  calculate('(1+(4+5+2)-3)+(6+8)')
  
  