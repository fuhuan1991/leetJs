/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    const leaderList = [];
    const member = {};
    const len = M.length;
    let n = len;
  
    for (let i = 0; i <= len-1; i++) {
      leaderList[i] = i;
      member[i] = [i];
    }
  // console.log(leaderList, member)
    for (i = 0; i <= len-1; i++) {
      for (j = i+1; j <= len-1; j++) {
        if (M[i][j] === 0) continue; 
        const leaderI = leaderList[i];
        const leaderJ = leaderList[j];
        // console.log(i,j,leaderI,leaderJ)
        if (leaderI === leaderJ) continue;
  
        const memberI = member[leaderI];
        const memberJ = member[leaderJ];
        n--;
        if (memberI.length < memberJ.length) {
          member[leaderJ] = [...memberJ, ...memberI];
          for (let k in memberI) {
            leaderList[memberI[k]] = leaderJ;
          }
          delete member[leaderI];
        } else {
          member[leaderI] = [...memberJ, ...memberI];
          for (let k in memberJ) {
            leaderList[memberJ[k]] = leaderI;
          }
          delete member[leaderJ];
        }
        // console.log(leaderList, member)
      }
    }
    
    return n;
  };
  
  // findCircleNum([[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,1,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,1,0,0,0,1,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]])