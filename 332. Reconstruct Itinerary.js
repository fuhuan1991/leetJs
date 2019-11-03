/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const map = {};
    for (let i in tickets) {
      const pair = tickets[i];
      const from = pair[0];
      const to = pair[1];
      // console.log(pair)
      if (map[from]) {
        map[from].push(to); 
        map[from].sort(compare);
      } else {
        map[from] = [to];
      }
    }
    // console.log(map)
    const r = dfs([], map, 'JFK');
  
    return r;
  };
  
  function dfs (path, map, from) {
    // console.log(from,path,map);
    
    let more = false;
    for (let i in map) {
      if (map[i].length>0) more = true;
    }
    if (!more) return [...path, from];
    if (!map[from]) return null;
  
    const dists = [...map[from]];
    // console.log(from, dists);
    if (dists.length > 0) {
      for (let i = 0; i <= dists.length-1; i++) {
        const oldVal = [...map[from]];
        const next = dists[i];
        map[from].splice(i,1);
        const r = dfs([...path, from], map, next);
        if (r) return r;
        map[from] = oldVal;
      } 
    } else {
      return null;
    }
  }
  
  function compare (a, b) {
  // console.log(a,b)
    for (i = 0; i<= 2; i++) {
      if (a.charCodeAt(i) < b.charCodeAt(i)) {
        return -1;
      } else if (a.charCodeAt(i) > b.charCodeAt(i)) {
        return 1;
      }
    }
    return 0;
  }
  
  // console.log(compare('VBC', 'ABF'))
  console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]))