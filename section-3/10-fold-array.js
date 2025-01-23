const { check, runTest, skipTest } = require('../test-api/index.js');

/*
This function folds an array in the middle n number of times.

If the list has a odd length, then fold on the middle index (the middle number therefore won't change)
other wise you fold in the 'gap' between the two middle integers and so all integers are folded.

To 'fold' the numbers add them together.

For example:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]
Here we fold the 1st with the last and the second with the 4th. As it is odd in length, the middle index is not folded
*/
function foldArray(array, runs = 1) {
  if (runs === 0) return array;

  const foldedArray = [];
  const mid = Math.floor(array.length / 2);

  for (let i = 0; i < mid; i++) {
    foldedArray.push(array[i] + array[array.length - 1 - i]);
  }

  if (array.length % 2 !== 0) {
    foldedArray.push(array[mid]);
  }

  return foldArray(foldedArray, runs - 1);
}

console.log('foldArray');

runTest('folds a even length array', function () {
  check(foldArray([1, 2], 1)).isEqualTo([3]);
  check(foldArray([1, 2, 3, 10, 34, 100], 1)).isEqualTo([101, 36, 13]);
});

runTest('folds an odd length array', function () {
  check(foldArray([1, 2, 3], 1)).isEqualTo([4, 2]);
});

runTest('folds an even length array multiple times', function () {
  check(foldArray([1, 2, 3, 10, 34, 100], 2)).isEqualTo([114, 36]);
});

runTest('folds an array to a single value', function () {
  check(foldArray([1, 2, 3, 10, 34, 100], 3)).isEqualTo([150]);
});

runTest('repeated folds remain the same', function () {
  check(foldArray([1, 2, 3, 10, 34, 100], 4)).isEqualTo([150]);
});
