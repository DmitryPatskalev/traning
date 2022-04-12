sum = (a, b, ...args) => {
  var result = a + b;
  for (i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};
console.log(sum(1, 2, 3, 4, 5));
