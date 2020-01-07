/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
  const N = arr.length;
  const maxArr = new Array(N);
  const dp = new Array(N);
  for (let i = 0; i <= N-1; ++i) {
    maxArr[i] = new Array(N).fill(0);
    dp[i] = new Array(N).fill(0);
  }
  for (let i = 0; i <= N-1; ++i) {
    for (let j = i; j <= N-1; ++j) {
      maxArr[i][j] = getMax(arr, i, j);
      if (i + 1 === j) {
        dp[i][j] = arr[i] * arr[j];
      }
    }
  }
  // console.log(dp)
  for (let i = 2; i <= N-1; ++i) {
    let left = 0;
    let right = i;
    while (right <= N-1) {
      let min  = Infinity;
      for (let k = left; k < right; ++k) {
        const v = maxArr[left][k] * maxArr[k+1][right] + dp[left][k] + dp[k+1][right];
        min = Math.min(min, v);
      }
      dp[left][right] = min;
      left++;
      right++;
    }
  }
  return dp[0][N-1];
};

const getMax = (arr, i, j) => {
  let max = -Infinity;
  for (let index = i; index <= j; index++) {
    max = Math.max(max, arr[index]);
  }
  return max;
}

console.log(mctFromLeafValues([6,2,4]));

