/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    const r = [];
    for (let ast of asteroids) {
      console.log(r, ast, stack)
      if (ast < 0) {
        if (stack.length === 0) {
          r.push(ast);
        } else {
          let noWinner = false;
          while (stack.length > 0) {
            if (-ast > stack[stack.length-1]) {
              // right win
              last = stack.pop();
            } else if (-ast < stack[stack.length-1]) {
              // left win
              break;
            } else {
              // no winner
              last = stack.pop();
              noWinner = true;
              break;
            }
          }
  
          if (stack.length === 0 && !noWinner) r.push(ast); 
        }
      } else {
        stack.push(ast);
      }
    }
    if (stack.length > 0) return r.concat(stack);
    return r;
  };
  
  console.log(asteroidCollision([10, 2, -5]))