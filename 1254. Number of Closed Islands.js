/**
 * @param {number[][]} grid
 * @return {number}
 */
let hei, len;
var closedIsland = function(grid) {
  hei = grid.length;
  len = grid[0].length;
// console.log(hei,len)
  const visited = new Array(hei).fill(0);
  for (let i = 0; i <= hei-1; i++) {
    visited[i] = new Array(len).fill(false);
  }

  let counter = 0;

  for (let i = 0; i <= hei-1; i++) {
    for (let j = 0; j <= len-1; j++) {
      if (grid[i][j] === 0) {
        const r = dfs(i, j, grid, visited);
        // console.log(i,j,r)
        // console.log(i,j,r)
        if (r === 'closed') counter++;
      }
    }
  }
  // console.log(counter)
  return counter;
};

const dfs = (i, j, grid, visited) => {
  if (i === 1 && j === 5) flag = true;


  // console.log(i,j)

  if (visited[i][j]) return null;
  if (i === 0 || i === hei-1 || j === 0 || j === len-1) return 'edge';
  if (i < 0 || i > hei-1 || j < 0 || j > len-1) return null;
  visited[i][j] = true;
  let edge = false;

  if (grid[i+1][j] === 0 && !visited[i+1][j]) {
    const r = dfs(i+1, j, grid, visited);
    if (r === 'edge') edge = true;
  }

  if (grid[i][j+1] === 0 && !visited[i][j+1]) {
    const r = dfs(i, j+1, grid, visited);
    if (r === 'edge') edge = true;
  }
  if (grid[i-1][j] === 0 && !visited[i-1][j]) {
    const r = dfs(i-1, j, grid, visited);
    if (r === 'edge') edge = true;
  }

  if (grid[i][j-1] === 0 && !visited[i][j-1]) {
    const r = dfs(i, j-1, grid, visited);
    if (r === 'edge') edge = true;
  }
  if (edge) return 'edge';
  return 'closed';
}

closedIsland([
  [0,0,1,1,0,1,0,0,1,0],
  [1,1,0,1,1,0,1,1,1,0],
  [1,0,1,1,1,0,0,1,1,0],
  [0,1,1,0,0,0,0,1,0,1],
  [0,0,0,0,0,0,1,1,1,0],
  [0,1,0,1,0,1,0,1,1,1],
  [1,0,1,0,1,1,0,0,0,1],
  [1,1,1,1,1,1,0,0,0,0],
  [1,1,1,0,0,1,0,1,0,1],
  [1,1,1,0,1,1,0,1,1,0]])