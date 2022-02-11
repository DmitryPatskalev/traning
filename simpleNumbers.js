function isPrime(num) {
    for (i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  var result = []
  for (j = 1; j < 100; j++) {
    if (isPrime(j)) {
      result.push(j)
    }
  }
  console.log(result)