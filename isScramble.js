/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    console.log(s1,s2)
    if (s1.length !== s2.length) {
      return false;
    }
  
    if (s1 === s2) {
      return true;
    }
  
    const char = new Array(26).fill(0);
    const len = s1.length;
    for (let i = 0; i <= len - 1; i++) {
      char[s1.charCodeAt(i) - 97]++;
      char[s2.charCodeAt(i) - 97]--;
    // console.log(char)
    }
    
    for (let i = 0; i <= 25; i++) {
      if(char[i] !== 0) return false;
    }
  
  
    for (let i = 1; i <= len - 1; i++) {
      // console.log(i, len - 1)
      let s11 = s1.slice(0, i);
      let s12 = s1.slice(i, len);
      let s21 = s2.slice(0, i);
      let s22 = s2.slice(i, len);
      let s23 = s2.slice(0, len - i);
      let s24 = s2.slice(len - i, len);
      // console.log(s11,s12)
      if (isScramble(s11, s21) && isScramble(s12, s22)) {
        return true;
      }
      if (isScramble(s11, s24) && isScramble(s12, s23)) {
        return true;
      }
    }
    return false;
  };
  
  
  console.log(isScramble('abcd', 'dabc'))