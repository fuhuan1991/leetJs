/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    // console.log(s)
      const times = {};
      const blackList = {};
    
      for (let i = 0; i <= s.length - 1; i++) {
        const current = s[i];
        if (times[current]) {
          times[current]++;
        } else {
          times[current] = 1;
        }
      }
    
      let clear = true;
    
      for (c in times) {
        if (times[c] < k) {
          clear = false;
          blackList[c] = true;
        }
      }
    // console.log(times, blackList, clear)
      if (clear) {
        return s.length;
      } else {
        let left = 0;
        let right = 0;
        max = 0;
    
        while (right <= s.length - 1) {
          // console.log(max)
          if (blackList[s[right]]) {
            if (left === right) {
              left++;
            } else {
              const sub = s.slice(left, right);
              if (sub.length > max) {
                const len = longestSubstring(sub, k);
                // console.group('len',len)
                max = Math.max(max, len);
              }
              left = right + 1;
            }
          } else if (right === s.length - 1) {
            if (left !== right) {
              const sub = s.slice(left);
              if (sub.length > max) {
                const len = longestSubstring(sub, k);
                // console.group('len',len)
                max = Math.max(max, len);
              }
            }
          }
          right++;
        }
        return max;
      }
    };
    
    
    console.log(longestSubstring('bbaaacbd', 3));