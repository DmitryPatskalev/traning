function findLongestWordLength(str) {
    var arr = str.split(' ')
    var newArr = []
    for(var elem of arr){
      newArr.push(elem.length)
      var length = Math.max.apply(null, newArr)
    }
    return length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");