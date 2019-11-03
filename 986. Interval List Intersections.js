/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let pa = 0;
    let pb = 0;
    const r = [];
    while (pa < A.length && pb < B.length) {
      const lo = Math.max(A[pa][0], B[pb][0]);
      const hi = Math.min(A[pa][1], B[pb][1]);
      if (lo <= hi) r.push([lo, hi]);
      if (A[pa][1] < B[pb][1]) {
        pa++;
      } else {
        pb++;
      }
    }
    return r;
  };