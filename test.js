/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  const dpL = [];
  const dpR = [];

  let lastDistance = null;
  for (let i = 0; i<= dominoes.length-1; i++) {
    if (dominoes[i] === 'L') {
      dpR[i] = 0;
      lastDistance = null;
    } else if (dominoes[i] === 'R'){
      dpR[i] = 0;
      lastDistance = 0;
    } else if (lastDistance !== null) {
      dpR[i] = lastDistance+1;
      lastDistance++;
    } else {
      dpR[i] = 0;
    }
  }

  lastDistance = null;
  for (let i = dominoes.length-1; i >= 0; i--) {
    if (dominoes[i] === 'L') {
      dpL[i] = 0;
      lastDistance = 0;
    } else if (dominoes[i] === 'R'){
      dpL[i] = 0;
      lastDistance = null;
    } else if (lastDistance !== null) {
      dpL[i] = lastDistance+1;
      lastDistance++;
    } else {
      dpL[i] = 0;
    }
  }
  console.log(dpR,dpL)
  const r = [];
  for (let i = 0; i <= dominoes.length-1; i++) {
    if (dpL[i] === 0 && dpR[i] === 0) {
      r[i] = dominoes[i];
    } else if (dpL[i] === 0 && dpR[i] > 0) {
      r[i] = 'R';
    } else if (dpR[i] === 0 && dpL[i] > 0) {
      r[i] = 'L';
    } else if (dpL[i] > dpR[i]) {
      r[i] = 'R';
    } else if (dpL[i] < dpR[i]) {
      r[i] = 'L';
    } else if (dpL[i] === dpR[i]) {
      r[i] = '.';
    }
  }
  return r.join('');
};

console.log(pushDominoes('.L.R...LR..L..'));