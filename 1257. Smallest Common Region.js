/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
    const rList = {};
    for (const list of regions) {
      // from smallest to largest region
      for (let i = list.length - 1; i >= 0; i--) {
        const region = list[i];
        let currentNode;
        if (rList[region]) {
          // we have seen this region
          currentNode = rList[region];
        } else {
          // new region
          currentNode = {
            name: region,
            parents: new Set()
          }
          rList[region] = currentNode;
        }
        if (i > 0) currentNode.parents.add(list[0]);
      }
    }
    console.log(rList)
    const path1 = TS(region1, rList);
    const path2 = TS(region2, rList);
    const set1 = new Set();
    for (let region of path1) {
      set1.add(region);
    }
    for (let i = path2.length-1; i>=0; i--) {
      if (set1.has(path2[i])) {
        console.log(path2[i])
        return path2[i];
      }
    }
  };
  
  const TS = (target, rList) => {
    const stark = [];
    dfs(target, rList, stark);
    console.log(stark)
    return stark;
  }
  
  const dfs = (target, rList, stark) => {
    for (let region of rList[target].parents) {
      dfs(region, rList, stark);
    }
    stark.push(target);
  }
  
  findSmallestRegion([["Earth","North America","South America"],["North America","United States","Canada"],["United States","New York","Boston"],["Canada","Ontario","Quebec"],["South America","Brazil"]], "Quebec", "New York")