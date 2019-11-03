/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let level = 1;
    let bound = 9;
    let number = 9;
    let start = 0;
    while (n > bound) {
      level++;
      number = number * 10;
      start = bound;
      bound = bound + number * level;
    }
    // console.log(level,bound)
    let offset = n - start;
    let offsetNumber = Math.floor(offset/level);
    let reminder = offset%level;
  
    let l = level;
    let startNumber = 1;
    while (l > 1) {
      startNumber = startNumber * 10;
      l--;
    }
  
    console.log(startNumber)
    if (reminder === 0) {
      return (startNumber + offsetNumber - 1).toString().charAt(level - 1);
    } else {
      return (startNumber + offsetNumber).toString().charAt(reminder - 1);
    }
    
  };
  
  findNthDigit(200)