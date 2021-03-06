const Alerter = (inputs, windowSize, allowedIncrease) => {
  const deque = [];
  const output = [];

  // initialize the deque:
  // The deque stores the index of every input value
  let sum = 0;
  for (let i = 0; i <= windowSize - 1; i++) {
    // set up the deque for initial window
    clearDeque(i, windowSize, deque, inputs);
    deque.push(i);
    sum += inputs[i];
  }
  // check if the biggest value in the widow is more than allowedIncrease
  const avg = sum/windowSize;
  if (inputs[deque[0]] > avg * allowedIncrease) {
    output.push(true);
  } else {
    output.push(false);
  }

  // each time the window moves right, there will be a new element pushed into 
  // the deque from right and an old element removed from left.
  // Before the new element enter the deque, every element smaller than the new one 
  // will be removed from the deque.
  // In this way, deque[0] is always this the index of the biggest input.
  for (let i = windowSize; i <= inputs.length-1; i++) {
    clearDeque(i, windowSize, deque, inputs);
    deque.push(i);
    sum = sum - inputs[i-windowSize] + inputs[i];
    // check if the biggest value in the widow is more than allowedIncrease
    const max = inputs[deque[0]];
    const avg = max/windowSize;
    if (max > avg * allowedIncrease) {
      output.push(true);
    } else {
      output.push(false);
    }
  }
  return output;
}

const clearDeque = (i, windowSize, deque, inputs) => {
  // remove the element that is out of the window's boundary.
  if (deque[0] === i-windowSize) deque.shift();
  // remove all the element that is smaller than the newcomer.
  while (inputs[deque[deque.length-1]] < inputs[i]) {
    deque.pop();
  }
}

console.log(Alerter([1,100,2,2,2], 3, 1.5));