/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const wordSets = {};
    for (word of arr) {
      wordSets[word] = getSet(word);
    }
  
    const subStrs = [''];
    let max = 0;
  
    for (let i = 0; i <= arr.length-1; i++) {
      const word = arr[i];
      if (wordSets[word].size === word.length) {
  
        for (let j = 0; j <= subStrs.length-1; j++) {
          const subStr = subStrs[j];
          const newSet = new Set([...getSet(subStr), ...wordSets[word]]);
          if (getSet(subStr).size + wordSets[word].size === newSet.size) {
            subStrs.push(subStr + word);
            max = Math.max(max, subStr.length + word.length);
          }
        }
      }
    }
  
    // const max = find(0, arr, new Set(), wordSets);
    // console.log(max);
    return max;
  };
  
  
  const getSet = (word) => {
    const s = new Set();
    for (i = 0; i <= word.length - 1; i++) {
      s.add(word[i]);
    }
    return s;
  }
  
  maxLength();