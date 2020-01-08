/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  const N = grid.length;
  const M = grid[0].length;
  const serversCol = new Array(N).fill(0);
  const serversRow = new Array(M).fill(0);
  let r = 0;

  for (let i = 0; i <= N-1; ++i) {
    for (let j = 0; j<= M-1; ++j) {
      if (grid[i][j] === 1) {
        serversCol[i]++;
        serversRow[j]++;
      }
    }
  }

  for (let i = 0; i <= N-1; ++i) {
    for (let j = 0; j<= M-1; ++j) {
      if (grid[i][j] === 1 && (serversCol[i] >= 2 || serversRow[j] >= 2)) {
        r++;
      }
    }
  }
  return r;
};