
isFriendly = (num1, num2) => {
  var sum1 = getSum(getDigit(220))
  var sum2 = getSum(getDigit(284))
  if(sum1 == num2 && sum2 == num1){
    return true;
  }
  return false;
}

getSum = (arr) => {
	var sum = 0
  for(elem of arr){
    sum += elem;
  }
  return sum;
}

getDigit = (num) => {
  var result = []
  for (i = 0; i < num; i++) {
    if (num % i == 0) {
      result.push(i)
    }
  }
  return result;
}
console.log(isFriendly(220,284))
