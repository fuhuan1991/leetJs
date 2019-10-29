/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const r = [];
    f(s, 1, [], r);
    console.log(r);
    return r.map((item) => {
      return item.join('.');
    });
  };
  
  function f (str, section, path, r) {
    if (section === 4) {
      if (str.length === 0 || (str.length > 3 || parseInt(str, 10) > 255)) return;
      if (str === '0' || parseInt(str, 10) > 0 && str[0] !== '0') r.push([...path, str]);
    } else {
      for (let i = 1; i <= 3 || i <= str.length-1; i++) {
        const subStr = str.slice(0, i);
        const restStr = str.slice(i);
        if (parseInt(subStr, 10) <= 255) {
          if (subStr === '0' || (parseInt(subStr, 10) > 0 && subStr[0] !== '0')) f(restStr, section + 1, [...path, subStr], r);
        }
      }
    }
  }
  
  restoreIpAddresses('010010')