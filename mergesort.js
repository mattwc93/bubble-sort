function split(arrayToSplit) {
  let midpoint = Math.floor(arrayToSplit.length / 2);
  let firstHalf = arrayToSplit.slice(0, midpoint);
  let secondHalf = arrayToSplit.slice(midpoint);
  return [firstHalf, secondHalf];
}

function merge(arrayOne, arrayTwo) {
  let mergedArray = [];
  while (arrayOne.length > 0 && arrayTwo.length > 0) {
    if (arrayOne[0] < arrayTwo[0]) {
      mergedArray.push(arrayOne.shift());
    } else {
      mergedArray.push(arrayTwo.shift());
    }
  }
  if (arrayOne.length > 0) {
    mergedArray.push(...arrayOne);
  } else {
    mergedArray.push(...arrayTwo);
  }
  return mergedArray;
}

