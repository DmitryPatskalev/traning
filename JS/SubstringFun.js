function nthChar(words) {
  var str = "";
  var sum = 0;
  for (var i = 0; i < words.length; i++) {
    str += words[i][0 + sum++];
  }
  return str;
}

console.log(nthChar([])); //,'');
console.log(nthChar(["yoda", "best", "has"])); //, 'yes');
console.log(nthChar(["dgua", "aibe", "vnmw", "dfda"])); //, 'yes');
