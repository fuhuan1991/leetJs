/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function(n, start) {
    let arr = ['0', '1'];
    let i = 1;
  
    while (i < n) {
      arr = arr.map(str => '0' + str).concat(arr.map(str => '1' + str).reverse());
      i++;
    }
    // console.log(arr);
    arr = arr.map(str => parseInt(str, 2));
    // console.log(arr);
    const ii = arr.indexOf(start);
    arr = arr.slice(ii).concat(arr.slice(0, ii));
    // console.log(arr);
    return arr
  };
  
  // circularPermutation(4, 4)