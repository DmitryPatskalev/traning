function isPrime(num) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function gap(g, m, n) {
  var result = [];
  var res = [];
  for (j = m; j < n; j++) {
    if (isPrime(j)) {
      result.push(j);
      var currentNum = result[0];
      for (var k = 1; k < result.length; k++) {
        if (result[k] - currentNum === g) {
          res.push(currentNum, result[k]);
          return res;
        } else {
          currentNum = result[k];
        }
      }
    }
  }
  return null;
}

console.log(gap(2, 100, 110)); //, [101, 103]);
console.log(gap(4, 100, 110)); //, [103, 107]);
console.log(gap(6, 100, 110)); //, null);
console.log(gap(8, 300, 400)); //, [359, 367]);
console.log(gap(10, 300, 400)); //, [337, 347])
