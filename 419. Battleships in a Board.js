/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let r = 0;
    for (let i = 0; i <= board.length-1; i++) {
      for (let j = 0; j <= board[0].length-1; j++) {
        
        if (board[i][j] === 'X') {
          console.log(i,j)
          const noUp = board[i] === 0 || board[i-1][j] === '.';
          const noLeft = board[i][j-1] === undefined || board[i][j-1] === '.';
          if (noUp && noLeft) r++;
        }
      }
    }
    return r;
  };
  
  countBattleships([["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]])