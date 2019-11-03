/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const height = triangle.length;
    dp = new Array(height);
  
    for (let i = height - 1; i >= 0; i --) {
      dp[i] = [];
      if (i === height - 1) {
        triangle[i].forEach((val, j) => {
          // console.log(j)
          dp[i][j] = val;
        });
      } else {
        triangle[i].forEach((val, j) => {
          dp[i][j] = val + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
        });
      }
    }
  
    // console.log(dp)
  
    return dp[0][0];
  };
  minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]);
  