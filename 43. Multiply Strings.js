/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

    if (num1 === '0' || num2 === '0') {
      return '0';
    }
  
    
    let finalProduct = new Array(num1.length + num2.length).fill(0);
  
    for (let i2 = num2.length - 1; i2 >= 0; i2--) {
  
      for (let i1 = num1.length - 1; i1 >= 0; i1--) {
        const p1 = parseInt(num1[i1], 10);
        const p2 = parseInt(num2[i2], 10);
        const p = p1 * p2 + finalProduct[i1 + i2 + 1];
        console.log(p)
        finalProduct[i1 + i2 + 1] = p%10;
        finalProduct[i1 + i2] += Math.floor(p/10);
      }
    }
    
    console.log(finalProduct.join(''))
    let r = finalProduct.join('');
    if (r[0] === '0') {
      return r.slice(0);
    } else {
      return r;
    }
  };
  
  
  multiply("123","7")