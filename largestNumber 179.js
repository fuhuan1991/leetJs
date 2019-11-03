/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const strs = nums.map((num) => {
      return num.toString();
    });
    // console.log(strs);
    const r = strs.sort(c);
  
    if (r[0] === 0) {
      return '0';
    }
  
    return r.join('');
    // console.log(r);
  };
  
  function c(a, b) {
    const q1 = parseInt(a + b, 10);
    const q2 = parseInt(b + a, 10);
    // console.log(q1,q2,q1 > q2);
    if (q1 > q2) {
      return -1;
    } else if (q1 < q2){
      return 1;
    } else {
      return 0;
    }
  }
  console.log(largestNumber([3,30,34,5,9]));
  