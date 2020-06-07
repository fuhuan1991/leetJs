/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const dirs = [[-1, 0],[0, 1],[1, 0],[0, -1]];
var wallsAndGates = function(rooms) {
    const queue = [];

    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[0].length; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i, j, 0]);
            }
        }
    }
    //BFS
    while (queue.length > 0) {
        bfs(queue, rooms);
    }
};

var bfs = function (queue, rooms) {
    const node = queue.pop();
    
    for (let dir of dirs) {
        const y = node[0] + dir[0];
        const x = node[1] + dir[1];
        if (0 <= y && y < rooms.length && 0 <= x && x < rooms[0].length) {
            if (rooms[y][x] === -1 || rooms[y][x] === 0) continue;
            const dis = node[2];
            const newDis = dis + 1;
            if (rooms[y][x] > newDis) {
                rooms[y][x] = newDis;
                queue.push([y,x,newDis]);
            }
        }
    }
}