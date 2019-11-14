/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  const len = board[0].length;
  // initialize memory
  const visited = {};
  // initialize task queue, use a string to store current state
  // the strings start with a number which is the current number of moves
  const q = ['0|' + toStr(board)];
  while (q.length > 0) {
    const r = searchPossibleMoves(q.shift(), q, visited, len);
    // console.log(r)
    if (r > -1) return r;
  }
  return -1;
};
  
const searchPossibleMoves = (str, q, visited, len) => {
  const cnt = parseInt(str.split('|')[0], 10);
  const strBoard = str.split('|')[1];
  // if this case has already been analyzed, no need to proceed
  if (visited[strBoard] !== undefined && visited[strBoard] <= cnt) {
    return -1;
  } else {
    visited[strBoard] = cnt;
  }
  // check if current state is the target will want
  // and determine blank 0 square's position
  let zeroPos = strBoard.indexOf('0');
  let complete = true;
  for (let i = 0; i <= strBoard.length-2; i++) {
    if (strBoard[i] !== i + 1 + '') complete = false;
  }
  if (complete) return cnt;
  const newCnt = cnt + 1;
  // slide the top block
  if (zeroPos >= len) {
    const newStr = swap(strBoard, zeroPos, zeroPos - len);
    q.push(newCnt + '|' + newStr);
  }
  // slide the bottom block
  if (strBoard.length - 1 - zeroPos >= len) {
    const newStr = swap(strBoard, zeroPos, zeroPos + len);
    q.push(newCnt + '|' + newStr);
  }
  // slide the block on the left
  if (zeroPos%len > 0) {
    const newStr = swap(strBoard, zeroPos, zeroPos - 1);
    q.push(newCnt + '|' + newStr);
  }
  // slide the block on the right
  if (zeroPos%len < len-1) {
    const newStr = swap(strBoard, zeroPos, zeroPos + 1);
    q.push(newCnt + '|' + newStr);
  }
  return -1;
}

const toStr = (arr) => {
  let str = '';
  for (i = 0; i <= arr.length-1; i++) {
    for (j = 0; j <= arr[0].length-1; j++) {
      str = str + arr[i][j];
    }
  }
  return str;
}

const swap = (str, i, j) => {
  const arr = str.split('');
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join('');
}

console.log(slidingPuzzle([[1,6,3],[8,7,2],[4,0,5]]))
  