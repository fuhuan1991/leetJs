/**
 * @param {number[]} nums
 * @return {number}
 */

// DP I O(N)
// var wiggleMaxLength = function (nums) {
//   if (nums.length === 0) { return 0 }
//   const up = new Array(nums.length);
//   const down = new Array(nums.length);
//   up[0] = 1;
//   down[0] = 1;

//   let r = 1;

//   for (let i = 1; i <= nums.length - 1; i++) {
//     let max = 0;
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         max = Math.max(max, down[j] + 1);
//       }
//     }

//     up[i] = max;
//     max = 0;

//     for (let j = 0; j < i; j++) {
//       if (nums[j] > nums[i]) {
//         max = Math.max(max, up[j] + 1);
//       }
//     }
//     down[i] = max;
//     r = Math.max(r, up[i], down[i]);
//   }

//   return r;
// };

// DP II

var wiggleMaxLength = function (nums) {
  if (nums.length === 0) { return 0 }
  const up = new Array(nums.length);
  const down = new Array(nums.length);
  up[0] = 1;
  down[0] = 1;

  let r = 1;

  for (let i = 1; i <= nums.length - 1; i++) {


    if(nums[i] > nums[i - 1]) {
      up[i] = down[i - 1] + 1;
      down[i] = down[i - 1];
    } else if (nums[i] < nums[i - 1]) {
      up[i] = up[i - 1];
      down[i] = up[i - 1] + 1;
    } else {
      up[i] = up[i - 1];
      down[i] = down[i - 1];
    }

    r = Math.max(r, up[i], down[i]);
  }

  return r;
};

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))