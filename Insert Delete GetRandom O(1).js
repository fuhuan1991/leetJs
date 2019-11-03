/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.arr = [];
    this.obj = {};
    this.emptySlot = 0;
  };
  
  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
   * @param {number} val
   * @return {boolean}
   */
  RandomizedSet.prototype.insert = function(val) {
    if (this.obj[val] || this.obj[val] === 0) {
      return false;
    } else {
      this.arr[this.emptySlot] = val;
      this.obj[val] = this.emptySlot;
      this.emptySlot++;
      return true;
    }
  };
  
  /**
   * Removes a value from the set. Returns true if the set contained the specified element. 
   * @param {number} val
   * @return {boolean}
   */
  RandomizedSet.prototype.remove = function(val) {
    if (!this.obj[val] && this.obj[val] !== 0) {
      return false;
    } else {
      // console.log(this.emptySlot)
      const index = this.obj[val];
      this.arr[index] = this.arr[this.emptySlot - 1];
      this.obj[this.arr[this.emptySlot - 1]] = index;
      this.arr[this.emptySlot - 1] = null;
      delete this.obj[val];
      this.emptySlot--;
      return true;
    }
  };
  
  /**
   * Get a random element from the set.
   * @return {number}
   */
  RandomizedSet.prototype.getRandom = function() {
    const count = this.emptySlot;
    const rand = Math.random();
    const index = Math.floor(rand * count);
    return this.arr[index];
  };
  
  
  // var obj = new RandomizedSet();
  // obj.insert(0);
  // obj.insert(1);
  // obj.remove(0);
  // // obj.insert(2);
  // // obj.remove(1);
  
  // console.log(obj.arr,obj.obj)