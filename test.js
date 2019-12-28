/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
  let maxOcc = 0;

  for (let len = minSize; len <= maxSize; len ++) {
    const maxOcc_with_current_len = helper(s, len, maxLetters);
    maxOcc = Math.max(maxOcc, maxOcc_with_current_len);
  }

  return maxOcc;
};

const helper = (s, len, maxLetters) => {
  const letters = {};
  let letterNum = 0;
  const strArr = {};
  let maxOcc = 0;
  
  for (let start = 0; start <= s.length - len; start++) {
    if (start === 0) {
      for (let i = start; i <= start + len - 1; i++) {
        const currentLetter = s[i];
        if (letters[currentLetter]) {
          letters[currentLetter]++;
        } else {
          letters[currentLetter] = 1;
          letterNum++;
        }
      }
    } else {

      const lastLetter = s[start-1];
      letters[lastLetter]--;
      if (letters[lastLetter] === 0) {
        letterNum--;
      }

      const newLetter = s[start + len - 1];
      if (letters[newLetter]) {
        letters[newLetter]++;
      } else {
        letters[newLetter] = 1;
        letterNum++;
      }
    }

    if (letterNum <= maxLetters) {
      const str = s.slice(start, start + len);
      if (strArr[str]) {
        strArr[str]++
      } else {
        strArr[str] = 1;
      }
      maxOcc = Math.max(maxOcc, strArr[str]); 
    }
    // console.log(strArr)
  }
  // console.log(maxOcc)
  return maxOcc;
}

// maxFreq("aababcaab", 2,3,4)