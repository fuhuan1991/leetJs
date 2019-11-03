/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const dict = {};
    const result = [];
    strs.forEach((str) => {
      const key = f(str);
      if (dict[key]) {
        dict[key].push(str);
      } else {
        dict[key] = [str];
      }
    });
    console.log(dict)
    for (d in dict) {
      result.push(dict[d]);
    }
    console.log(result)
    return result;
  };
  
  function f(word) {
    const arr = word.split('');
    arr.sort((a,b) => {
      if (a.charCodeAt(0) > b.charCodeAt(0)) {
        return 1;
      } else {
        return -1;
      }
    })
    return arr.join('');
  }
  // console.log(f('tca'))
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])