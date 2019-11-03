/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const store = {};
    const dict = {};
    let left = 0;
    let right = 0;
    let result = '';
  
    for (let i = 0; i <= t.length - 1; i++) {
      if (dict[t[i]]) {
        dict[t[i]]++;
      }else {
        dict[t[i]] = 1;
        store[t[i]] = 0;
      }
    }
  
    // console.log(store, dict);
  
    while (s[right]) {
      const current = s[right];
      // console.log('current',current)
      if (dict[current]) {
        store[current] ++;
        while (check(store, dict)) {
          const newResult = s.slice(left, right + 1);
          if (!result) {
            result = newResult;
            console.log('new result:', newResult)
          } else if (newResult.length < result.length) {
            result = newResult;
            console.log('new result:', newResult)
          }
          store[s[left]]--;
          left++;
          // console.log('contract left:', left)
        }
  
  
      }
      right++;
    }
    return result;
  }
  
  function check(store, dict) {
    for (s in store) {
      if (store[s] < dict[s]) {
        return false;
      }
    }
    return true;
  }
  minWindow('a','aa')