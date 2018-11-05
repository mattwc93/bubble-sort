describe('Bubble Sort', function(){
  let unsortedExOne = [4, 6, 2, 3, 1, 10, 24, 54, 22];
  let sortedExOne = [1, 2, 3, 4, 6, 10, 22, 24, 54];
  let unsortedExTwo = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  let sortedExTwo = unsortedExTwo.sort();
  let spyTestArray = [3, 2, 1];

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles array with 1 element', function(){
    expect(bubbleSort([2])).toEqual([2]);
    expect(bubbleSort([76])).toEqual([76]);
  })

  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });

  it('sorts array with multiple elements', function(){
    expect(bubbleSort(unsortedExOne)).toEqual(sortedExOne);
    expect(bubbleSort(unsortedExTwo)).toEqual(sortedExTwo);
  });

  it('swaps the correct # of times', function () {
    bubbleSort(spyTestArray);
    expect(window.swap.calls.count()).toEqual(3);
  });

  it('compares the correct # of times', function () {
    bubbleSort(spyTestArray);
    expect(window.compare.calls.count()).toEqual(3);
  });

});

