function partition(arr, left, right) {
    // console.log(left,right)
    const pivot = dist(arr[left]);
    let originalLeft = left;
    left++;
  // console.log(pivot, dist(arr[right]))
    while (true) {
      // console.log(left,right)
      while (left < right && dist(arr[left]) < pivot) {
        left++;
      }
      while (left <= right && dist(arr[right]) > pivot) {
        right--;
      }
      if (left >= right) break;
      swap(left, right, arr)
    }
    // console.log(arr, left, right)
    swap(originalLeft, right, arr);
    // console.log(arr)
    return right;
  }