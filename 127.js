/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const dict = {};
  const visited = {};
  preProcess(wordList, dict);
  // console.log('dict',dict);

  const Q = [];
  Q.push({
    start: beginWord,
    len: 0,
  });
  
  while (Q.length > 0) {
    const { start, len } = Q.shift();
    const connections = getConnectionState(start);
    if (visited[start]) {
      continue;
    }
    visited[start] = true;
    // console.log(start, connections)

    if (start === endWord) {
      console.log('end', len+1)
      return len + 1;
    }

    connections.forEach((connection) => {
      if (dict[connection]) {
        // console.log('-', connection, dict[connection])
        dict[connection].forEach((word) => {
          if (!visited[word]) {
            Q.push({
              start: word,
              len: len + 1,
            });
          }
        });
      }
    });
  }
// console.log(0)
  return 0;
};

var getConnectionState = function (word) {
  const connectionState = [];
  for(let i = 0; i <= word.length - 1; i ++) {
    const arr = word.split('');
    arr.splice(i, 1, '*');
    connectionState.push(arr.join(''))
  }
  return connectionState;
}

var preProcess = function (wordList, dict) {
  for(let i = 0; i <= wordList.length - 1; i ++) {
    const connectionState = getConnectionState(wordList[i]);
    connectionState.forEach((state) => {
      if (dict[state]) {
        dict[state].push(wordList[i]);
      } else {
        dict[state] = [wordList[i]];
      }
    });
  }
}
ladderLength('hit', 'cog', ["hot","dot","dog","lot","log", 'cog'])
