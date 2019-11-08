/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  // initialize memory
  const visited = new Set();
  // initialize task queue
  const q = [{arr: board, cnt: 0}];
  while (q.length > 0) {
    // if (q.length > 8) return '!!!'
    const r = searchPossibleMoves(q.shift(), q, visited);
    console.log(r)
    if (r > -1) return r;
  }
  return -1;
};

const searchPossibleMoves = (o, q, visited) => {
  const {arr, cnt} = o;
  const key = arr.toString();
  // console.log(arr)
  // if this case has already been analyzed, no need to proceed
  if (visited.has(key)) {
    return;
  } else {
    visited.add(key);
  }

  // determine blank 0 square's position
  // and check if current state is the final state
  let zeroI, zeroJ;
  let counter = 1;
  let complete = true;
  for (i = 0; i <= arr.length-1; i++) {
    for (j = 0; j <= arr[0].length-1; j++) {
      if (arr[i][j] === 0) {
        zeroI = i;
        zeroJ = j;
      }
      if (counter === arr.length * arr[0].length) counter = 0;
      if (arr[i][j] !== counter) complete = false;
      counter++;
    }
  }

  if (complete) return cnt;

  // slide the top block
  if (zeroI > 0) {
    const newArr = deepClone(arr);
    swap(newArr, zeroI, zeroJ, zeroI-1, zeroJ);
    q.push({
      arr: newArr,
      cnt: cnt + 1
    });
  }
  // slide the bottom block
  if (zeroI < arr.length-1) {
    const newArr = deepClone(arr);
    swap(newArr, zeroI, zeroJ, zeroI+1, zeroJ);
    q.push({
      arr: newArr,
      cnt: cnt + 1
    });
  }
  // slide the block on the left
  if (zeroJ > 0) {
    const newArr = deepClone(arr);
    swap(newArr, zeroI, zeroJ, zeroI, zeroJ-1);
    q.push({
      arr: newArr,
      cnt: cnt + 1
    });
  }
  // slide the block on the right
  if (zeroJ < arr[0].length-1) {
    const newArr = deepClone(arr);
    swap(newArr, zeroI, zeroJ, zeroI, zeroJ+1);
    // console.log(111,newArr)
    q.push({
      arr: newArr,
      cnt: cnt + 1
    });
  }
  return -1;
}
/**
 * @param {number[][]} arr
 * @param {number} i1
 * @param {number} j1
 * @param {number} i2
 * @param {number} j2
 * @return {void}
 */
const swap = (arr, i1, j1, i2, j2) => {
  const temp = arr[i1][j1];
  arr[i1][j1] = arr[i2][j2];
  arr[i2][j2] = temp;
}
/**
 * @param {number[][]} arr
 * @return {number[][]}
 */
const deepClone = (arr) => {
  const r = [];
  for (let row of arr) {
    r.push([...row]);
  }
  return r;
}
console.log(slidingPuzzle([[1,2,3],[4,5,0]]))
