/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (p.length > s.length) return [];
    const len = p.length;
    let i = 0;
    let j = i + len - 1;
    const standard = getChars(p, 0, len-1);
    const chars = getChars(s, i, j);
    const r = [];
  
    while (j <= s.length-1) {
      // console.log(chars)
      if (check(standard, chars)) {
        r.push(i);
        // console.log(s.substring(i, j+1))
      }
      if (j + 1 === s.length) {
        break;
      } else {
        const newChar = s.charAt(j+1);
        const prevChar = s.charAt(i);
        chars[getIndex(newChar)]++;
        chars[getIndex(prevChar)]--;
        i++;
        j++;
      }
    }
      return r;
  };
  
  const getIndex = (char) => {
    return char.charCodeAt(0) - 97;
  }
  
  const getChars = (str, start, end) => {
    const arr = new Array(26).fill(0);
    for (let i = start; i <= end; i++) {
      const c = str.charAt(i);
      arr[getIndex(c)]++;
    }
    return arr;
  }
  
  const check = (A, B) => {
    for (let i = 0; i <= 25; i++) {
      if (A[i] != B[i]) return false; 
    }
    return true;
  }
  
  // console.log(getChars('abcdefgggggaaaa', 0, 14))
  findAnagrams('cbaebabacd', 'abc')