/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

let res = Infinity;
const mem = {};
var tilingRectangle = function(n, m) {
  if (n == m) return 1;
  if (n > m) {
    let temp = n;
    n = m;
    m = temp;
  }
  dfs(n, m, new Array(n+1).fill(0), 0);
  console.log(res)
  return res;
};

const dfs = (n, m, h, cnt) => {

  if (cnt > res) return;
  let isFull = true;
  let minH = Infinity;
  let pos = null;

  for (let i = 1; i <= n; i++) {
    if (h[i] < m) isFull = false;
    if (h[i] < minH) {
      minH = h[i];
      pos = i;
    }
  }
  // console.log(h, pos, minH)
  if (isFull) {
    // console.log('full')
    res = Math.min(res, cnt);
  }
// console.log(res)
  const key = h.toString();
  if (mem[key] && mem[key] <= cnt) return;
  mem[key] = cnt;

  let end = pos;
  while (end + 1 <= n && h[end + 1] == h[pos] && (end + 1 - pos + 1 + minH) <= m) {
    end++;
  }
// console.log('pos',pos,'end',end)
  for (let j = end; j >= pos; j--) {
      let curH = j - pos + 1;
      const next = [...h];
      for (let k = pos; k <= j; k++) {
          next[k] += curH;
      }
      dfs(n, m, next, cnt + 1);
  }
} 

tilingRectangle(11,13);