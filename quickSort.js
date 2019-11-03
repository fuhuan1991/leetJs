// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var nextPermutation = function(nums) {
//   let last = -1; // last index that the number in this position is smaller than its successor
//   for (let i = 0; i <= nums.length-2; i++) {
//     if (nums[i] < nums[i+1]) {
//       last = i;
//     }
//   }
//   if (last >= 0) {
//     findReplacememnt(nums, last);

//   } else {
//     let p = 0;
//     const len = nums.length;

//     while (p <= len - p - 1) {
//       swap(nums, p, len - p - 1);
//       p++;
//     }
//   }
// console.log(nums)
// };

// function findReplacememnt (nums, index) {
//   const origin = nums[index];
//   let min = nums[index+1];
//   let minIndex = index+1;
//   for (let i = index+1; i <= nums.length-1; i++) {
//     if (nums[i] < min && nums[i] > origin) {
//       min = nums[i];
//       minIndex = i;
//     }
//   }
//   swap(nums, index, minIndex);
// }

// function binarySort (nums, left, right) {

// }

// function swap (arr, i, j) {
//   const t = arr[i];
//   arr[i] = arr[j];
//   arr[j] = t;
// }

// nextPermutation([6,8,8,7,6,5,4]);



function quickSort (arr, left, right) {

  if (left >= right) return;
  if (left === right - 1) {
    if (arr[left] > arr[right]) swap(arr, left, right);
  }

  const pivot = arr[left];
  let i = left + 1;
  let j = right;
  while (i <= j) {
    if (arr[i] <= pivot) {
      i++;
    } else if (arr[i] > pivot) {
      swap(arr, i, j);
      j--;
    }
  }
  swap(arr, left, j);
  quickSort(arr, left, j - 1);
  quickSort(arr, j + 1, right);
  
}

function swap (arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
const arr = [7,8,2,7,9,2,6,8,3,32,7,8];
quickSort(arr,0,11);
console.log(arr)