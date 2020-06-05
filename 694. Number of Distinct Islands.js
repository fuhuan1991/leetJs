/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
  const visited = new Set();
  const shapes = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1 && !visited.has(getKey(i, j))) {
        analyzeShape(i, j, grid, visited, shapes);
      }
    }
  }

  return shapes.size;
};

var analyzeShape = function (i, j, grid, visited, shapes) {
  const o = getKey(i, j);
  const set = new Set();
  explore(i, j, grid, set);
  console.log(set)
  let str = '';
  for (let pos of set) {
    visited.add(pos);
    str += (pos - o)+'_';
  }
  shapes.add(str);
}

//DFS
var explore = function (i, j, grid, set) {
  let key = getKey(i, j);
  if (0 <= i && i < grid.length && 0 <= j && j < grid[0].length && grid[i][j] === 1 && !set.has(key)) {
    set.add(key);
    explore(i-1, j, grid, set);
    explore(i, j+1, grid, set);
    explore(i+1, j, grid, set);
    explore(i, j-1, grid, set);
  }
}

var getKey = function (i, j) {
  return 100*i + j;
}

