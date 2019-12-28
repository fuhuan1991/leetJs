/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
  let boxes_available = {};
  const keys_available = {};
  let final_candies = 0;

  for (let index of initialBoxes) {
    boxes_available[index] = true;
  }

  while (true) {
    // open boxes with keys and then throw away those keys;
    for (let index in keys_available) {
      // const index = keys_available[i];
      if (boxes_available[index]) {
        status[index] = 1;
        delete keys_available[index];
      }
    }
    // find out the boxes that you can open instantly
    const boxes_can_be_opened = [];
    for (let index in boxes_available) {
      // const index = boxes_available[i];
      if (status[index] === 1) {
        boxes_can_be_opened.push(index);
        delete boxes_available[index];
      }
    }
    console.log(boxes_available, keys_available, boxes_can_be_opened)

    if (boxes_can_be_opened.length === 0) break;

    for (let index of boxes_can_be_opened) {
      // open the box with a specific index
      // get candies
      final_candies += candies[index];
      // update boxes_available
      for (let i of containedBoxes[index]) {
        boxes_available[i] = true;
      }
      // keys_available
      for (let i of keys[index]) {
        keys_available[i] = true;
      }
    }
  }

  return final_candies;
};


console.log(maxCandies(
  [1,0,1,0],
  [7,5,4,100],
  [[],[],[1],[]],
  [[1,2],[3],[],[]],
  [0]))