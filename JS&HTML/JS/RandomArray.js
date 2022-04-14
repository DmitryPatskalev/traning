function randoms(arr, length) {
  return first(shuffle(arr), length);
}

function first(arr, length) {
  return arr.slice(0, length);
}

function shuffle(arr) {
  var result = [];

  while (arr.length > 0) {
    var random = getRandomInt(0, arr.length - 1);
    var elem = arr.splice(random, 1)[0];
    result.push(elem);
  }

  return result;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var list = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
var resultArray = randoms(list, 6);

function getArray(num) {
  return num;
}

console.log(getArray(resultArray));

function interval() {
  var sum = 5;
  var count = setInterval(() => {
    console.log("Осталось " + sum);
    sum--;
    if (sum === 0) {
      clearInterval(count);
      console.log("TimeOut");
    }
  }, 1000);
}

console.log(interval());

function getInt(arr1, arr2) {
  var result = [];

  for (var elem of arr1) {
    if (inArray(elem, arr2)) {
      result.push(elem);
    }
  }

  return result;
}

function inArray(elem, arr) {
  return arr.indexOf(elem) !== -1;
}
console.log(getInt([1, 2, 3, 10], [2, 3, 4, 5, 7, 8, 9, 10]));
