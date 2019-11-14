function binaryInsert (arr) {
  let r = [];
  for (let i = 0; i <= arr.length - 1; i++) {

    let left = 0;
    let right = r.length;
    const current = arr[i];

    while (left < right) {
      const mid = Math.floor((left + right)/2);
      if (current <= r[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    r = r.slice(0, right).concat(current, r.slice(right))
  }
}

binaryInsert([5,2,6,1])