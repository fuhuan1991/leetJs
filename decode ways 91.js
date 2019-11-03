/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const len = s.length;
  let temp = s;
  const strs = [];

  for (i = 0; i <= len - 1; i++) {
    if (temp[i] === '0') {
      if (temp[i - 1] !== '1' && temp[i - 1] !== '2') {
        return 0;
      } else {
        strs.push(temp.slice(0, i - 1));
        temp = temp.slice(i + 1);
        i = -1;
      }
    }
  }
  if (temp) {
    strs.push(temp);
  }

  results = strs.map((subStr, index) => {
    const l = subStr.length;
    const dp = new Array(l);

    for (i = l - 1; i >= 0; i--) {
      if (i === l - 1) {
        dp[i] = 1;
      } else if (i === l - 2) {
        const t = parseInt(subStr[i] + subStr[i+1], 10);
        // console.log(i)
        // console.log(t)
        // console.log(0 < t && t <= 26)
        if (0 < t && t <= 26) {

          dp[i] = 2;
        } else {
          dp[i] = 1;
        }
      } else{
        const t = parseInt(subStr[i] + subStr[i+1], 10);
        let B = 0;
        if (0 < t && t <= 26) {
          B = 1;
        }
        dp[i] = dp[i + 1] + B * dp[i + 2];
      }
    }
    return dp[0];
  });

  // console.log(strs)
  // console.log(results)
  const r = results.reduce((acc, current) => {
    return acc * current;
  });
  return r ? r : 1;
  // console.log(r)
};

numDecodings('611');