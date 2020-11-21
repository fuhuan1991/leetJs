const KMPSearch = (pat, txt) => {

  const M = pat.length;
  const N = txt.length;
  const lps = get_lps(pat, M);

  let i = 0;
  let j = 0;

  while (i < N) {
    if (pat[j] === txt[i]) {
      i++;
      j++;
    }

    if (j === M) {
      console.log(i + ' Match!');
      j = lps[j-1];
    } else if (i < N && pat[j] !== txt[i]){
      if (j === 0) {
        i++
      } else {
        j = lps[j-1];
      }
    }
  }
}

const get_lps = (pat, M) => {
  let len = 0;
  let i = 1;
  const lps = [0];

  while (i < M) {
    if (pat[i] === pat[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = len;
        i++;
      }
    }
  }
  return lps;
}

const txt = 'fuhuanjiafufufuhuanngyiweisadhfgioesgfuhuandksghflawfuhuan ';
const pat = 'fuhuan';

console.log(KMPSearch(pat, txt));


function partition (arr, i, j) {
  const original_i = i;
  let left = i + 1;
  let right = j;
  const pivot = arr[i];

  while (true) {
    while (arr[left] < pivot && left < right) left++;
    while (arr[right] > pivot && left <= right) right--;
    if (left >= right) break;
    swap(arr, left, right); 
  }
  swap(arr, original_i, right)
  return right;
}

function swap (arr, left, right) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

partition([6,2,1,4,2,2,5,5,6,7,8,8,8,2,3,9,2], 0, 15);

function insert (arr, t) {
    
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
      let mid = Math.floor((left + right)/2);
      if (t >= arr[mid]) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  arr.splice(left, 0, t);
}

function dictionarySearch (str, dic) {

  const visited = new Set();

  return search(0, str, visited, [], dic);
}

function search (index, str, visited, path, dic) {

  if (visited.has(index)) {
    return null;
  }

  for (let word of dic) {
    if (str.indexOf(word) === index) {
      path.push(word);
      if (index + word.length === str.length) return path;
      const result = search(index + word.length, str, visited, path, dic);
      if (result) {
        return result;
      } else {
        path.pop();
      }
    }
  }

  visited.add(index);
  return null;
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = {isEnd: false};
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  
  let A = word.split('');
  let node = this.root;
  
  while (A.length > 0) {
      const letter = A.shift();
      if (!!node[letter]) {
          node = node[letter];
      } else {
          const newNode = {};
          node[letter] = newNode;
          node = newNode;
      }
  }
  
  node.isEnd = true;
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  
  let A = word.split('');
  let node = this.root;
  
  while (A.length > 0) {
      // console.log(A)
      const letter = A.shift();
      if (!!node[letter]) {
          node = node[letter];
      } else {
          return false;
      }
  }
  
  return !!node.isEnd;
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let A = prefix.split('');
  let node = this.root;
  
  while (A.length > 0) {
      const letter = A.shift();
      if (!!node[letter]) {
          node = node[letter];
      } else {
          return false;
      }
  }
  
  return true;
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/