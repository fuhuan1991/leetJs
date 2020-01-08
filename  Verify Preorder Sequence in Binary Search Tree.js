/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    if (preorder.length === 0) return true;
    return check(preorder, 0, preorder.length-1);
  };
  
  const check = (arr, rootIndex, endIndex) => {
    console.log(rootIndex, endIndex)
    if (rootIndex === endIndex) {
      return true;
    } else {
      const rootVal = arr[rootIndex];
      let current = rootIndex + 1;
      let leftIndex = null;
      let rightIndex = null;
  
      while (current <= endIndex) {
        if (rightIndex === null && arr[current] > rootVal) {
          rightIndex = current;
        } else if (rightIndex !== null && arr[current] < rootVal) {
          return false;
        }
        current++;
      }
  
      if (rightIndex === null || rootIndex + 2 <= rightIndex) {
        // has root for a left branch
        leftIndex = rootIndex + 1;
      }
  
      const leftOK = leftIndex === null ? true : check(arr, leftIndex, rightIndex === null ? endIndex : rightIndex-1);
      const rightOK = rightIndex === null ? true : check(arr, rightIndex, endIndex);
      return leftOK && rightOK; 
    }
  }
  
  console.log(verifyPreorder([2,1]));
  
  