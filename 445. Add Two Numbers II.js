/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const a1 = [];
    const a2 = [];
    let p = l1;
  
    while (p) {
      a1.unshift(p.val);
      p = p.next;
    }
  
    p = l2;
  
    while (p) {
      a2.unshift(p.val);
      p = p.next;
    }
  
    p = 0;
    let up = 0;
    const r = [];
    while (p <= a1.length-1 && p <= a2.length-1) {
      const sum = a1[p] + a2[p] + up;
      up = Math.floor(sum/10);
      const reminder = sum%10;
      r.unshift(reminder);
      p++;
    }
    if (p === a1.length && p === a2.length) {
      // both exhuasted
      if (up) {
        r.unshift(up);
      }
    } else if (p === a1.length) {
      // a1 exhuasted
      while (p <= a2.length-1) {
        const sum = a2[p] + up;
        up = Math.floor(sum/10);
        const reminder = sum%10;
        r.unshift(reminder);
        p++;
      }
    } else if (p === a2.length) {
      // a2 exhuasted
      while (p <= a1.length-1) {
        const sum = a1[p] + up;
        up = Math.floor(sum/10);
        const reminder = sum%10;
        r.unshift(reminder);
        p++;
      }
    }
    if (up) r.unshift(up);
    console.log(a1,a2,r);
    p = 0;
    let head;
    let prev;
    while (p <= r.length - 1) {
      if (!prev) {
        head = {
          val: r[p],
          next: null,
        }
        prev = head;
      } else {
        const node = {
          val: r[p],
          next: null,
        };
        prev.next = node;
        prev = node;
      }
      p++;
    }
    return head;
  };