/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let pointer_1, pointer_2;
    pointer_1 = head;
    const countDown = n;
  
    while (countDown > 0) {
      pointer_1 = pointer_1.next;
      countDown--;
    }
  
    pointer_2 = head;
  
    while (pointer_1.next) {
      pointer_1 = pointer_1.next;
      pointer_2 = pointer_2.next;
    }
  
    console.log(pointer_1, pointer_2)
  
  
  };
  
  // removeNthFromEnd();