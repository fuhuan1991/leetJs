/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const mem = {};
    return jump(start, arr, mem);
  };
  
  const jump = (start, arr, mem) => {
    console.log(mem)
    if (start < 0 || start > arr.length - 1) return false;
    if (mem[start]) return false;
    mem[start] = true;
    if (arr[start] === 0) return true;
  
    const step = arr[start];
  
    return jump(start+step, arr, mem) || jump(start-step, arr, mem);
  }
  
  console.log(canReach([4,2,3,0,3,1,2], 5))