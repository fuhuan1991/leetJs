/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    
  let temp = '';
  for (let word of wordDict) {
      temp = temp + word;
  }
  
  for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);
      if (temp.indexOf(c) === -1) return []; 
  }
  
  const dp = [[]];
  
  for (let prefixLen = 1; prefixLen <= s.length; ++prefixLen) {
      
      const prefix = s.slice(0, prefixLen);
      let list = [];
      
      for (let i = 0; i < wordDict.length; ++i) {
          const word = wordDict[i];
          if (word.length > prefix.length) continue;
          if (word === prefix.slice(-word.length) && !!dp[prefixLen - word.length]) {
              // match !! then add a word to all the lists in the intermediate result
              if (dp[prefixLen - word.length].length === 0) {
                  list.push(word);
              } else {
                  for (let l of dp[prefixLen - word.length]) {
                      list.push(l + ' ' + word);
                  }
              }
          }
          // console.log(dp)
      }
      
      if (list.length === 0) list = null;
      dp[prefixLen] = list;
  }
  const res = dp.pop();
  if (!!res) return res;
  return [];
};