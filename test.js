/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  return search(nums1, nums2);
};

const median = (A) => {
  if (A.length % 2 !== 0) {
    // odd number
    return A[(A.length + 1) / 2 - 1];
  } else {
    // even number
    const indexRight = Math.floor(A.length / 2);
    return (A[indexRight] + A[indexRight - 1])/2;
  }
}

const search = (A, B) => {
  console.log(A, B)
  if (A.length === 1 || B.length === 1 || A.length === 0 || B.length === 0) {
    return median(A.concat(B).sort((a,b) => a-b));
  }
  if (A.length + B.length <= 4) {
    const C = A.concat(B).sort((a,b) => a-b);
    return median(C);
  }
  // if (A.length === 2 && B.length === 2) {
  //   return (Math.max(A[0], B[0]) + Math.min(A[1], B[1]))/2;
  // }
  const m1 = median(A);
  const m2 = median(B);

  if (m1 === m2) return m1;
  if (m1 > m2) return search(leftHalf(A), rightHalf(B));
  if (m1 < m2) return search(rightHalf(A), leftHalf(B));
}
const leftHalf = (A) => {
  if (A.length === 1) {
    return A;
  } else if (A.length%2 === 0){
    return A.slice(0, A.length/2);
  } else {
    return A.slice(0, (A.length+1)/2);
  }
}

const rightHalf = (A) => {
  if (A.length === 1) {
    return A;
  } else if (A.length%2 === 0){
    return A.slice(A.length/2);
  } else {
    return A.slice((A.length-1)/2);
  }
}

// console.log(med.ian([1,3,4]) )
// console.log(rightHalf([1]))
console.log(findMedianSortedArrays([1,2], [3,4,5,6]))