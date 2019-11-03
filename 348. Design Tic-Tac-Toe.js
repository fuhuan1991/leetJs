/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.rows1 = new Array(n).fill(0);
    this.cols1 = new Array(n).fill(0);
    this.dia1 = 0;
    this.adia1 = 0;
    this.rows2 = new Array(n).fill(0);
    this.cols2 = new Array(n).fill(0);
    this.dia2 = 0;
    this.adia2 = 0;
  };
  
  /**
   * Player {player} makes a move at ({row}, {col}).
          @param row The row of the board.
          @param col The column of the board.
          @param player The player, can be either 1 or 2.
          @return The current winning condition, can be either:
                  0: No one wins.
                  1: Player 1 wins.
                  2: Player 2 wins. 
   * @param {number} row 
   * @param {number} col 
   * @param {number} player
   * @return {number}
   */
  TicTacToe.prototype.move = function(row, col, player) {
    let rows, cols;
    if (player === 1) {
      rows = this.rows1;
      cols = this.cols1;
    } else {
      rows = this.rows2;
      cols = this.cols2;
    }
    rows[row]++;
    cols[col]++;
  
    if (player === 1) {
      if (row === col) {
        this.dia1++;
      }
      if (row + col === n - 1) {
        this.adia1++;
      }
    } else {
      if (row === col) {
        this.dia2++;
      }
      if (row + col === n - 1) {
        this.adia2++;
      }
    }
    if (this.rows1[row] === n || this.col1[col] === n || this.adia1 === n || this.dia1 === n) return 1;
    if (this.rows2[row] === n || this.col2[col] === n || this.adia2 === n || this.dia2 === n) return 2;
  };
  
  /** 
   * Your TicTacToe object will be instantiated and called as such:
   * var obj = new TicTacToe(n)
   * var param_1 = obj.move(row,col,player)
   */