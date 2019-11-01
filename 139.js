// 1
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const queue = [];
  const index = 0;
  const visited = new Array(s.length).fill(false);

  queue.push(index);

  while (queue.length > 0) {
    const start = queue.shift();
    if (!visited[start]) {
      const tempStr = s.slice(start);
      for (let i = 0; i <= wordDict.length - 1; i++) {
        const word = wordDict[i];
        if (tempStr.indexOf(word) === 0) {
          const end = start + word.length;
          if (end === s.length) {
            return true;
          }
          queue.push(end);
        }
      }
      visited[start] = true;
    }
  }
  return false;
};

// 2

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const visited = new Array(s.length).fill(false);
  return dfs(s, 0, wordDict, visited);
};

var dfs = function (s, index, wordDict, visited) {

  if (visited[index]) {
    return false;
  }
  const str = s.slice(index);
  for (let i = 0; i <= wordDict.length - 1; i++) {
    const word = wordDict[i];
    if (str.indexOf(word) === 0) {

      const restStr = str.slice(word.length);

      if (restStr.length === 0) {
        return true;
      }

      const r = dfs(s, index + word.length, wordDict, visited);

      if (r) {
        return true;
      }
    }
  }
  visited[index] = true;
  return false;
}

