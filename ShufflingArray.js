shuffle = (arr) => {
    var result = []
    while(arr.length > 0){
      var random = getRandomInt(0, arr.length - 1)
      var elem = arr.splice(random, 1)[0]
      result.push(elem)
    }
    return result;
  }
  
  
  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1))+ min;
  }
  console.log(shuffle([1,2,3,4,5]))