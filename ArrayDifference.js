getDiffer = (arr1, arr2) => {
    var diff1 = getFirsDiff(arr1, arr2)
    var diff2 = getFirsDiff(arr2, arr1)
    return [].concat(diff1, diff2)
  }
  
  getFirsDiff = (arr1, arr2) => {
    var result = []
    for (elem of arr1) {
      if (!inArray(elem, arr2)) {
        result.push(elem)
      }
    }
    return result
  }
  
  inArray = (elem, arr) => {
    return arr.indexOf(elem) !== -1
  }
  
  console.log(getDiffer([1, 2, 3], [2, 3, 4, 5]))