/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const visited = {};

  const result = f(s, wordDict, visited);
  // console.log(result)
  return result;
};

function f(str, wordDict, visited) {
  // console.log('visited',visited)
  // console.log('str', str)
  if (visited[str]) {
    return visited[str];
  }
  if (str.length === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i <= wordDict.length - 1; i++) {
    const currentWord = wordDict[i];
    // console.log('->', currentWord)
    if (str.indexOf(currentWord) === 0) {
      // console.log(str)
      const subStr = str.slice(currentWord.length);
      if (subStr.length > 0) {
        const subResult = f(subStr, wordDict, visited);
        visited[subStr] = subResult;
        subResult.map((item) => {
          result.push(currentWord + ' ' + item);
        });
      } else {
        result.push(currentWord);
      }
    }
  }
  // console.log(str)
  // console.log(result)
  return result;
}

wordBreak('aaaaaaa', ["aaaa", "aa", "a"]);
