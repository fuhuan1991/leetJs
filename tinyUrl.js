/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    return tinyUrlToNum(longUrl);
  };
  
  /**
   * Decodes a shortened URL to its original URL.
   *
   * @param {string} shortUrl
   * @return {string}
   */
  var decode = function(shortUrl) {
    return numToTinyUrl(shortUrl);
  };
  
  /**
   * Your functions will be called as such:
   * decode(encode(url));
   */
  
  var numToTinyUrl = function (n) {
  
    const map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let r = n;
    let str = '';
  
    while (true) {
      const reminder = r % 62;
      r = Math.floor(r/62);
      // console.log(map[reminder])
      // console.log(r,reminder)
      str = str + map[reminder];
      if (r < 62) {
        str = str + map[r];
        break;
      }
      // r = Math.floor(r/62);
    }
  
    // return str.split('').reverse().join('');
    return str;
   }
  
   var tinyUrlToNum = function (str) {
    // const map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let id = 0;
    for (let i = 0; i <= str.length-1; i++) {
      
      const currentCharCode = str.charCodeAt(i);
      // console.log(str.charAt(i),currentCharCode)
      if (97 <= currentCharCode && currentCharCode <= 122) id = id*62 + currentCharCode - 97;
      if (65 <= currentCharCode && currentCharCode <= 90) id = id*62 + currentCharCode - 65 + 26;
      if (48 <= currentCharCode && currentCharCode <= 57) id = id*62 + currentCharCode - 48 + 52;
    }
    return id;
   }
  
  // console.log(numToTinyUrl(100))
  // console.log(tinyUrlToNum('bM'))
  console.log(encode("https://leetcode.com/problems/designtinyurl"));
  // console.log(decode(encode("https://leetcode.com/problems/design-tinyurl")));