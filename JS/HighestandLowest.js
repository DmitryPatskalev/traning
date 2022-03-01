function highAndLow(numbers) {
  var arr = numbers.split(" ");
  var max = String(Math.max.apply(null, arr));
  var min = String(Math.min.apply(null, arr));
  return max + " " + min;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")); //, "542 -214");
console.log(highAndLow("1 2 3 4 5")); //;  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); //; // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); //; // return "9 -5"
