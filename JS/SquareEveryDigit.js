function squareDigits(num) {
    var newArr = []
    var str = String(num)
    var arr = str.split('')
    for (var elem of arr) {
      newArr.push(elem * elem)
      var str2 = newArr.join('')
      var number = Number(str2)
    }
    return number;
  }
  
  
  console.log(squareDigits(3212)) //, 9414);
  console.log(squareDigits(2112)) //, 4114);
  console.log(squareDigits(0)) //, 0);