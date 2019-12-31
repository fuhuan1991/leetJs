/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(N, mines) {
    const arrLeft = new Array(N);
    const arrRight = new Array(N);
    const arrUp = new Array(N);
    const arrDown = new Array(N);
    const arrMines = new Array(N);
  
    for (let i = 0; i <= N-1; ++i) {
      arrLeft[i] = new Array(N).fill(0);
      arrRight[i] = new Array(N).fill(0);
      arrUp[i] = new Array(N).fill(0);
      arrDown[i] = new Array(N).fill(0);
      arrMines[i] = new Array(N).fill(0);
    }
  
    for (let mine of mines) {
      arrMines[mine[0]][mine[1]] = 1;
    }
    
    for (let i = 0; i <= N-1; ++i) {
      let sum = 0;
      for (let j = 0; j <= N-1; ++j) {
        arrLeft[i][j] = sum;
        if (arrMines[i][j] === 0) {
          sum++;
        } else {
          sum = 0;
        }
      }
    }
    // console.log(arrLeft)
    for (let i = 0; i <= N-1; ++i) {
      let sum = 0;
      for (let j = N-1; j >= 0; --j) {
        arrRight[i][j] = sum;
        if (arrMines[i][j] === 0) {
          sum++;
        } else {
          sum = 0;
        }
      }
    }
    // console.log(arrRight)
    for (let j = 0; j <= N-1; ++j) {
      let sum = 0;
      for (let i = 0; i <= N-1; ++i) {
        arrUp[i][j] = sum;
        if (arrMines[i][j] === 0) {
          sum++;
        } else {
          sum = 0;
        }
      }
    }
    // console.log(arrUp)
    for (let j = 0; j <= N-1; ++j) {
      let sum = 0;
      for (let i = N-1; i >= 0; --i) {
        arrDown[i][j] = sum;
        if (arrMines[i][j] === 0) {
          sum++;
        } else {
          sum = 0;
        }
      }
    }
    // console.log(arrDown)
    let max = 0;
    for (let i = 0; i <= N-1; ++i) {
      for (let j = 0; j <= N-1; ++j) {
        if (arrMines[i][j] === 0) {
          const m = Math.min(arrLeft[i][j], arrRight[i][j], arrUp[i][j], arrDown[i][j]);
          max = Math.max(1, max, m+1);
        }
      }
    }
    return max;
  };
  
  
  
  
  orderOfLargestPlusSign(5, [])