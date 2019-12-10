/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const len = s.length;
    const dp = new Array(len+1).fill(false);
    dp[0] = true;
    
    for (let i = 1; i <= len; i++) {
        for (let word of wordDict) {
            const lastIndex = i - word.length;
            if (lastIndex >= 0 && dp[lastIndex] === true) {
                const subString = s.slice(lastIndex, i);
                if (subString === word) {
                    dp[i] = true;
                }
            }
        }
    }
// console.log(dp)
    return dp[len];
};