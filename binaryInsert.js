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

function binaryInsert_II (arr) {
  let r = [];
  for (let i = 0; i < arr.length; i++) {

    let left = 0;
    let right = r.length-1;
    const current = arr[i];

    while (left < right) {
      const mid = Math.floor((left + right)/2);
      if (current < r[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    const index = current > r[left]? left + 1 : left
    r.splice(index, 0, current);
  }
  return r;
}

binaryInsert_II([1,2,3])