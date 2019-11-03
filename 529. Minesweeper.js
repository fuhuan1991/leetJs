/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    if (checkMine(board, click[0], click[1]) === 1) {
      board[click[0]][click[1]] = 'X';
      // console.log(board)
      return board;
    } else {
      checkBlank(board, click[0], click[1]);
      // console.log(board)
      return board;
    }
  };
  
  const checkMine = function (board, i, j) {
    if (i<0 || j<0 || i>=board.length || j>=board[0].length) return 0;
    if (board[i][j] === 'M') return 1;
    return 0;
  }
  
  const check8 = function (board, i, j) {
    return checkMine(board, i+1, j) +
           checkMine(board, i-1, j) +
           checkMine(board, i, j+1) +
           checkMine(board, i, j-1) +
           checkMine(board, i+1, j+1) +
           checkMine(board, i-1, j-1) +
           checkMine(board, i+1, j-1) +
           checkMine(board, i-1, j+1);
  }
  
  const checkBlank = function (board, i, j) {
    if (i<0 || j<0 || i>=board.length || j>=board[0].length) return;
    if (board[i][j] !== 'E') return;
    const digit = check8(board, i, j);
    if (digit > 0) {
      board[i][j] = digit+'';
    } else {
      board[i][j] = 'B';
      checkBlank(board, i+1, j);
      checkBlank(board, i-1, j);
      checkBlank(board, i, j+1);
      checkBlank(board, i, j-1);
      checkBlank(board, i+1, j+1);
      checkBlank(board, i-1, j-1);
      checkBlank(board, i+1, j-1);
      checkBlank(board, i-1, j+1);
    }
  }
  
  const bb = 
  [['E', 'E', 'E', 'E', 'E'],
   ['E', 'E', 'M', 'E', 'E'],
   ['E', 'E', 'E', 'E', 'E'],
   ['E', 'E', 'E', 'E', 'E']];
  
  // console.log(checkMine(bb, -1, 2))
  console.log(updateBoard(bb, [1, 2]))