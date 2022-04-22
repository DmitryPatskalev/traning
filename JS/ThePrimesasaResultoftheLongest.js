var isPrime = (num) => {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
var getPrimeArr = (num) => {
  var result = [];
  for (j = 2; j < num; j++) {
    if (isPrime(j)) {
      result.push(j);
    }
  }
  return result;
};

var getSum = (arr) => {
  var newArr = [];
  var sum = 0;
  for (var elem of arr) {
    sum += elem;
    newArr.push(sum);
  }
  return newArr;
};
var perfectNumber = (num) => {
  var result = [];
  for (var i = 1; i < num; i++) {
    if (i == getSum(getArr(i))) {
      result.push(i);
    }
  }
  return result;
};

console.log(getPrimeArr(100));
console.log(getSum(getPrimeArr(20)));
