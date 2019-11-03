/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length < 2) {
      return points.length;
    }
    
    let max = 2;
  
    for (let i = 0; i <= points.length - 1; i++) {
      let duplicate = 0;
      let maxi = 0;
      const s = {};
  
      for (let j = i + 1; j <= points.length - 1; j++) {
        const dx = points[i][0] - points[j][0];
        const dy = points[i][1] - points[j][1];
  
        if (dx === 0 && dy === 0) {
          duplicate++;
        } else {
          let key;
  
          if (dx === 0) {
            key = 'Inf';
          } else if (dy === 0) {
            key = '0';
          }else {
            const d = gcd(dx,dy);
            key = (dy/d).toString() + '/' + (dx/d).toString();
          }
    
          if (s[key]) {
            s[key]++;
          } else {
            s[key] = 1;
          }
    
          maxi = Math.max(maxi, s[key]);
        }
      }
      // console.log(s,maxi)
      max = Math.max(max, maxi + 1 + duplicate);
    }
  // console.log(max)
    return max;
  };
  
  function gcd(a, b) {
    return (b == 0) ? a : gcd(b, a % b);
  }
  
  // maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]);
  
  