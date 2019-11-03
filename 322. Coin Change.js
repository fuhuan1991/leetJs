/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = [0];
    for (let i = 1; i <= amount; i++) {
      const solutionsForEachCoin = [];
      for (j in coins) {
        const coin = coins[j];
        if (i - coin >= 0) {
          solutionsForEachCoin.push(dp[i-coin] + 1);
        } else {
          solutionsForEachCoin.push(Infinity);
        }
      }
      dp[i] = Math.min(...solutionsForEachCoin);
    }
    console.log(dp);
    return dp[amount] === Infinity ? -1 : dp[amount];
  };
  
  coinChange([1,2,5], 11);