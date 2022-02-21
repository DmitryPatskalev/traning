var isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

function sumPrimes(num) {
  var sum = 0;
  var newArr = [];
  for (let j = 2; j <= num; j++) {
    if (isPrime(j)) {
      newArr.push(j);
    }
  }
  for (var elem of newArr) {
    sum += elem;
  }
  return sum;
}
console.log(sumPrimes(10));
console.log(sumPrimes(977));
