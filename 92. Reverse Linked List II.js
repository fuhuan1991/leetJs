/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (m === n) return head;
    let left;
    let stop = false;
  
    recurrsion(head, 1);
  
    function recurrsion(node, p) {
      console.log('a', p)
      if (p === m) left = node;
  
      if (p < n) recurrsion(node.next, p+1);
      console.log('b', p)
      if (left === node || node.next === left) stop = true;
      if (!stop) {
        const t = left.val;
        left.val = node.val;
        node.val = t;
        left = left.next;
      }
    }
    return head;
  };