/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const r = [];
    let start = 0;
    let end = 0;
  
    while (end <= words.length - 1) {
      // console.log(start, end)
      let currentLen = 0;
      
      while (end <= words.length - 1 && currentLen + words[end].length <= maxWidth) {
        
        // console.log('currentLen: ', currentLen);
        currentLen = currentLen + words[end].length + 1;
        end++;
      }
      console.log(start, end-1)
      const str = generateLine(words, start, end-1, maxWidth, end === words.length)
      console.log('str: ', [str])
      r.push(str);
      start = end;
    }
    return r;
  };
  
  const generateLine = (words, start, end, maxLen, last) => {
    if (last) {
      let r = [];
      for (let i = start; i <= end; i++) {
        r.push(words[i]);
      }
    
      r = r.join(' ');
      while(r.length < maxLen) {
        // console.log(r)
        r = r + ' ';
      }
      return r;
    } else {
      if (start === end) {
        return generateLine(words, start, end, maxLen, true);
      } else {
        let wordLen = 0;
        for (let i = start; i <= end; i++) {
          // console.log(words[i])
          wordLen = wordLen + words[i].length;
        }
        const blankNum = end - start;
        const blankLen = maxLen - wordLen;
        const baseBlankLen = Math.floor(blankLen / blankNum);
        const remider = blankLen % blankNum;
        const blankArr = [];
  
        let baseBlank = '';
        let l = 0;
        while (l < baseBlankLen) {
          l++;
          baseBlank = baseBlank + ' ';
        }
  // console.log('wordLen', wordLen, 'baseBlankLen', baseBlankLen)
        for (let i = 1; i <= blankNum; i++) {
          if (i <= remider) {
            blankArr.push(baseBlank + ' ');
          } else {
            blankArr.push(baseBlank);
          }
        }
  // console.log(blankArr, blankArr.length)
        let r = '';
        for (let i = 0; i <= blankArr.length-1; i++) {
          // console.log(i)
          r = r + words[start + i] + blankArr[i];
        }
        r = r + words[end];
        return r;
      }
    }
  }
  
  // console.log([generateLine(["This", "is", "an", "example", "of", "text", "justification."], 1, 3, 16, false)]);
  fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)
  