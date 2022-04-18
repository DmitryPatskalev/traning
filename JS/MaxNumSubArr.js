function largestOfFour(arr) {
  var result = [];
  for (subArr of arr) {
    result.push(Math.max.apply(null, subArr));
  }
  return result;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
