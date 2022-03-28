var isSquare = function (n) {
  var num = Math.sqrt(n);
  return n < 0 || Number.isInteger(num) == false ? false : true;
};

console.log(isSquare(4));
console.log(isSquare(10));
console.log(isSquare(0));
console.log(isSquare(-1));
