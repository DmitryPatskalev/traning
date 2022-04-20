function upArray(arr) {
  for (elem of arr) {
    if (elem < 0) {
      return null;
    }
  }
  var sum = 1;
  var string = arr.join("");
  var numbers = sum + +string;
  var array = ("" + numbers).split("").map(Number);
  return array;
}

console.log(upArray([2, 3, 9])); //, [2,4,0]);
console.log(upArray([4, 3, 2, 5])); //, [4,3,2,6]);
console.log(upArray([1, -9])); //, null);
