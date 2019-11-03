/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const arr = path.split('/');
  const stack = [];
  let result = '';

  // console.log(arr);
  arr.forEach((action, index) => {
    // console.log(action);
    if (action === '.' || action === '') {
      return; 
    } else if (action === '..') {
      stack.pop();
    } else {
      stack.push(action);
    }
  })
  // console.log(stack);

  if (stack.length === 0) {
    return '/';
  }

  while (stack.length > 0) {
    result = result + '/' + stack.shift();
  }
  // console.log(result)
  return result;
};


simplifyPath('/home/');
simplifyPath('/../');
simplifyPath('/home//foo/');
simplifyPath('/a/./b/../../c/');
simplifyPath('/a/../../b/../c//.//');
simplifyPath('/a//b////c/d//././/..');

