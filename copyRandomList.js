/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let current = head;
    const o = new Map();
    let result = null;
    let tail = null;
  
    while (current) {
  
      const counterpart = o.get(current)? o.get(current) : new Node(current.val, null, null);
  
      if (tail) {
        tail.next = counterpart;
      }
  
      if (current === head) {
        result = counterpart;
      }
  
      o.set(current, counterpart);
  
      if (current.random) {
        if (o.get(current.random)) {
          counterpart.random = o.get(current.random);
        } else {
          const randomCounterpart = new Node(current.random.val, null, null);
          counterpart.random = randomCounterpart;
          o.set(current.random, randomCounterpart);
        } 
      }
      tail = counterpart;
      current = current.next;
    }
    return result;
  };