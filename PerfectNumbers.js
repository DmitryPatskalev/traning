function perfectNumbers(num) {
    var newArr = []
    for (i = 1; i < num; i++) {
      if (i == getSum(getDigits(i))) {
        newArr.push(i)
      }
    }
    return newArr;
  }
  
  function getSum(arr) {
    var sum = 0
    for (elem of arr) {
      sum += elem;
    }
    return sum;
  }
  
  function getDigits(num) {
    var result = []
    for (i = 1; i < num; i++) {
      if (num % i == 0) {
        result.push(i)
      }
    }
    return result;
  }
  
  console.log(perfectNumbers(1000))