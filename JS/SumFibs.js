function sumFibs(n) {
  var arr = [];
  var a = 1;
  var b = 1;
  for (let i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
    arr.push(b);
  }
  return arr.filter((elem) => elem % 2 == 0).reduce((a, b) => a + b);
}

console.log(sumFibs(5)); //, 2);
console.log(sumFibs(9)); //, 44);
console.log(sumFibs(10)); //, 44);
console.log(sumFibs(11)); //, 44);
