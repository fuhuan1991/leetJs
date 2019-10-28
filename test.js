/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const emails = {};
  for (let i = 0; i <= accounts.length-1; i++) {
    const a = accounts[i];
    for (let j = 1; j <= a.length-1; j++) {
      const email = a[j];
      if (emails[email]) {
        emails[email].push(i);
      } else {
        emails[email] = [i];
      }
    }
  }
  const bossList = [];
  const followerList = [];

  for (let i = 0; i <= accounts.length-1; i++) {
    bossList[i] = i;
    followerList[i] = [i];
  }

  for (let e in emails) {
    const arr = emails[e];
    const boss = bossList[arr[0]];
    for (let i = 1; i <= arr.length-1; i++) {
      if (boss === bossList[arr[i]]) continue;
      const boss2 = bossList[arr[i]];
      const follower2 = followerList[boss2];
      for (let ff of follower2) {
        bossList[ff] = boss;
      }
      followerList[boss] = followerList[boss].concat(follower2);
      followerList[boss2] = null;
    }
  }
  console.log(emails);
  console.log(bossList, followerList);
};

accountsMerge([
  ["John","johnsmith@mail.com","john_newyork@mail.com"],
  ["John","johnsmith@mail.com","john00@mail.com"],
  ["Mary","mary@mail.com"],
  ["John","johnnybravo@mail.com"],
  ["John","johnsmith@mail.com","aa"],
  ["John","aa"]])