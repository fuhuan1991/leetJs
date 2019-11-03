/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    arr1 = parse(version1);
    arr2 = parse(version2);
    let i = 0;
    while (i < arr1.length && i < arr2.length) {
      if (arr1[i] > arr2[i]) {
        return 1;
      } else  if (arr1[i] < arr2[i]) {
        return -1;
      }
      i++;
    }
  
    if (arr1.length > arr2.length) {
      while (i < arr1.length) {
        if (arr1[i] > 0) {
          return 1;
        }
      }
      return 0;
    } else if (arr1.length < arr2.length) {
      while (i < arr2.length) {
        if (arr2[i] > 0) {
          return 1;
        }
      }
      return 0;
    } else {
      return 0;
    }
  };
  
  function parse(str) {
    arr = str.split('.');
    for(index in arr){
      arr[index] = parseInt(arr[index]);
    }
    return arr;
  }
  
  // console.log(parse('1.01'))