/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function(grid) {
    const h = grid.length;
    const w = grid[0].length;
    const dpX = new Array(h).fill(0).map(() => new Array(w).fill(0));
    const dpY = new Array(h).fill(0).map(() => new Array(w).fill(0));
    let ans = 0;
    
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            dpX[y][x] = x > 0 ? (dpX[y][x - 1] + 1) * grid[y][x] : grid[y][0];
        }
    }
    for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
            dpY[y][x] = y > 0 ? (dpY[y - 1][x] + 1) * grid[y][x] : grid[0][x];
        }
    }
    
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (grid[y][x] == 1) {
                let x2 = x;
                let y2 = y;
                
                while (y2 < h && x2 < w) {
                    if (check(x, y, x2, y2)) {
                        ans = Math.max(ans, (x2 - x + 1) * (y2 - y + 1));
                    }
                    x2++;
                    y2++;
                }
            }
        }
    }
    return ans;
    
    function check(x1, y1, x2, y2) {
        return (
            (dpX[y1][x1] - dpX[y1][x2] == x1 - x2) &&
            (dpX[y2][x1] - dpX[y2][x2] == x1 - x2) &&
            (dpY[y1][x1] - dpY[y2][x1] == y1 - y2) &&
            (dpY[y1][x2] - dpY[y2][x2] == y1 - y2)
        );
    }
};