
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    // console.log(head)
    if(!head) return null;
  if (!head.next) return {val: head.val, left: null, right: null};
  if (!head.next.next) {
    const root = {
      val: head.next.val,
      left: {
        val: head.val,
        left: null,
        right: null,
      },
      right: null,
    }
    return root;
  }
  const mid = getMid(head);
    // console.log(mid.val)
  const leftChild = sortedListToBST(head);
  const rightChild = sortedListToBST(mid.next);
  const root = {
    val: mid.val,
    left: leftChild,
    right: rightChild,
  }
  return root;
  };
  
  const getMid = (head) => {
  let fast = head;
  let slow = head;
  let nodeBeforeMid = null;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    nodeBeforeMid = slow;
    slow = slow.next;
  }
  nodeBeforeMid.next = null;
  return slow;
  } 
  
  
  