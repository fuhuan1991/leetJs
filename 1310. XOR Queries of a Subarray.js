/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let sum = 0;
    const xorSum = [];
    for (let i = 0; i<= arr.length-1; ++i) {
      sum = sum ^ arr[i];
      xorSum[i] = sum;
    }
    // console.log(xorSum)
    return queries.map((q) => {
      const start = q[0];
      const end = q[1];
      if (start === 0) {
        return xorSum[end];
      } else if (start === end) {
        return arr[start];
      } else {
        return xorSum[end] ^ xorSum[start-1];
      }
    });
  };
  