function binaryInsert (arr) {
  let r = [];
  for (let i = 0; i < arr.length; i++) {

    let left = 0;
    let right = r.length;
    const current = arr[i];

    while (left < right) {
      const mid = Math.floor((left + right)/2);
      if (current < r[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    r = r.slice(0, right).concat(current, r.slice(right))
  }
  return r;
}

binaryInsert([1,2,3])