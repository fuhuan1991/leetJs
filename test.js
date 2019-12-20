/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
  if (k === 1) {
    const r = A1(arr);
    return r > 0 ? r%(Math.pow(10,9)+7) : 0;
  } else{
    const sum = arr.reduce((p,c) => p + c, 0);
    // console.log(sum)
    if (sum >= 0) {

      let temp = 0;
      let max = arr[0];
      for (let i = 0; i <= arr.length-1; i++) {
        temp += arr[i];
        max = Math.max(max, temp);
      }
      const maxPreffix = max;

      temp = 0;
      max = arr[arr.length - 1];
      for (let i = arr.length-1; i >= 0; i--) {
        temp += arr[i];
        max = Math.max(max, temp);
      }
      const maxSuffix = max;

      return ((k - 2) * sum + maxPreffix + maxSuffix)%(Math.pow(10,9)+7);
    } else {
      let temp = 0;
      let max = arr[0];
      for (let i = 0; i <= arr.length-1; i++) {
        temp += arr[i];
        max = Math.max(max, temp);
      }
      const maxPreffix = max;

      temp = 0;
      max = arr[arr.length - 1];
      for (let i = arr.length-1; i >= 0; i--) {
        temp += arr[i];
        max = Math.max(max, temp);
      }
      const maxSuffix = max;
      const r = A1(arr);
      return Math.max(0, r, maxSuffix, maxPreffix, maxPreffix + maxSuffix)%(Math.pow(10,9)+7);
    }
  }
};

const A1 = (arr) => {
  let sum = arr[0];
  let max = sum;
  for (let i = 1; i <= arr.length-1; i++) {
    const newEle = arr[i];
    if (newEle > sum + newEle) {
      sum = newEle;
    } else {
      sum = sum + newEle;
    }
    max = Math.max(max, sum);
  }
  return max;
}

// console.log(A1([1,2,-7,4,-2,6,-4,2,5]))
console.log(kConcatenationMaxSum([-9,13,4,-16,-12,-16,3,-7,5,-16,16,8,-1,-13,15,3],6))