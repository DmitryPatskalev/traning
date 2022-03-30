function swap(str) {
    var result = "";
    for (var elem of str) {
      result += elem === elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase();
    }
    return result;
  }
   
  console.log(swap('HelloWorld')) //, 'hELLOwORLD');
  console.log(swap('CodeWars')) //, 'cODEwARS');