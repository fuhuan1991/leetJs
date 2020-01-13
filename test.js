/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  const N = stations.length;
  const dp = new Array(N+1).fill(0);
  // const st = [[0,0], ...stations];
  dp[0] = startFuel;

  for (let i = 0; i <= N-1; ++i) {
    for (let t = i+1; t >= 1; t--) {
      if (dp[t-1] >= stations[i][0]) {
        dp[t] = Math.max(dp[t], dp[t-1] + stations[i][1]);
      }
    }
  }

  for (t = 0; t <= N; t++) {
    if (dp[t] >= target) return t;
  }

  return -1;
};