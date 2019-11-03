/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let mem = [1];
    let i2 = 0,i3 = 0,i5 = 0;
  
    while (mem.length < n) {
      const n2 = mem[i2] * 2;
      const n3 = mem[i3] * 3;
      const n5 = mem[i5] * 5;
  
      const min = Math.min(n2,n3,n5);
      
      if (min === n2) {
        if (min !== mem[mem.length - 1]) {
          mem.push(min);
        }
        i2++;
      } else if (min === n3) {
        if (min !== mem[mem.length - 1]) {
          mem.push(min);
        }
        i3++;
      } else {
        if (min !== mem[mem.length - 1]) {
          mem.push(min);
        }
        i5++;
      }
    }
  console.log(mem)
    return mem[n-1];
  };
  
  console.log(nthUglyNumber(10))