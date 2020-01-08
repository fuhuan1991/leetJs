/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let left = 0;
  let right = sum+1;
  while (left < right) {
    const mid = Math.floor((left + right)/2);
    if (test(weights, preSum, D, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  console.log(left, right)
  return left;
};

const test = (weights, D, cap) => {
  let counter = 1;
  let sum = 0;
  for (let i = 0; i <= weights.length-1; ++i) {
    if (weights[i] > cap) return false;
    if (sum + weights[i] <= cap) {
      // use former ship
      sum += weights[i];
    } else {
      // use a new ship
      counter++;
      sum = weights[i];
    }
  }
  return counter <= D;
}
shipWithinDays([1,2,3,1,1], 4);