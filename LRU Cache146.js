/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.dict = {};
  this.entry = null;
  this.exit = null;
  this.len = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const targetNode = this.dict[key];
  if (!targetNode) {
    return -1;
  } else {
    this.reNew(key);
    return targetNode.value;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.dict[key]) {
    this.dict[key].value = value;
    this.reNew(key)
    return;
  }
  if (this.len === this.capacity) {
    this.pop();
  }
  const target = new Node(key, value);
  target.next = this.entry;
  if (this.entry) {
    this.entry.prev = target;
  }
  this.dict[key] = target;
  this.entry = target;
  if (this.len === 0) {
    this.exit = target;
  }
  this.len++;
};

LRUCache.prototype.reNew = function(key) {
  const entryNode = this.entry;
  const targetNode = this.dict[key];
  const prevNode = targetNode.prev;
  const nextNode = targetNode.next;

  if (entryNode === targetNode) {
    return;
  }
  if (prevNode) {
    prevNode.next = targetNode.next
  }
  if (nextNode) {
    nextNode.prev = targetNode.prev;
  }
  if (entryNode) {
    entryNode.prev = targetNode;
  }
  if (this.exit === targetNode) {
    if (prevNode) {
      this.exit = prevNode
    }
  }
  targetNode.next = entryNode;
  targetNode.prev = null;
  this.entry = targetNode;
};

LRUCache.prototype.show = function () {
  let target = this.entry;
  while(target) {
    console.log(target.value);
    target = target.next;
  }
}

LRUCache.prototype.pop = function () {
  const target = this.exit;
  const prevNode = target.prev;
  if (prevNode) {
    prevNode.next = null;
  }
  this.exit = prevNode;
  delete this.dict[target.key];
  this.len--;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  };
  key;
  value;
  prev;
  next;
}

let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

