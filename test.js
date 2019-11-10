/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

  const map = new Array(numCourses).fill(0);
  for (let i = 0; i <= map.length-1; i++) {
    map[i] = new Array(numCourses).fill(false);
  }

  for (let pair of prerequisites) {
    map[pair[1]][pair[0]] = true;
  }

  // console.log(map)
  const visited = new Array(numCourses).fill('');
  for (let i = 0; i <= numCourses-1; i++) {
    if (detectCircle(i, map, visited)) return false;
  }

  return true;
};

const detectCircle = (i, map, visited) => {
  // console.log(i, visited)
  if (visited[i] === 'incomplete') return true; 
  if (visited[i] === 'completed') return false;
  visited[i] = 'incomplete';

  for (let ii = 0; ii <= map[i].length-1; ii++) {
    // console.log(map[i][ii])
    if (map[i][ii] && detectCircle(ii, map, visited)) return true;
  }

  visited[i] = 'completed';
  return false;
}

console.log(canFinish(2, [[1,0],[0,1]]))