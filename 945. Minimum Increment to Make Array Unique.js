/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    const number = new Array(100000).fill(0);
    for (let i of A) {
        number[i]++;
    }

    // let needToMove = null;
    let moveNumber = 0;
    let ans = 0;

    for (let i = 0; i <= number.length-1; ++i) {
        ans += moveNumber;
        if (number[i] >= 2) {
            // need to be moved later
            // needToMove = i;
            moveNumber += number[i]-1;
        } else if (number[i] === 0 && moveNumber > 0) {
            moveNumber--;
            // needToMove = i;
        }
    }
    
    return ans;
};