/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return select(nums, 0, nums.length - 1, nums.length - k);
  };
  
  function select(arr, left, right, k) {
    if (left === right) {
      return arr[left];
    }
    const mid = partition(arr, left, right);
    if (mid === k) {
      return arr[mid];
    } else if (mid < k){
      return select(arr, mid+1, right, k);
    } else {
      return select(arr, left, mid-1, k);
    }
  }
  
  function partition(arr, left, right) {
    // console.log(left,right)
    if (left === right) {
      return left;
    } else {
      const pivot = arr[left];
      // let index = left + 1;
      while (left < right) {
        if (arr[left + 1] <= pivot) {
          swap(arr, left, left + 1);
          left++;
        } else {
          swap(arr, left + 1, right);
          right--;
        }
      }
      // console.log(arr)
      return left;
    }
  }
  
  function swap(arr, a, b) {
    const t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
  }
  
  console.log(findKthLargest([3,2,1,5,6,4], 2));