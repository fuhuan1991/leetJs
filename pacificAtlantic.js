/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    const hei = matrix.length;
    if (hei === 0) return [];
    if (hei === 1) return matrix[0];
    const len = matrix[0].length;
    if (len === 1) {
      const r = [];
      for (let i = 0; i <= hei - 1; i++) {
        r.push([i, 0]);
      }
      return r;
    }
    const P = new Array(hei).fill(0);
    const A = new Array(hei).fill(0);
  
    for (let i = 0; i <= len-1; i++) {
      P[i] = new Array(len).fill(false);
      A[i] = new Array(len).fill(false);
    }
    // console.log(A,P)
    for (let i = 0; i <= hei-1; i++) {
      dfs(matrix, i, 0, P);
      dfs(matrix, i, len-1, A);
    }
  
    for (let i = 0; i <= len-1; i++) {
      dfs(matrix, 0, i, P);
      dfs(matrix, hei-1, i, A);
    }
  
    console.log(P)
    console.log(A)
    const r = [];
    for (let i = 0; i <= hei - 1; i++) {
      for (let j = 0; j <= len - 1; j++) {
        if (A[i][j] && P[i][j]) r.push([i,j]);
      }
    }
    return r;
  };
  
  const dfs = (matrix, i, j, X) => {
    if (X[i][j]) return;
    X[i][j] = true;
    const h = matrix[i][j];
    // up
    if (0 <= i-1 && h <= matrix[i-1][j]) dfs(matrix, i-1, j, X);
    // down
    if (i+1 <= matrix.length-1 && h <= matrix[i+1][j]) dfs(matrix, i+1, j, X);
    // left
    if (0 <= j-1 && h <= matrix[i][j-1]) dfs(matrix, i, j-1, X);
    // right
    if (j+1 <= matrix[0].length-1 && h <= matrix[i][j+1]) dfs(matrix, i, j+1, X);
  }
  