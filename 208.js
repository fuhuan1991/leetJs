

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
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
