function count(string) {
    var arr = string.split('')
    var obj = {}
    for (var elem of arr) {
      if (obj[elem] === undefined) {
        obj[elem] = 1
      } else {
        obj[elem]++
      }
    }
    return obj;
  }
   
   
  console.log(count("aba")) //, { a: 2, b: 1 });
  console.log(count("")) //, {}); 