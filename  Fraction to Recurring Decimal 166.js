/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  
    let s1 = numerator > 0 ? 1 : -1;
    let s2 = denominator > 0 ? 1 : -1; 
    let a = Math.abs(numerator);
    let b = Math.abs(denominator);
    let result = parseInt(a/b, 10);
    let rem = a % b;
    // console.log(s1,s2)
    if (rem === 0) {
      if (s1 * s2 > 0 || a === 0) {
        return result.toString();
      } else {
        return '-' + result.toString();
      }
    }
  
    let str1 = '';
    if (a > b) {
      str1 = str1 + result.toString() + '.';
    } else {
      str1 = str1 + '0.';
    }
  
    let start = true;
    const M = {};
    // let M_Last = null;
    const M2 = {};
    let str2 = '';
    let index = 0;
    while (true) {
      result = parseInt(toNonExponential(rem * 10 /b), 10);
      rem = (rem * 10) % b;
      // console.log('rem', rem)
      // console.log('result', result)
      if (rem === 0) {
        str2 = str2 + result;
        // console.log(s1,s2)
        if (s1 * s2 > 0) {
          return str1 + str2;
        } else {
          return '-' + str1 + str2;
        }
      }
    
      if ((M[rem] || M[rem] === 0) && (result === M2[M[rem]]) && !start) {
        str2 = str2.slice(0, M[rem]) + '(' + str2.slice(M[rem]) + ')';
        break;
      }
  
      str2 = str2 + result;
      M[rem] = index;
      // M_Last = index;
      M2[index] = result;
  
      if (result !== 0) {
        start = false;
      }
      index++;
      // console.log(result)
    }
    // console.log(str2)
    // console.log(s1,s2)
    let r = (s1 * s2) > 0 ? str1 + str2 : '-' + str1 + str2;
    return r;
  };
  
  function toNonExponential(num) {
    var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
    return num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
  }
  
  console.log(fractionToDecimal(-2147483648,1))