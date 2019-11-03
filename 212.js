class Trie {
  root = new Node();
  indexA = 'a'.charCodeAt(0);

  insert = function(word) {
    const len = word.length;
    let i = 0;
    let currentNode = this.root;

    while (i <= len - 1) {
      let currentChar = word[i];
      if (currentNode.hasChild(currentChar)) {
        if (i === len - 1) {
          currentNode.getChild(currentChar).setEnd();
        } else {
          currentNode = currentNode.getChild(currentChar);
        }
      } else {
        const newNode = new Node();
        currentNode.children[currentChar.charCodeAt(0) - this.indexA] = newNode;
        currentNode = newNode;
        if (i === len - 1) {
          currentNode.setEnd();
        }
      }
      i ++;
    }
  };

  search = function(word) {
    
    const len = word.length;
    let i = 0;
    let currentNode = this.root;

    while (i <= len - 1) {
      let currentChar = word[i];
      if (currentNode.hasChild(currentChar)) {
        if (i === len - 1) {
          return currentNode.getChild(currentChar).isEnd;
        } else {
          currentNode = currentNode.getChild(currentChar);
        }
      } else {
        return false;
      }
      i ++;
    }
  };

  startsWith = function(prefix) {
    const len = prefix.length;
    let i = 0;
    let currentNode = this.root;

    while (i <= len - 1) {
      let currentChar = prefix[i];
      if (currentNode.hasChild(currentChar)) {
        currentNode = currentNode.getChild(currentChar);
      } else {
        return false;
      }
      i ++;
    }
    return true;
  };
}

class Node {
  children = new Array(26).fill(null);
  indexA = 'a'.charCodeAt(0);
  isEnd = false;

  setEnd = function () {
    this.isEnd = true;
  }

  hasChild = function (char) {
    return !!this.children[char.charCodeAt(0) - this.indexA];
  }

  hasChildren = function () {
    for (let i = 0; i <= 25; i++) {
      if (this.children(i)) {
        return true;
      }
    }
    return false;
  }

  getChild = function (char) {
    return this.children[char.charCodeAt(0) - this.indexA];
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {

  if (!board.length) {
    return [];
  }

  const T = new Trie();
  words.forEach((w) => {
    T.insert(w);
  });
  
  const length = board.length;
  const height = board[0].length;
  let r = [];

  for (let i = 0; i <= length - 1; i++) {
    for (let j = 0; j <= height - 1; j++) {
      r = r.concat(dfs(i, j, board, length, height, T.root, T, ''))
    }
  }
  r = r.sort();
  return r.filter( (item, index ,arr) => arr.indexOf(item) === index )
};

function dfs(pos_i, pos_j, board, length, height, Node, Tree, forNow) {
  if (pos_i > length - 1 || pos_i < 0 || pos_j > height - 1 || pos_j < 0) {
    return [];
  }
  const target = board[pos_i][pos_j];
  const currentWord = forNow + target;

  if (target === '') {
    return [];
  }

  if (Node.hasChild(target)) {
    const nextNode = Node.getChild(target);
    // console.log(currentWord)
    const r0 = [];
    if (nextNode.isEnd && Tree.search(currentWord)) {
      // console.log('!!!!!!')
      // found one
      r0.push(currentWord);
    }
    // continue searching
    board[pos_i][pos_j] = '';
    const r1 = dfs(pos_i - 1, pos_j, board, length, height, nextNode, Tree, currentWord);
    const r2 = dfs(pos_i, pos_j + 1, board, length, height, nextNode, Tree, currentWord);
    const r3 = dfs(pos_i + 1, pos_j, board, length, height, nextNode, Tree, currentWord);
    const r4 = dfs(pos_i, pos_j - 1, board, length, height, nextNode, Tree, currentWord);
    // console.log(r2,r3,r4)
    // console.log(r1.concat(r2,r3,r4))
    board[pos_i][pos_j] = target;
    return r0.concat(r1,r2,r3,r4);
  } else {
    // search failed
    return [];
  }
}
