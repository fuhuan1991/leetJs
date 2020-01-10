/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    const stack = [];
    const r = [];
    rec(head, stack, r);
  
    
    return r;
  };
  
  
  const rec = (node, stack, r) => {
    if (!node) return;
    rec(node.next, stack, r);
  
    while (stack.length > 0 && node.val >= stack[0]) {
      stack.shift();
    }
  
    if (stack.length === 0) {
      r.unshift(0);
    } else {
      r.unshift(stack[0])
    }
  
    stack.unshift(node.val);
    return;
  }