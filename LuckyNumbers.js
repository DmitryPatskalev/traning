getLuckyNumbers = () => {
    var arr = []
    for (i = 000001; i <= 999999; i++) {
      if (isLucky(i)) {
        arr.push(i)
      }
    }
    return arr;
  }
  
  isLucky = (num) => {
    var str = String(num)
    var sum1 = Number(str[0]) + Number(str[1]) + Number(str[2])
    var sum2 = Number(str[3]) + Number(str[4]) + Number(str[5])
    return sum1 == sum2
  }
  
  console.log(getLuckyNumbers())