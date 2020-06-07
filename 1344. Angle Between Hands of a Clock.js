/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    const h = hour === 12 ? 0 : hour;
    const m = h * 60 + minutes;
    const percentage_h = m / 720;
    const percentage_m = minutes / 60;
    const smaller = Math.min(percentage_h, percentage_m);
    const bigger = Math.max(percentage_h, percentage_m);
    console.log(smaller, bigger)
    if (bigger - smaller < 0.5) {
        return 360 * (bigger - smaller);
    } else {
        return 360 * (smaller + 1 - bigger);
    }
};