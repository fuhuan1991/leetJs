/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let A, B;
  // Make sure we always search the shorter array.
  if (nums1.length < nums2.length) {
    A = nums1;
    B = nums2;
  } else {
    A = nums2;
    B = nums1;
  }
  // Since A is guaranteed to be either shorter or of
  // the same length as B, we know it can contribute 
  // 0 or all of its values to the left half of A ∪ B.
  const leftHalfLen = Math.floor((A.length + B.length + 1)/2);
  let aMinCount = 0;
  let aMaxCount = A.length;
// console.log(A,B)
  while (aMinCount <= aMaxCount){

    const aCount = Math.floor(aMinCount + ((aMaxCount - aMinCount) / 2));
    const bCount = Math.floor(leftHalfLen - aCount);
    // console.log('aCount',aCount,'bCount',bCount)
    // x can be null if A is not contributing any values to left half.
    const x = aCount === 0? null : A[aCount-1];
    // y can be null if B is not contributing any values to left half.
    const y = bCount === 0? null: B[bCount-1];
    // xP can be null if A is contributing all of its values to left half
    const xp = aCount === A.length? null : A[aCount];
    // yP can be null if B is contributing all of its values to left half
    const yp = bCount === B.length? null : B[bCount];
// console.log(x,y,xp,yp)
    if (x !== null && yp !== null && x > yp) {
      aMaxCount = aCount - 1;
    } else if (y !== null && xp !== null && y > xp){
      aMinCount = aCount + 1;
    } else {
      // Neither x nor y lie beyond the left half. We found the right aCount.
      // We don't know how x and y compare to each other yet though.
      // If aLen + bLen is odd, the median is the greater of x and y.
      // Remember that either x or y can be null (if A or B is not contributing).
      let leftHalfEnd;
      if (x === null) {
        leftHalfEnd = y;
      } else if (y === null) {
        leftHalfEnd = x;
      } else {
        leftHalfEnd = Math.max(x, y);
      }
// console.log('leftHalfEnd',leftHalfEnd)
      if ((A.length + B.length)%2 === 1) return leftHalfEnd;

      let rightHalfStart;
      if (xp === null) {
        rightHalfStart = yp;
      } else if (yp === null) {
        rightHalfStart = xp;
      } else {
        rightHalfStart = Math.min(xp, yp);
      }
      return (leftHalfEnd + rightHalfStart) / 2;
    }
  }
};


// console.log(findMedianSortedArrays([1,3],[2]));