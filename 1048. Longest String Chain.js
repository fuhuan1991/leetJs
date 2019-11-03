/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {

    if (words.length === 0) return 0; 
  
    const map = {};
    const lenArr = [[]];
    let max = 0;
  
    for (i in words) {
      const word = words[i];
      map[word] = 1;
      const len = word.length;
      if (lenArr[len]) {
        lenArr[len].push(word);
      } else {
        lenArr[len] = [word];
      }
    }
    console.log(map, lenArr)
    for (let i = 2; i <= lenArr.length-1; i++) {
      const subArr = lenArr[i];
      const formerArr = lenArr[i-1];
      if (subArr && formerArr) {
        for (let i in subArr) {
          const word = subArr[i];
          const val = checkWord(word, map);
          max = Math.max(max, val);
        }
      }
    }
    console.log(map, max)
    return max;
  };
  
  function checkWord(word, map) {
    let val = 1;
    for (let i = 0; i <= word.length-1; i++) {
      const formerWord = word.slice(0, i).concat(word.slice(i + 1));
      // console.log(i,formerWord)
      if (map[formerWord]) {
        val = Math.max(val, map[formerWord] + 1);
      }
    }
    map[word] = val;
    return val;
  }
  
  longestStrChain(["a","b","ba","bca","bda","bdca"])