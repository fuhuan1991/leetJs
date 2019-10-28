/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

    let is = 0;
    let ip = 0;
  
    while (is <= s.length-1) {
      if (/[a-z\.]/.test(p[ip+1])) {
        // literal 
        if (p[ip] === s[is] || p[ip] === '.') {
          ip++;
          is++;
        } else {
          return false;
        }
      } else {
        // p[ip+1] === *
        // p[ip] == [a-z] or '.'
        if (s[is] === p[ip]) {
          //s[is] == p[ip]
          ip = ip + 2;
          const currentSCharacter = s[is];
          while(s[is] === currentSCharacter) {
            if (isMatch(s.slice(is), p.slice(ip))) return true;
            is++;
          } 
        } else if (p[ip] === '.') {
          ip = ip + 2;
          while(is <= s.length - 1) {
            if (isMatch(s.slice(is), p.slice(ip))) return true;
            is++;
          }
        } else {
          // * -> 0
          //abb
          //ac*bb
          ip = ip + 2;
        }      
      }
    }
    while (p[ip+1] === '*') {
      ip = ip + 2;
    }
  // console.log(is,ip)
    return (ip >= p.length); 
  };
  
  console.log(isMatch('a', 'ab*'));