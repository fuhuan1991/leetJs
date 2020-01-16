/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    let currentArr = [1,1,1,1,1];
    // let lastArr = null;
    let i = 1;
    const M = 1000000007;
    while (i < n) {
      const nextArr = [];
      //a
      nextArr[0] = (currentArr[1] + currentArr[2] + currentArr[4])%M;
      //e
      nextArr[1] = (currentArr[0] + currentArr[2])%M;
      //i
      nextArr[2] = (currentArr[1] + currentArr[3])%M;
      //o
      nextArr[3] = (currentArr[2])%M;
      //u
      nextArr[4] = (currentArr[2] + currentArr[3])%M;
      currentArr = nextArr;
      i++;
    }
  
    return (currentArr[0] + currentArr[1] + currentArr[2] + currentArr[3] + currentArr[4])%M;
  };