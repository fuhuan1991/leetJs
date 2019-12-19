/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  const arr = [];
  let current = head;

  while(current) {
    arr.unshift(current.val);
    current = current.next;
  }

  let base = 1;
  let result = 0;

  for (let dig of arr) {
    result = result + dig * base;
    base = base * 2;
  }

  return result;
};