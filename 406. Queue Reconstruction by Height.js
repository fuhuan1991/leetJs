/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    if (people.length === 0) return [];
    const heightList = [];
  
    people.sort((a, b) => a[0] - b[0]);
    const r = [];
    // let p = 0;
    while (people.length > 0) {
      const height = people[people.length-1][0];
      const tempList = [];
      while (people.length > 0 && people[people.length-1][0] === height) {
        tempList.push(people.pop());
      }
  
      tempList.sort((a, b) => a[1] - b[1]);
      console.log('tempList', tempList);
      for (let p of tempList) {
        r.splice(p[1], 0, p);
      }
      console.log(r);
  
    }
    return r;
  };
  
  reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]])