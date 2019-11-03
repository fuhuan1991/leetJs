/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {

    const times = new Array(26).fill(0);
    for (let i = 0; i <= s.length - 1; i++) {
      const index = s[i].charCodeAt(0) - 97;
      times[index] = times[index] + 1;
    }
  
    // console.log(times);
  
    const result = [];
    const placed = {};
  
    for (let i = 0; i <= s.length - 1; i++) {
      const current = s[i];
      times[current.charCodeAt(0) - 97]--;
      if (!placed[current]) {
  
        while (result.length > 0) {
          const target = result[result.length - 1];
          if (target.charCodeAt(0) > current.charCodeAt(0) && times[target.charCodeAt(0) - 97] > 0) {
            result.pop();
            placed[target] = false;
          } else {
            break;
          }
        }
        result.push(current);
        placed[current] = true;
      }
    }
    // console.log(result.join(''))
    return result.join('')
  };
  
  
  removeDuplicateLetters('bcabc')