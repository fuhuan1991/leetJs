/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const N = board.length;
    if (N === 1) return 1;
    const flattenBoard = [0];
    const visited = {};
  
    let goRight = true;
    let x = 0;
    let y = N-1;
    let counter = 1;
    const ladders = [];
  
    while (x <= N-1 && y >= 0) {
      // console.log(x,y)
      flattenBoard.push(board[y][x]);
      if (board[y][x] > counter) {
        // ladder found
        ladders.push([counter, board[y][x]]);
      }
      if (goRight) {
        if (x < N-1) {
          x++;
        } else {
          goRight = false;
          y--;
        }
      } else {
        if (x > 0) {
          x--;
        } else {
          goRight = true;
          y--;
        }
      }
      counter++;
    }
    // console.log(flattenBoard);
    const q = [{cnt:0, finished: false, n: 1}];
    while (q.length > 0) {
      // console.log(q)
      const o = q.shift();
      
      // console.log(o)
      if (o.finished) {
        return o.cnt;
      } else {
        simulateStep(o.cnt, o.n, N, flattenBoard, q, visited);
      }
    }
    return -1;
  };
  
  simulateStep = (cnt, n, N, flattenBoard, q, visited) => {
    // console.log(n)
  
    if (visited[n]) return;
    visited[n] = true;
    // if (n + 6 >= N*N) q.push({cnt: cnt + 1, finished: true, n: N*N});
    let normalStep = true;
  
    for (let i = n+6; i >= n+1; i--) {
      // console.log("i: ",i)
      if (flattenBoard[i] === -1 && normalStep) {
        // console.log('n')
        // normalStep
        const finished = i >= N*N;
        q.push({cnt: cnt + 1, finished: finished, n: i});
        normalStep = false;
      } else if (flattenBoard[i] > 0) {
        // console.log('s')
        // snake or ladder
        const finished = flattenBoard[i] >= N*N;
        q.push({cnt: cnt + 1, finished: finished, n: flattenBoard[i]});
      }
    }
  }
  
  
  