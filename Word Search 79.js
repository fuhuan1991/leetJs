/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

var exist = function(board, word) {
  if (!board.length) {
    return false;
  }
  const length = board.length;
  const height = board[0].length;
  for (let i = 0; i <= length - 1; i++) {
    for (let j = 0; j <= height - 1; j++) {
      if (dfs(i,j,board, length, height, word, 0)) {
        return true;
      }
    }
  }
  return false;
};

function dfs(pos_i, pos_j, board, length, height, word, wordIndex) {
  if (pos_i > length - 1 || pos_i < 0 || pos_j > height - 1 || pos_j < 0) {
    return false;
  }
  const target = board[pos_i][pos_j];
  if (target === '') {
    return false;
  }
  if (word[wordIndex] === target) {
    if (word.length - 1 === wordIndex ) {
      return true;
    } else {
      board[pos_i][pos_j] = '';
      const result = dfs(pos_i - 1, pos_j, board, length, height, word, wordIndex + 1) || 
                     dfs(pos_i, pos_j + 1, board, length, height, word, wordIndex + 1)||
                     dfs(pos_i + 1, pos_j, board, length, height, word, wordIndex + 1)||
                     dfs(pos_i, pos_j - 1, board, length, height, word, wordIndex + 1);
      board[pos_i][pos_j] = target;
      return result;
    }
  } else {
    return false;
  }
}  

exist(board, 'ABCE')