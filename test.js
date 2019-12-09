/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
  const map = {};
  let pos = 0;
  let r = 0;

  for (let i = 0; i <= keyboard.length-1; i++) {
    map[keyboard[i]] = i;
  }
  // console.log(map);
  for (let c of word) {
    const dis = Math.abs(pos - map[c]);
    r += dis;
    pos = map[c];
  }
  return r;
};