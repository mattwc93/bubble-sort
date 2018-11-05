describe('merge sort', function () {
  let unsortedExOne = [4, 6, 2, 3, 1, 10, 24, 54, 22];
  let sortedExOne = [1, 2, 3, 4, 6, 10, 22, 24, 54];
  let unsortedExTwo = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  let sortedExTwo = unsortedExTwo.sort();
  let spyTestArray = [3, 2, 1];

  it('handles an empty array', function () {
    expect(mergeSort([])).toEqual([]);
  });

  it('handles array with 1 element', function () {
    expect(mergeSort([2])).toEqual([2]);
    expect(mergeSort([76])).toEqual([76]);
  });

  it('sorts array with multiple elements', function () {
    expect(mergeSort(unsortedExOne)).toEqual(sortedExOne);
    expect(mergeSort(unsortedExTwo)).toEqual(sortedExTwo);
  });
});

describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([1, 2, 3, 4, 6, 10, 22, 24, 54])).toEqual([[1, 2, 3, 4], [6, 10, 22, 24, 54]]);
  })
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    expect(merge([1, 5, 6], [2, 3, 4])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 5, 6, 7, 8], [2, 3, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
