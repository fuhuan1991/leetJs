/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
    const tower = [];
    
    for (item of nestedList) {
      if (item.isInteger()) {
        dfs(item, 0, tower);
      } else {
        dfs(item, 1, tower);
      }
    }
    // console.log(tower);
    const hei = tower.length;
    let r = 0;
  
    for (let i = 0; i <= hei - 1; i++) {
      const layer = tower[i];
        if (layer) {
            const sum = layer.reduce((a, b) => a+b, 0);
            r = r + sum * (hei - i);
        }
    }
    return r;
  };
  
  var dfs = function (nestedList, level, tower) {
    if (nestedList.isInteger()) {
      const int = nestedList.getInteger();
        // console.log('int',int, level)
      if (tower[level]) {
        tower[level].push(int);
      } else {
        tower[level] = [int];
      }
    } else {
        
      const list = nestedList.getList();
        // console.log('list',list.length, level)
      // console.log(list)
      for (item of list) {
        if (item.isInteger()) {
          dfs(item, level, tower);
        } else {
          dfs(item, level + 1, tower);
        }
      }
    }
  }