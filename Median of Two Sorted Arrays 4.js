/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const A = nums1;
    const B = nums2;
    const m = A.length;
    const n = B.length;
  
    if (m > n) {
      const t = A;
      A = B;
      B = t;
    }
  
    let iMin = 0;
    let iMax = m;
    while (iMin < iMax) {
      const i = Math.floor((iMin + iMax)/2);
      const j = Math.floor((n + m + 1)/2) - i;
      if (B[j] < A[i-1]) {
        iMax = i - 1;
      } else if (B[i] < B[j-1]) {
        iMin = i + 1;
      } else {
        console.log(i,j);
        break
      }
    }
  
  };
  
  findMedianSortedArrays([1,2],[3,4])