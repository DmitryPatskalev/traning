function divisors(integer) {
  var arr = [];
  for (i = 2; i < integer; i++) {
    if (integer % i == 0) arr.push(i);
  }
  var str = arr.length !== 0 ? arr : `${integer} is prime`;
  return str;
}

console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"
