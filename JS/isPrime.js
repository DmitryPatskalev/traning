function isPrime(num) {
    var arr = []
    if (num <= 1) {
      return false
    } else {
      for (i = 2; i < num; i++) {
        arr.push(i)
        if (num % i == 0) {
          return false
        }
      }
      return true
    }
  }
   
  console.log(isPrime(20))
  console.log(isPrime(17))
  console.log(isPrime(15))
  console.log(isPrime(19))
  console.log(isPrime(0))
  console.log(isPrime(5099))
  console.log(isPrime(-1))
  