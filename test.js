/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */
var maxSideLength = function(mat, threshold) {

  if (typeof mat[0] === 'number') {
    for (let i = 0; i <= mat.length-1; i++) {
      if (mat[i] <= threshold) return 1;
    }
    return 0;
  }
  
  const arr = [];
  for (let i = 0; i <= mat.length-1; i++) {
    const row = mat[i];
    const prefixSum = [row[0]];
    for (let j = 1; j <= mat[0].length-1; j++) {
      prefixSum[j] = prefixSum[j-1] + row[j];
    }
    arr.push(prefixSum);
  }

  // console.log(arr)
  // console.log(gstSum(arr, 0,2,1));
  // console.log(gstSum(arr, 0,2,2));
  // console.log(gstSum(arr, 0,2,3));
  // console.log(check(arr, 2, 3));

  // binary search
  let left = 1;
  let right = Math.min(arr.length, arr[0].length);
  // console.log(left, right)
  while (left < right) {

    if (left + 1 === right) {
      if (check(arr, right, threshold)) return right;
      if (check(arr, left, threshold)) return left;
      return 0;
    }

    const mid = Math.floor((left+right)/2);
    if (check(arr, mid, threshold)) {
      left = mid;
    } else {
      right = mid;
    }
    // console.log(left, right)
  }
  // console.log(left, right)

};

const gstSum = (arr, i, j, len) => {

  if (len === 1) {
    if (j === 0) {
      return arr[i][j];
    } else {
      return arr[i][j] - arr[i][j-1];
    }
  }
  let sum = 0;
  for (let ii = i; ii <= i + len-1; ii++) {
    let start = j===0 ? 0 : arr[ii][j-1];
    sum = sum + arr[ii][j+len-1] - start;
  }
  return sum;
}

const check = (arr, len, threshold) => {
  for (let i = 0; i <= arr.length-len; i++) {
    for (let j = 0; j <= arr[0].length-len; j++) {
      if (gstSum(arr, i, j, len) <= threshold) return true;
    }
  }
  return false;
}

maxSideLength([[18,70],[61,1],[25,85],[14,40],[11,96],[97,96],[63,45]], 401845)