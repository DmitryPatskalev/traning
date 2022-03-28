function amountOfPages(summary) {
    var arr = []
    for (i = 1; i <= summary; i++) {
      arr.push(i)
      var str = arr.join('')
      
      
      if(str.length == summary){
         return arr[arr.length - 1]
      }
    }
  }
   
   
  console.log(amountOfPages(5)) //, 5)
  console.log(amountOfPages(25)) //, 17)
  console.log(amountOfPages(15)) //, 12)
  console.log(amountOfPages(1095)) //, 401)        
  console.log(amountOfPages(185)) //, 97)
  console.log(amountOfPages(660)) //, 256)