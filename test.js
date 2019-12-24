/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function(books, shelf_width) {
  const dp = [0, books[0][1]];
  const N = books.length;

  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i-1] + books[i-1][1];
    let widthOfNewLevel = books[i-1][0];
    let heightOfNewLevel = books[i-1][1];

    for (let j = i-1; j > 0; j--) {
      
      if (widthOfNewLevel + books[j-1][0] > shelf_width) break;
      widthOfNewLevel = widthOfNewLevel + books[j-1][0];
      heightOfNewLevel = Math.max(heightOfNewLevel, books[j-1][1]);
      dp[i] = Math.min(dp[i], dp[j-1] + heightOfNewLevel);
    }
    console.log(dp)
  }

  return dp[N];
};

minHeightShelves([[7,3],[8,7],[2,7],[2,5]],10);
//,