/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
  if (grid.length === 0) return 0;
  const hei = grid.length;
  const len = grid[0].length;
  const dpH = new Array(hei);
  const dpV = new Array(hei);

  for (let i = 0; i <= hei-1; i++) {
    dpH[i] = new Array(len).fill(0);
    dpV[i] = new Array(len).fill(0);
  }

  for (let i = 0; i <= hei-1; i++) {
    for (let j = 0; j <= len-1; j++) {
      if (grid[i][j] === 'W') {
        dpH[i][j] = 'W';
      } else {
        // 0
        dpH[i][j] = checkLastH(i, j, dpH, grid);
      }
    }
  }

  for (let j = 0; j <= len-1; j++) {
    for (let i = 0; i <= hei-1; i++) {
      if (grid[i][j] === 'W') {
        dpV[i][j] = 'W';
      } else {
        // 0
        dpV[i][j] = checkLastV(i, j, dpV, grid);
      }
    }
  }
  // console.log(dpV)
  // console.log(countEnemyRight(1,1,grid));
  let max = 0;
  for (let i = 0; i <= hei-1; i++) {
    for (let j = 0; j <= len-1; j++) {
      if (grid[i][j] !== 'E' && grid[i][j] !== 'W' && dpH[i][j] + dpV[i][j] > max) {
        max = dpH[i][j] + dpV[i][j];
      }
    }
  }
  return max;
};

const checkLastH = (i, j, dpH, grid) => {
  let currentJ = j-1;
  while (true) {
    if (currentJ < 0 || dpH[i][currentJ] === 'W') {
      return countEnemyRight(i, j, grid);
    } else {
      return dpH[i][currentJ];
    }
  }
}

const checkLastV = (i, j, dpV, grid) => {
  let currentI = i-1;
  while (true) {
    if (currentI < 0 || dpV[currentI][j] === 'W') {
      return countEnemyDown(i, j, grid);
    } else {
      return dpV[currentI][j];
    }
  }
}

const countEnemyRight = (i, j, grid) => {
  let currentJ = j;
  let counter = 0;
  while (true) {
    if (currentJ > grid[0].length-1 || grid[i][currentJ] === 'W') {
      return counter;
    } else {
      if (grid[i][currentJ] === 'E') counter ++;
      currentJ++;
    }
  }
}

const countEnemyDown = (i, j, grid) => {
  let currentI = i;
  let counter = 0;
  while (true) {
    if (currentI > grid.length-1 || grid[currentI][j] === 'W') {
      return counter;
    } else {
      if (grid[currentI][j] === 'E') counter ++;
      currentI++;
    }
  }
}


// maxKilledEnemies([["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]);