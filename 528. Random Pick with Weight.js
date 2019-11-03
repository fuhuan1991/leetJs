/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.psum = [];
    this.tot = 0;
    for (let i of w) {
      this.tot = this.tot + i
      this.psum.push(this.tot);
    }
    // console.log(this.psum, this.tot)
  };
  
  /**
   * @return {number}
   */
  Solution.prototype.pickIndex = function() {
    const r = Math.random() * this.tot;
    // console.log(r)
    let left = 0;
    let right = this.psum.length;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (r <= this.psum[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    // console.log(right)
    return right;
  };
  
  /** 
   * Your Solution object will be instantiated and called as such:
   * var obj = new Solution(w)
   * var param_1 = obj.pickIndex()
   */
  var o = new Solution([1,2,3,4]);
  // console.log(o.pickIndex())
  const fr = [0,0,0,0];
  for (i = 0; i <= 100000; i++) {
    const ii = o.pickIndex();
    fr[ii]++;
  }
  console.log(fr)