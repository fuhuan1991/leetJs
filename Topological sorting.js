class TopologicalSorting {
  constructor (n) {
    this.n = n;
    this.map = {};
    this.valid = true;
    // map[A] = [B, C, D] means from point A, you can go to B, C, D. 
  }

  addEdge (path) {
    console.log(path)
    if (this.map[path[0]] && this.map[path[0]].indexOf(path[1]) === -1) {
      for (let i in this.map[path[1]]) {
        if (this.map[path[1]][i] === path[0]) this.valid = false;
      }
    }

    if (this.map[path[0]]) {
      if (this.map[path[0]].indexOf(path[1]) === -1) {
        this.map[path[0]].push(path[1]);
      }
    } else {
      this.map[path[0]] = [path[1]];
    }
    console.log(this.map)
  }

  yield () {
    if (!this.valid) return [];
    const visited = {};
    const out = [];
    for (let point in this.map) {
      this.dfs(point, visited, out);
    }
    return out;
  }

  dfs (point, visited, out) {
    if (visited[point]) return;
    visited[point] = true;
    const dests = this.map[point];
    for (let i in dests) {
      this.dfs(dests[i], visited, out)
    }
    out.unshift(point);
  }
}
const o = new TopologicalSorting(8);
// const arr = [['A', 'C'], ['B', 'C'], ['B', 'D'], ['C', 'E'], ['D', 'F'], ['E', 'H'], ['E', 'F'], ['F', 'G']];
const arr = [['y', 'z'], ['z', 'y']];
for (let i in arr) {
  o.addEdge(arr[i])
}
console.log(o.yield())
