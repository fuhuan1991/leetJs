/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.replace(/[!?',;.]/g, ' ');
    // console.log(paragraph);
    const wordArr = paragraph.trim().split(/ +/);
    const freq = {};
    let maxTime = 0;
    let maxWord = '';
  
    for (let word of wordArr) {
      const w = word.toLowerCase();
      if (banned.indexOf(w) === -1) {
        // not banned
        if (freq[w]) {
          freq[w]++;
        } else {
          freq[w] = 1;
        }
        if (freq[w] > maxTime) {
          maxTime = freq[w];
          maxWord = w;
        }
      }
    }
    console.log(maxWord)
    return maxWord;
  };
  
  mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'])