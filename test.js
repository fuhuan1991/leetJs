
var minRemoveToMakeValid = function(s) {
  let counter = 0;
  let str = s;
  for (let i = 0; i <= str.length-1; i++) {
    if (str[i] === '(') {
      counter ++;
    }
    if (str[i] === ')') {
      if (counter > 0) {
        counter--;
      } else {
        str = str.slice(0, i) + '#' + str.slice(i+1);
      }
    }
  }
  counter = 0;
  // console.log(str)
  for (let i = str.length-1; i >=0; i--) {
    if (str[i] === '(') {
      if (counter > 0) {
        counter--;
      } else {
        str = str.slice(0, i) + '#' + str.slice(i+1);
      }
    }
    if (str[i] === ')') {
      counter++;
    }
  }
  // console.log(str)
  return str.replace(/#/g, '');
};

// minRemoveToMakeValid('((((sg)fa))')