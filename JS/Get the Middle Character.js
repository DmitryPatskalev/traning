function getMiddle(s) {
    var arr = s.split('')
    var sum = arr.length
    for (i = 0; i < arr.length; i++) {
      if (sum % 2 != 0) {
        return arr[Math.floor(arr.length / 2)]
      } else if (sum % 2 == 0) {
        return arr[Math.floor((arr.length - 1) / 2)] + arr[Math.floor(arr.length / 2)]
      }
    }
    return sum;
  }
  