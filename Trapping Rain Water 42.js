/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//   const maxL = [];
//   const maxR = [];

//   let max = 0;
//   let r = 0;

//   for (let i = 0; i < height.length; i++) {
//     maxL.push(max);
//     max = Math.max(max, height[i])
//   }

//   max = 0;

//   for (let i = height.length - 1; i >= 0; i--) {
//     maxR.unshift(max);
//     max = Math.max(max, height[i])
//   }

//   for (let i = 0; i < height.length; i++) {
//     const h = Math.min(maxL[i], maxR[i]);
//     if (h > 0 && h > height[i]){
//       r = r + h - height[i];
//     }
//   }

//   return r;
// };

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const Q = [];
  let r = 0;

  for (let i = 0; i <= height.length - 1; i ++) {
    const currentHeight = height[i];
    while (Q[0] && height[Q[0]] < currentHeight) {
      const h = Math.min(height[Q[0]], currentHeight);
      const d = i - Q[0] - 1;
      r = r + h * d;
      Q.shift();
    }
    Q.unshift(i);

  }
  return r;

}

trap([2,1,0,2])

