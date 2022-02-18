function getCount(str) {
  var vowelsCount = 0;
  var strArr = str.split("");
  var arr = ["a", "e", "i", "o", "u"];
  for (i = 0; i < strArr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (strArr[i] == arr[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

console.log(getCount("abracadabra")); //, 5)
console.log(getCount("eee")); //,3)
console.log(getCount("my pyx")); //, 0)
