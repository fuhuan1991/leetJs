/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
    const disBucket = buildBucket(workers, bikes);
    // console.log(disBucket);
    const assignedWorkers = {};
    const assignedBikes = {};
    const r = [];
    disBucket.forEach((bucket) => {
  
      for (let dis of bucket) {
        const worker = dis.w;
        const bike = dis.b;
        // console.log(dis);
        if (!assignedBikes[bike] && !assignedWorkers[worker]) {
          // console.log('assign ', dis);
          r[worker] = bike;
          assignedWorkers[worker] = true;
          assignedBikes[bike] = true;
          // console.log(assignedBikes, assignedWorkers)
        }
      }
    });
    // console.log(r)
    return r;
  };
  
  function buildBucket(workers, bikes) {
    const disBucket = [];
    for (let i = 0; i <= workers.length-1; i++) {
      for (let j = 0; j <= bikes.length-1; j++) {
        const dis = calcDistance(workers[i], bikes[j]);
        // console.log(dis)
        if (!disBucket[dis]) disBucket[dis] = [];
        disBucket[dis].push({w: i, b: j});
      }
    }
    return disBucket;
  }
  
  const calcDistance = (p1, p2) => {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
  }
  
  
  assignBikes([[0,0],[2,1]],[[1,2],[3,3]])
  