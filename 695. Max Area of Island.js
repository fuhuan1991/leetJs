/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    for (let i = 0; i <= grid.length-1; i++) {
      for (let j = 0; j <= grid[0].length-1; j++) {
        max = Math.max(max, dfs(grid, i, j));
      }
      // console.log(grid.map((arr) => arr.join(' ')));
    }
    return max;
  };
  
  const dfs = (grid, i, j) => {
    if (i<0 || j<0 || i===grid.length || j===grid[0].length || grid[i][j] !== 1) {
      return 0;
    }
    grid[i][j] = '*';
    const r = 1 + dfs(grid, i+1, j)
                + dfs(grid, i-1, j)
                + dfs(grid, i, j+1)
                + dfs(grid, i, j-1);
                // console.log(grid.map((arr) => arr.join(' ')))
    return r;
  }
  const arr = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]];
  
  console.log(maxAreaOfIsland(arr))