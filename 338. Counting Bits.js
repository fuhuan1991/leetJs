/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let arr = [0,1];
    while (arr.length <= num) {
      const newArr = new Array(arr.length);
      for (let i = 0; i <= arr.length-1; i++) {
        newArr[i] = arr[i] + 1;
      }
      arr = [...arr, ...newArr];
    }
    return arr.slice(0, num+1);
  };