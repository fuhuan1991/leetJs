/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let strLow = low.toString();
    let start = parseInt(strLow[0], 10);
    let len = strLow.length;
    const result = [];
  
    while (true) {
      current = generateInt(start, len);
      if (current > high) break;
  
      if (start + len <= 10) {
        if (current >= low) {
          result.push(current);
        }
      }
  
      if (start + len === 10) {
        start = 1;
        len++;
      } else if (start < 9) {
        start++;
      } else {
        start = 1;
        len++;
      }
      
    }
  
    return result;
  };
  
  const generateInt = (start, len) => {
    // 2 <= len <= 9
    let r = 0;
    let base = Math.pow(10, len-1);
  
    for (let i = 0; i <= len-1; i++) {
      r = r + base * (start + i);
      base = base / 10;
    }
    return r;
  }
  
  console.log(sequentialDigits(8511,23553));