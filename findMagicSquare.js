function findMagicSquare (grid) {
    if (grid.length === 0) return 0;
    const hi = grid.length;
    const len = grid[0].length;
    let max = 1;
    for (let i = 0; i <= hi-1; i++) {
      for (let j = 0; j <= len-1; j++) {
        const maxM = maxMagic(grid, i, j);
        max = Math.max(max, maxM);
      }
    } 
  
    return max;
  }
  
  function maxMagic (grid, i, j) {
  
    const hi = grid.length;
    const len = grid[0].length;
    const maxSize = Math.min(hi - i, len - j);
    // console.log(maxSize)
    let max = 1;
    for (let size = 2; size <= maxSize; size++) {
      if (isMagic(grid, i, j, size)) max = Math.max(max, size);
    }
    return max;
  }
  
  function isMagic (grid, i, j, size) {
  
    let sum = 0;
  
    for (let jj = j; jj<=j+size-1; jj++) {
      sum = sum + grid[i][jj];
    }
  // console.log(sum)
    for (let ii = i; ii <= i+size-1; ii++) {
      let sum1 = 0;
      for (let jj = j; jj<=j+size-1; jj++) {
        sum1 = sum1 + grid[ii][jj];
      }
      // console.log('sum1', sum1)
      if (sum1 !== sum) return false; 
    }
  
    for (let jj = j; jj<=j+size-1; jj++) {
      let sum2 = 0;
      for (let ii = i; ii <= i+size-1; ii++) {
        sum2 = sum2 + grid[ii][jj];
      }
      // console.log('sum2', sum2)
      if (sum2 !== sum) return false; 
    }
  
    let sum3 = 0;
    for (let d = 0; d <= size-1; d++) {
      sum3 = sum3 + grid[i+d][j+d];
      // console.log(grid[i+d][j+d])
    }
    // console.log(sum3)
    if (sum3 !== sum) return false;
  
    let sum4 = 0;
    for (let d = 0; d <= size-1; d++) {
      sum4 = sum4 + grid[i+d][j+size-1-d];
    }
    // console.log(sum4)
    if (sum4 !== sum) return false;
  
    return true;
  }
  
  function sum (arr) {
    let r = 0;
    for (let i in arr) {
      r = r + arr[i];
    }
    return r;
  }
  
  // findMagicSquare([[4,3,4,5,3],[2,7,3,8,4],[1,7,6,5,2],[8,4,9,5,5]]) 
  // console.log(isMagic([[4,3,4,5,3],[2,7,3,8,4],[1,7,6,5,2],[8,4,9,5,5]],0,0,3))
  // console.log(maxMagic([[4,3,4,5,3],[2,7,3,8,4],[1,7,6,5,2],[8,4,9,5,5]], 1, 1))
  console.log(findMagicSquare([[4,3,4,5,3],[2,7,3,8,4],[1,7,6,5,2],[8,4,9,5,5]]));
  