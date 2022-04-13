var arr = [1, 2, 3, 4, 5];

function doSmth(arr, instruction) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(instruction(arr[i]));
  }
  return result;
}

function multiply(num) {
  return num * num;
}

function add(num) {
  return num + num;
}

console.log(doSmth(arr, multiply));
console.log(doSmth(arr, add));
