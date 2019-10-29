/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if (n === 1) return [];
    const r = [];
    place([], n, n, r);
    console.log(r)
  };
  
  function place(queens, rest, n, r) {
    for (let i = 0; i <= n-1; i++) {
      for (let j = 0; j <= n-1; j++) {
        if (freeToPlace(queens, [i, j])) {
          if (rest === 1) {
            r.push([...queens, [i, j]]);
          } else {
            place([...queens, [i, j]], rest - 1, n, r)
          }
        }
      }
    }
  }
  
  function inRange(pos1, pos2) {
    if (pos1[0] === pos2[0]) return true;
    if (pos1[1] === pos2[1]) return true;
    if (Math.abs(pos2[0]-pos1[0]) === Math.abs(pos2[1]-pos1[1])) return true;
    return false;
  }
  
  function freeToPlace(queens, pos) {
    for (let i in queens) {
      if (inRange(queens[i], pos)) return false;
    }
    return true;
  }
  
  // console.log(inRange([5,4],[7,2]))
  // console.log(checkRange([[0,0],[0,2],[1,1]], [4,4]))
  solveNQueens(8);