/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = 1;
    let index = 0;
    const len = s.length;
  
    if (len === 0) {
      return '';
    }
      
    if (len === 1) {
      return s;
    }
  
    for(let i = 1; i <= len - 2; i++) {
      const {maxLen, maxIndex} = searchOdd(s, i); 
      // console.log(maxLen, maxIndex)
      if (maxLen > max) {
        max = maxLen;
        index = maxIndex;
      }
    }
  
    for(let i = 0; i <= len - 2; i++) {
      const {maxLen, maxIndex} = searchEven(s, i);
      if (maxLen > max) {
        max = maxLen;
        index = maxIndex;
      }
    }
    // console.log(s.slice(index, index + max));
    return s.slice(index, index + max);
  }
  
  
  function searchOdd(s, index) {
    // console.log('odd')
    let max = 1 ;
    let range = 1;
    let maxIndex = null;
  
    while (s[index - range] && s[index + range] && s[index - range] === s[index + range]) {
      max = max + 2;
      maxIndex = index - range;
      range++;
    }
    return { maxLen: max, maxIndex };
  }
  
  function searchEven(s, index) {
    // console.log('even')
    let max = 0;
    let range = 1;
    let maxIndex = null;
  
    while(s[index - range + 1] && s[index + range] && s[index - range + 1] === s[index + range]) {
      // console.log(s[index - range + 1])
      max = max + 2;
      maxIndex = index - range + 1;
      range++;
    }
    return { maxLen: max, maxIndex };
  }
  
  console.log(longestPalindrome('bb'))