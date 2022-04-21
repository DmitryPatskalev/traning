function isPrime(num) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function step(g, m, n) {
  var arr = [];
  for (j = m; j < n; j++) {
    if (isPrime(j) && isPrime(j + g)) {
      arr.push(j, j + g);
      break;
    }
  }
  return arr;
}
console.log(step(2, 100, 110)); //, [101, 103])
console.log(step(4, 100, 110)); //, [103, 107])
console.log(step(6, 100, 110)); //, [101, 107])
console.log(step(8, 300, 400)); //, [359, 367])
console.log(step(10, 300, 400)); //, [307, 317])
