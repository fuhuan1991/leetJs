/**
 * @param {number[]} A
 * @return {number}
 */
var subarrayBitwiseORs = function(A) {
  const N = A.length;
  const set = new Set();
  let lastRowSet = new Set();
  set.add(A[N-1]);
  lastRowSet.add(A[N-1]);
  
  for (let i = N-1; i >= 0; --i) {
    const newSet = new Set();
    const I = lastRowSet.values();
    let o = I.next();
    newSet.add(A[i]);
    set.add(A[i]);

    while (!o.done) {
      const newValue = o.value | A[i];
      newSet.add(newValue);
      set.add(newValue);
      o = I.next();
    }
    lastRowSet = newSet;
  }

  return set.size;
};