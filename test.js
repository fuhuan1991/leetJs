/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
  const len = colsum.length;
  const upperArr = new Array(len).fill('x');
  const lowerArr = new Array(len).fill('x');
  let counterX = 0;

  for (let i = 0; i <= len-1; i++) {
    if (colsum[i] === 0) {
      upperArr[i] = 0;
      lowerArr[i] = 0;
    } else if (colsum[i] === 2) {
      upperArr[i] = 1;
      lowerArr[i] = 1;
      upper--;
      lower--;
    } else {
      counterX++;
    }
  }

  if (upper >= 0 && lower >= 0 && counterX === upper + lower) {
    for (let i = 0; i <= len-1; i++) {
      if (upperArr[i] === 'x') {
        if (upper > 0) {
          upperArr[i] = 1;
          lowerArr[i] = 0;
          upper--;
        } else {
          upperArr[i] = 0;
          lowerArr[i] = 1;
          lower--;
        }
      }
    }
    return [upperArr, lowerArr];
  }

  return [];

};

reconstructMatrix(4,2,[1,2,1,2,0])