class TopologicalSorting {
    constructor (n) {
      this.n = n;
      this.map = {};
      this.valid = true;
      // map[A] = [B, C, D] means from point A, you can go to B, C, D. 
    }
  
    addEdge (path) {
      // console.log(path)
      if (this.map[path[1]]) {
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
      // console.log(this.map)
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
  /**
   * @param {string[]} words
   * @return {string}
   */
  var alienOrder = function(words) {
  
    let n = 0;
    const dict = {};
    const o = new TopologicalSorting(words.length);
  
    for (let i in words) {
      for (let j = 0; j<= words[i].length-1; j++) {
        const c = words[i][j];
        if (!dict[c]) {
          dict[c] = true;
          n++;
        }
      }
    }
  
    for (let i = 0; i <= words.length-1; i++) {
      for (let j = i+1; j <= words.length-1; j++) {
        // console.log()
        const a = words[i];
        const b = words[j];
  
        let pos = 0;
        while (pos <= a.length-1 && pos <= b.length-1 && a[pos] === b[pos]) {
          pos++;
        }
        // console.log(a,b)
        if (pos <= a.length-1 && pos <= b.length-1) {
          // console.log([a[pos], b[pos]])
          o.addEdge([a[pos], b[pos]]);
        }
      }
    }
  
    if (!o.valid) {
      return '';
    } else {
      const r = o.yield();
      // console.log(o.map)
      if (r.length < n) {
        for (let i in dict) {
          // console.log(i)
          if (r.indexOf(i) === -1) r.push(i);
        }
      }
      return r.join('');
    }
  };
  
  console.log(alienOrder(["a","b","ca","cc"]))