/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    const pos = [0,0];
    let dir = 0;
    const dirMap = [[0, 1],[1, 0],[0, -1],[-1, 0]];
  
    for (let i = 0; i <= instructions.length-1; i++) {
      const current = instructions[i];
      if (current === 'L') {
        dir--;
        if (dir < 0) dir = dir + 4;
      } else if (current === 'R') {
        dir++;
        if (dir > 3) dir = dir - 4;
      } else {
        pos[0] = pos[0] + dirMap[dir][0];
        pos[1] = pos[1] + dirMap[dir][1];
      }
    }
    console.log(pos,dir)
    if ((pos[0] === 0 && pos[1] === 0) || (dir !== 0)) {
      return true
    } else {
      return false;
    }
  };
  
  isRobotBounded("GLRLLGLL");