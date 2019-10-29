/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null;
    
    let start = root;
  
    while (start) {
      if (start.left) {
        let p = start;
        
        while (p) {
          p.left.next = p.right;
          if(p.next){
            p.right.next = p.next.left;
          }
          p = p.next;
        }
  
      }
      start = start.left;
    }
    return root;
  
  };