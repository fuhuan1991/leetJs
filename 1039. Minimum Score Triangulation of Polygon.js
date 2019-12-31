/**
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function(A) {
    const N = A.length;
    const mem = new Array(N);
    for (let i = 0; i <= N-1; i++) {
      mem[i] = new Array(N).fill(0);
    }
    
    const r = rec(0, N-1, A, mem);
    // console.log(mem)
    return r;
  };
  
  const rec = (from, to, A, mem) => {
    if (mem[from][to]) return mem[from][to];
  
    if (from + 1 === to) {
      return 0;
    } else if (from + 2 === to) {
      return A[from] * A[from+1] * A[to];
    } else {
      let minValue = Infinity;
      for (let i = from + 1; i<= to - 1; i++) {
        // const middleValue = 
        const value = rec(from, i, A, mem) + A[from] * A[i] * A[to] + rec(i, to, A, mem);
        minValue = Math.min(minValue, value);
      }
      mem[from][to] = minValue;
      return minValue;
    }
  }
  
  // console.log(minScoreTriangulation([3,7,4,5]))