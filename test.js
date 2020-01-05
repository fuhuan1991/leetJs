/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if (!head) return null;
  if (head.next === null) return head;

  let newNode = head.next;
  let newHead = head;
  newHead.next = null;

  while (newNode) {
    let temp = newNode.next;
    newNode.next = null;
    newHead = insert(newHead, newNode);
    newNode = temp;
  }

  return newHead;
};

const insert = (head, newNode) => {
  let current = head;
  let last = null;

  while (current && newNode.val > current.val) {
    last = current;
    current = current.next;
  }

  if (last) {
    last.next = newNode;
    newNode.next = current;
    return head;
  } else {
    newNode.next = head;
    return newNode;
  }
}