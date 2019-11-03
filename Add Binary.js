/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const arrA = a.split('');
    const arrB = b.split('');
    let up = 0;
    let r = '';
  
    while (arrA.length > 0 && arrB.length > 0) {
      let bitA = arrA.pop();
      let bitB = arrB.pop();
      if (bitA === '0' && bitB === '0') {
        r = up + r;
        up = 0;
      } else if (bitA === '1' && bitB === '1') {
        r = up + r;
        up = 1;
      } else {
        if (up === 0) {
          r = 1 + r;
          up = 0;
        } else {
          r = 0 + r;
          up = 1;
        }
      }
    }
  
    const rest = arrA.length > 0? arrA : arrB;
  
    while (rest.length > 0) {
      const bit = rest.pop();
      if (bit === '0') {
        r = up + r;
        up = 0;
      } else {
        if (up === 0) {
          r = 1 + r;
          up = 0;
        } else {
          // up == 1 bit == 1
          r = 0 + r;
          up = 1;
        }
      }
    }
    if (up) {
      r = up + r;
    }
  console.log(r)
  return r;
  };
  addBinary('1010','1011')