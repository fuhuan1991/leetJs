/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
  clips.sort((a, b) => a[0] - b[0]);
  // let cover = 0;
  const arr = [];
  
  for (let clip of clips) {
    if (arr.length === 0) {
      if (clip[0] !== 0) return -1; 
      arr.push(clip);
      // cover = clip[1];
    } else {
      const lastClip = arr[arr.length-1];
      if (clip[0] >= lastClip[0] && clip[1] <= lastClip[1]) {
        continue;
      } else if (clip[0] === lastClip[0] && clip[1] >= lastClip[1]) {
        arr.pop();
        arr.push(clip);
      } else if (clip[0] > lastClip[1]){
        return -1;
      } else {
        for (let i = 0; i <= arr.length-2; i++) {
          if (arr[i][1] >= clip[0]) {
            while(i < arr.length-1) {
              arr.pop();
              i++;
            }
            break;
          }
        }
        arr.push(clip);
      }
    }
  }
  if (arr[arr.length-1][1] < T) return -1;
  // console.log(arr);
  return arr.length;
};