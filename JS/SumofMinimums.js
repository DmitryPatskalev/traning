function sumOfMinimums(arr) {
  var newArr = [];
  for (var subArr of arr) {
    for (var elem of subArr) {
      var min = Math.min.apply(null, subArr);
      newArr.push(min);
      break;
    }
    var sum = 0;
    for (elem of newArr) {
      sum += elem;
    }
  }
  return sum;
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
); //, 9));
console.log(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ])
); //, 76));
