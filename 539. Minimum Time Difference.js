/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const mins = timePoints.map((time) => {
      const h = time.split(':')[0];
      const m = time.split(':')[1];
      return parseInt(h)*60 + parseInt(m);
    });
    // console.log(mins);
    mins.sort((a,b) => {return a-b});
    // console.log(mins);
    let minDiff = mins[0]+1440-mins[mins.length-1];
    for (let i = 0; i <= mins.length-2; i++) {
      minDiff = Math.min(minDiff, mins[i+1] - mins[i]);
    }
  
    return minDiff;
  };