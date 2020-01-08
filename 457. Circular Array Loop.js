/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    const visited = new Array(nums.length).fill(0);
    const N = nums.length;
  
    for (let i = 0; i <= N-1; ++i) {
      console.log(visited)
      if (visited[i] === 0) {
        let path = {};
        let current = i;
        let length2Cycle = true;
  
        while (!path[current]) {
          
          path[current] = true;
          console.log(path, length2Cycle)
          visited[current] = 1;
  
          let step = nums[current];
          while (step < 0) {
            step += N;
          }
          const next = (step + current)%N;
  
          if (nums[current]%N === 0) length2Cycle = false;
  
          current = next; 
        }
        path = {};
        let sameDirection = true;
        if (length2Cycle) {
          while (!path[current]) {
            
            let step = nums[current];
            while (step < 0) {
              step += N;
            }
            const next = (step + current)%N;
            // console.log(nums[current], '->', nums[next])
            if (nums[current] * nums[next] < 0) sameDirection = false;
            path[current] = true;
            current = next;
          }
        }
        if (sameDirection && length2Cycle) return true;
      }
    }
  
    return false;
  };
  console.log(circularArrayLoop([-8,-1,1,7,2]))
  