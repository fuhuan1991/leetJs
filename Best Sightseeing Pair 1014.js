/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let max = s(A, 0, 1);
  console.log('max', max)
  if(A.length === 2) {
    return max;
  }

  let maxValL = Math.max(A[0], A[1] + 1);
  console.log('maxValL', maxValL)

  for (let i = 2; i <= A.length - 1; i++) {
    console.log('---', A[i])
    const valR = A[i] - i;
    max = Math.max(maxValL + valR, max);
    maxValL = Math.max(maxValL, A[i] + 1);
    console.log(max, maxValL)
  }
  return max;
};

// function f(A, max, index) {
//   let m = max;
//   for (let j = 0; j <= index - 1; j++) {
//     m = Math.max(m, s(A, j, index));
//   }
//   return m;
// }

function s(A, i, j) {
  return A[i] + A[j] + i - j;
}



maxScoreSightseeingPair([7,8,8,10]);
