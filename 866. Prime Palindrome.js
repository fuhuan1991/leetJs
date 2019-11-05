/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function(N) {
    if (N >=8 && N <= 11) return 11;
    const minRootLen = Math.floor(N.toString().length/2) + 1;
    let root = Math.pow(10, minRootLen-1);
    console.log(root);
    console.log(makePalindrome(root));
    let p = makePalindrome(root);
    while (p < N || !isPrime(p)) {
      root++;
      p = makePalindrome(root);
    }
    console.log(root, makePalindrome(root))
    return makePalindrome(root);
  };
  
  const makePalindrome = (root) => {
    const str = root.toString();
    const revStr = str.split('').reverse().join('');
    return parseInt(str + revStr.slice(1), 10);
  }
  
  const isPrime = (N) => {
    if (N < 2) return false;
  
    const R = Math.floor(Math.sqrt(N));
    for (let d = 2; d <= R; ++d)
        if (N % d == 0) return false;
    return true;
  }
  
  primePalindrome(8);
  