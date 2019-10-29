/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const len = Math.max(word1.length, word2.length);
    const mem = new Array(len).fill(0);
    for (let i in mem) {
      mem[i] = new Array(len).fill(0);
    }
    return helper(word1, word2, 0, 0, mem);
  };
  
  function helper(w1, w2, p1, p2, mem) {
    // console.log(p1,p2)
    if (p1 === w1.length) {
      // mem[][];
      return w2.length - p2;
    }
  
    if (p2 === w2.length) {
      return w1.length - p1;
    }
  
    if (mem[p1][p2] > 0) {
      return mem[p1][p2];
    }
  
    if (w1[p1] === w2[p2]) {
      return helper(w1, w2, p1+1, p2+1, mem);
    } else {
      // change
      const c1 = helper(w1,w2,p1+1,p2+1, mem) + 1;
      // insert
      const c2 = helper(w1,w2,p1,p2+1, mem) + 1;
      // delete
      const c3 = helper(w1,w2,p1+1,p2, mem) + 1;
  
      const r = Math.min(c1,c2,c3);
      mem[p1][p2] = r;
      return r;
    }
  }
  
  console.log(minDistance('horse','ehors'));