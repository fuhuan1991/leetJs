/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') {
      return [];
    }
    const arr = [
      null,null,
      ['a','b','c'],
      ['d','e','f'],
      ['g','h','i'],
      ['j','k','l'],
      ['m','n','o'],
      ['p','q','r','s'],
      ['t','u','v'],
      ['w','x','y','z'],
    ];
  
    let result = [''];
  
    for (let i = 0; i <= digits.length - 1; i++) {
      const index = parseInt(digits[i], 10);
      const letters = arr[index];
      const r = [];
      result.forEach((s1) => {
        letters.forEach((s2) => {
          r.push(s1 + s2)
        });
      })
      result = r;
    }
  
    return result;
  };
  
  
  console.log(letterCombinations('2222'))