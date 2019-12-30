/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
    const mem = new Array(6);
    for (let i = 0; i <= 5; i++) {
      mem[i] = new Array(16);
      for (let j = 0; j <= 15; j++) {
        mem[i][j] = [];
      }
    }
    return roll(null, 0, n, rollMax, mem);
    // console.log(mem)
  };
  
  const roll = (lastValue, lastLen, restRoll, rollMax, mem) => {
    const M = Math.pow(10, 9) + 7;
    if (restRoll <= 0) {
      return 0;
    }
  
    if (lastValue && mem[lastValue-1][lastLen][restRoll]) {
      return mem[lastValue-1][lastLen][restRoll];
    }
  
    let r = 0;
  
    for (let v = 1; v <= 6; v++) {
      if (v === lastValue && rollMax[lastValue-1] < lastLen + 1) {
        // console.log(v, lastValue, lastLen)
        continue;
      } else {
        if (v === lastValue) {
          const partialResult = roll(lastValue, lastLen+1, restRoll-1, rollMax, mem);
          if (partialResult === 0) {
            r++;
          } else {
            r = r + partialResult;
          }
        } else {
          const partialResult = roll(v, 1, restRoll-1, rollMax, mem);
          if (partialResult === 0) {
            r++;
          } else {
            r = r + partialResult;
          }
        }
      }
    }
  
    if (lastValue) {
      mem[lastValue-1][lastLen][restRoll] = r%M;
      // console.log(lastValue, lastLen, restRoll, r)
    }
  
    return r%M;
  };
  
  // console.log(dieSimulator(2, [1,1,2,2,2,3]));