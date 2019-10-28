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
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
    // console.log(parse(s, 0))
      return parse(s, 0);
  };
  
  
  function parse(s, index) {
    
    let result = null;
  
    for (let i = index; i <= s.length - 1; i++) {
      const current = s[i];
  
      if (/\,/.test(current)) {
        continue;
      } else if (/[0-9]/.test(current)) {
        const number = parseInt(s.slice(i));
        // move forward
        const numLen = number.toString().length;
        i = i + numLen - 1;
  
        if (!result) {
          const newEle = new NestedInteger();
          newEle.setInteger(number);
          result = newEle;
        } else {
          if (result.isInteger()) {
            const newResult = new NestedInteger();
            const newEle = new NestedInteger();
            newEle.setInteger(number);
            newResult.add(result);
            newResult.add(newEle);
            result = newResult;
          } else {
            const newEle = new NestedInteger();
            newEle.setInteger(number);
            result.add(newEle)
          }
        }
        
      } else if (/\]/.test(current)) {
        return result;
      }
    }
    return result;
  }
  
  