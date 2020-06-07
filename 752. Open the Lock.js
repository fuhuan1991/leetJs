/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const visited = new Set();
    visited.add('0000');
    const deadendSet = new Set(deadends);
    if (deadendSet.has('0000')) return -1;
    const queue = [["0000", 0]];

    while (queue.length > 0) {
        // console.log(queue)
        const node = queue.shift();
        if (node[0] === target) return node[1];
        const neighbors = getNeighbors(node[0]);
        for (let neighbor of neighbors) {
            if (visited.has(neighbor) || deadendSet.has(neighbor)) continue;
            queue.push([neighbor, node[1] + 1]);
            visited.add(neighbor);
        }
    }
    return -1;
};

var getNeighbors = function (current) {
    const result = [];
    const d0 = parseInt(current[0]);
    const d1 = parseInt(current[1]);
    const d2 = parseInt(current[2]);
    const d3 = parseInt(current[3]);
    result.push('' + plus(d0) + d1 + d2 + d3);
    result.push('' + minus(d0) + d1 + d2 + d3);
    result.push('' + d0 + plus(d1) + d2 + d3);
    result.push('' + d0 + minus(d1) + d2 + d3);
    result.push('' + d0 + d1 + plus(d2) + d3);
    result.push('' + d0 + d1 + minus(d2)+ d3);
    result.push('' + d0 + d1 + d2 + plus(d3));
    result.push('' + d0 + d1 + d2 + minus(d3));
    return result;
}

var plus = function (d) {
    return d === 9 ? 0 : d + 1;
}

var minus = function (d) {
    return d === 0 ? 9 : d - 1;
}   

