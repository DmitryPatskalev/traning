function maxDiff(list) {
  list.sort(function (a, b) {
    return a - b;
  });
  if (list.length <= 1) {
    return 0;
  } else {
    return Math.max.apply(null, list) - Math.min.apply(null, list);
  }
}

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6])); //, 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6])); //, 11);
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16])); //, 16);
console.log(maxDiff([16])); //, 0);
console.log(maxDiff([])); //, 0);
