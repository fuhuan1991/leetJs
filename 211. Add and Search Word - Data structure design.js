class Trie {
    constructor() {
      this.root = {};
    }
  
    insert(word) {
      let node = this.root;
      for (let c of word) {
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.isWord = true;
    }
  
    traverse(word) {
      let node = this.root;
      for (let c of word) {
        node = node[c];
        if (node == null) return null;
      }
      return node;
    }
  
    regTraverse(word, node) {
  
      for (let i in word) {
        const c = word[i];
        if (c === '.') {
          // console.log('node: ', node);
          let r = null;
          for (let j in node) {
            
            const nextNode = node[j];
            // console.log(i, word, word.slice(parseInt(i)+1),j , nextNode)
            const subResult = this.regTraverse(word.slice(parseInt(i)+1), nextNode);
            
            if (subResult) {
              // console.log('subResult', subResult)
              if (subResult['isWord']) return subResult;
            };
          }
          return null;
        } else {
          node = node[c];
          if (node == null) return null;
        }
      }    
      return node;
    }
  
    search(word) {
      const node = this.traverse(word);
      return node != null && node.isWord === true;
    }
  
    regSearch(word) {
      const r = this.regTraverse(word, this.root);
      // console.log(r)
      if (r && r['isWord']) return true;
      return false;
      // console.log(r)
    }
  
    startsWith(prefix) {
      return this.traverse(prefix) != null;
    }
  }
  
  /**
   * Initialize your data structure here.
   */
  var WordDictionary = function() {
    this.trie = new Trie();
  };
  
  /**
   * Adds a word into the data structure. 
   * @param {string} word
   * @return {void}
   */
  WordDictionary.prototype.addWord = function(word) {
    this.trie.insert(word);
  };
  
  /**
   * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
   * @param {string} word
   * @return {boolean}
   */
  WordDictionary.prototype.search = function(word) {
    // console.log(word)
    if (word.indexOf('.') > -1) {
      return this.trie.regSearch(word)
    } else {
      return this.trie.search(word);
    }
  };
  
  /** 
   * Your WordDictionary object will be instantiated and called as such:
   * var obj = new WordDictionary()
   * obj.addWord(word)
   * var param_2 = obj.search(word)
   */
  
  // const o = new Trie();
  // o.insert('abc')
  // o.insert('abd')
  // o.insert('awe')
  // o.insert('bhi')
  // console.log(o.regSearch('abc'), o.regSearch('abd'), o.regSearch('b..'))
  
  const o = new WordDictionary();
  o.addWord('bad');
  o.addWord('dad');
  o.addWord('mad');
  console.log(o.search('.'))