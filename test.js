/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const stack = [""];

  for (let i = 0; i <= s.length-1; ++i) {
    const current = s.charAt(i);

    if (current === '(') {
      stack.push('');
    } else if (97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 122) {
      stack[stack.length-1] += s.charAt(i);
    } else if (current === ')') {
      const str = stack.pop();
      stack[stack.length-1] += reverseString(str);
    }
  }
  return stack[stack.length-1];

};

function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  return joinArray; // "olleh"
}

console.log(reverseParentheses("(abcd)"))
// console.log(reverseString('abc'))