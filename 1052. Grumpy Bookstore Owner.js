/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    // initialize
    let base = 0;
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) base += customers[i];
    }

    let sum = 0;
    for (let i = 0; i < X; ++i) {
        if (grumpy[i] === 1) sum += customers[i];
    }
    let max = sum;

    for (let i = 1; i <= customers.length - X; i++) {
        if (grumpy[i-1] === 1) sum = sum - customers[i-1];
        if (grumpy[i+X-1] === 1) sum = sum + customers[i+X-1];
        // console.log(i)
        // console.log(sum)
        max = Math.max(max, sum);
    }

    return max + base;
};