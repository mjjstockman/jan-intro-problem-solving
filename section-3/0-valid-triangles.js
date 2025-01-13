const { check, runTest, skipTest } = require('../test-api/index.js');

/*
This function that takes an array of triangles.
Each triangle is represented as an array e.g. [10, 12, 22] where the three numbers are the sides of the triangle.
The function should return the count of triangles that are valid.
To be a valid triangle, the sum of any two sides must be larger than the remaining side
*/
function validTriangles(triangles) {
  let numOfTriangles = 0;
  if (triangles.length === 0) {
    return 0;
  } else {
    triangles.forEach((triangle) => {
      const [a, b, c] = triangle;
      if (a + b > c && a + c > b) {
        numOfTriangles += 1;
      }
    });
  }
  return numOfTriangles;
}

runTest('returns 0 when passed no triangles []', function () {
  check(validTriangles([])).isEqualTo(0);
});

runTest('returns 0 when passed an array with no valid triangles', function () {
  check(validTriangles([[5, 10, 25]])).isEqualTo(0);
});

runTest(
  'returns 1 when passed an array with a single valid triangle',
  function () {
    check(validTriangles([[5, 4, 5]])).isEqualTo(1);
  }
);

runTest(
  'returns 2 when passed an array with 2 valid and 1 invalid triangle',
  function () {
    check(
      validTriangles([
        [5, 10, 25],
        [5, 4, 5],
        [542, 586, 419]
      ])
    ).isEqualTo(2);
  }
);
