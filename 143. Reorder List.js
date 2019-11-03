/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head) return null;
      let left = head;
      let right = head;
      while (right.next && right.next.next) {
        left = left.next;
        right = right.next.next;
      }
      const midNode = left;
      // console.log(midNode.val);
    
      let current = head;
        let stop = false;
    
      var backWard = function (node) {
        if (node.next) backWard(node.next);
          // console.log(node == midNode)
          if (stop) return;
        if (node == midNode || node == current.next) {
            node.next = null;
            stop = true;
            return;
        }
        // console.log(current.val);
        // console.log(node.val);
        const nextCurrent = current.next;
        current.next = node;
        node.next = null;
        current = nextCurrent;
        node.next = nextCurrent;
      }
      backWard(head)
    };
    
    
    