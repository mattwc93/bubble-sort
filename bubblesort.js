function bubbleSort(arrayToSort) {
  let len = arrayToSort.length;
  if (len <= 1) {
    return arrayToSort;
  }

  for (let i = 0; i < len - 1; i++) {
    if (compare(arrayToSort[i], arrayToSort[i + 1])) {
      arrayToSort = swap(i, i + 1, arrayToSort);
    }
  }
  return bubbleSort(arrayToSort.slice(0, -1)).concat(arrayToSort[len - 1]);
}

function swap(idxOne, idxTwo, array) {
  let temp = array[idxOne];
  array[idxOne] = array[idxTwo];
  array[idxTwo] = temp;
  return array;
}

function compare(elemOne, elemTwo) {
  return elemOne > elemTwo;
}