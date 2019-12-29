/**
 * @param {string[]} prices
 * @param {number} target
 * @return {string}
 */
var minimizeError = function(prices, target) {
    let newTarget = target;
    let minValue = 0;
    let maxValue = 0;
    const ceilDiffs = [];
    const floorDiffs = [];
  
    const newPrices = prices.filter(p => {
      const v = parseFloat(p, 10);
      if (Math.ceil(v) === v) {
        newTarget -= v;
        return false;
      } else {
        minValue += Math.floor(v);
        maxValue += Math.ceil(v);
        const diff = Math.ceil(v) - v;
        ceilDiffs.push(diff);
        return true;
      }
    });
    // console.log(minValue, maxValue, newPrices, ceilDiffs)
    if (newTarget < minValue || newTarget > maxValue) {
      return '-1';
    }
  
    ceilDiffs.sort((a, b) => a - b);
    // console.log(ceilDiffs)
    let number = maxValue - newTarget;
  
    while (number > 0) {
      floorDiffs.push(1 - ceilDiffs.pop()); 
      number --;
    }
  
    const r = floorDiffs.reduce((a, b) => a + b, 0) + ceilDiffs.reduce((a, b) => a + b, 0);
  
    // console.log(floorDiffs, ceilDiffs, Math.round(r * 1000)/1000)
    const str = (Math.round(r * 1000)/1000).toFixed(3).toString(); 
    return str;
  };
  // console.log(minimizeError(["7.000","2.800","4.900"], 14));
  
  