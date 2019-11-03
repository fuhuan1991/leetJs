/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  let q = [];
  intervals.sort((a,b) => {return a[0]-b[0]});
// console.log(intervals)
  for (i in intervals) {

    if (q.length > 0 && intervals[i][0] >= q[0]) {
      // a meeting is finished when interval[i] begins,
      // which means a room is available when interval[i] begins.
      // remove the end time of that old meeting, and than insert the end time of new meeting
      // the length (number of rooms) of q stay unchanged.
      // console.log(intervals[i][0], q[0])
      q.shift();
    }

    let left = 0;
    let right = q.length;
    let current = intervals[i][1];

    while (left < right) {
      const mid = Math.floor((left + right)/2); 
      if (current <= q[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    q = q.slice(0, right).concat(current, q.slice(right));
    // console.log(q)
  }
  
return q.length;
};

minMeetingRooms([[0, 30],[5, 10],[15, 20]])