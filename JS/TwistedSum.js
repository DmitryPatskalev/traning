function twistedSum(n) {
  var sum = 0;
  for (i = 0; i <= n; i++) {
    var str = i.toString();
    if (str.length === 1) {
      sum = sum + +str;
    } else {
      var arr = str.split("");
      arr.forEach((num) => {
        sum = sum + +Number(num);
      });
    }
  }
  return sum;
}

console.log(twistedSum(3)); //, 6, "n = 3"); });
console.log(twistedSum(10)); //, 46, "n = 10"); });
console.log(twistedSum(11)); //, 48, "n = 11"); });
console.log(twistedSum(12)); //, 51, "n = 12"); });
