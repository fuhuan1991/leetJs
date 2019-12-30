/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
  // if (s.length + t.length === 1) {
  //   return true;
  // }
  let i = 0;
  let j = 0;
  // let edited = false;

  while (i <= s.length-1 && j <= t.length-1) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      // edited = true;
      //delete
      const r1 = secondChance(s, t, i+1, j);
      //insert
      const r2 = secondChance(s, t, i, j+1);
      //replace
      const r3 = secondChance(s, t, i+1, j+1);
      return r1 || r2 || r3;
    }
  }
  if (Math.abs(s.length-t.length) === 1) return true;
  return false;
};

const secondChance = (s, t, i, j) => {
  while (i <= s.length-1 && j <= t.length-1) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      return false;
    }
  }
  if (s.length - i === t.length - j) {
    return true;
  } else {
    return false;
  }
} 