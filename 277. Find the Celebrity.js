/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

const graph = [
    [1,1],
    [1,1]
  ];
  
  const knows = (a,b) => {
    return graph[a][b] === 1? true : false;
  }
  
  /**
   * @param {function} knows()
   * @return {function}
   */
  var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
      const notCelebrity = {};
      for (let a = 0; a <= n-1; a++) {
        let m = 0;
        for (let b = 0; b <= n-1; b++) {
          if (a === b) continue;
          if (notCelebrity[a]) break;
          if (knows(b, a)) {
            notCelebrity[b] = true;
            m++;
          } else {
            break;
          }
        }
        if (m === n-1) {
          for (let i = a+1; i <= n-1; i++) {
            if (knows(a, i)) {
              notCelebrity[a] = true;
            }
          }
          if (!notCelebrity[a]) return a;
        }
      }
      return -1;
    };
  };
  
  const ff = solution(knows);
  console.log(ff(2))