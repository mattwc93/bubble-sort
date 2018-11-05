function bubbleSort(arrayToSort, comparator) {
  let len = arrayToSort.length;
  if (len <= 1) {
    return arrayToSort;
  }

  for (let i = 0; i < len - 1; i++) {
    if (compare(arrayToSort[i], arrayToSort[i + 1], comparator) > 0) {
      arrayToSort = swap(i, i + 1, arrayToSort);
    }
  }

  return bubbleSort(arrayToSort.slice(0, -1), comparator).concat(arrayToSort[len - 1]);
}

function swap(idxOne, idxTwo, array) {
  let temp = array[idxOne];
  array[idxOne] = array[idxTwo];
  array[idxTwo] = temp;
  return array;
}

function compare(elemOne, elemTwo, comparator) {
  if (comparator) {
    return comparator(elemOne, elemTwo);
  }
  else return elemOne - elemTwo;
}