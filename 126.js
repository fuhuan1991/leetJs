/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const dict = {};
  preProcess([...wordList, beginWord], dict);
  // console.log(dict)
  const Q = [];
  const result = [];
  const visited = {[beginWord]: 0};
  Q.push({
    start: beginWord,
    len: 0,
    path: []
  });

  while(Q.length > 0) {
    const task = Q.shift();
    const {start, len, path} = task;
    const dists = getDestination(start, dict);
    // console.log('-----------')
    // console.log('start', start)
    // console.log('visited',visited)
    // console.log('path', path)

    for( d of dists) {
      // console.log('->', d)
      if (d === endWord) {
        // console.log('an end')
        if (!visited[d]) {
          result.push(path.concat(start, endWord)); 
          visited[endWord] = len + 1;
        } else if (visited[d] > len){
          result.push(path.concat(start, endWord)); 
          visited[endWord] = len + 1;
        }
      } else if (d !== start) {
        if (!visited[d] && visited[d] !== 0) {
          // console.log('new land')
          Q.push({
            start: d,
            len: len + 1,
            path: path.concat(start)
          });
          visited[d] = len + 1;
        } else {
          if (visited[d] > len) {
            // console.log('old land')
            Q.push({
              start: d,
              len: len + 1,
              path: path.concat(start)
            });
          }
        }
      }
    }
  }
  return result;
};

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

var getConnectionState = function (word) {
  const connectionState = [];
  for(let i = 0; i <= word.length - 1; i ++) {
    const arr = word.split('');
    arr.splice(i, 1, '*');
    connectionState.push(arr.join(''))
  }
  return connectionState;
}

var getDestination = function (word, dict) {
  const connectionState = getConnectionState(word);
  let dist = [];
  connectionState.forEach((state) => {
    // console.log('state',state)
    // console.log('dict[state]',dict[state])
    dist = dist.concat(dict[state])
  });
  // console.log('getDestination',dist)
  return new Set(dist).keys();
}