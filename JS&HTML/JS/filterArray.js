var arr = [1, 2, 3, 4, 5];
var sum = 0;
arr.forEach((elem) => (sum += elem));
console.log(sum); // 15

var arr = [1, 2, 3, 4, 5];
var result = arr.map((elem) => elem ** 2);
console.log(result); // [1,4,9,16,25]

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = arr.filter((elem) => elem % 2 == 0);
console.log(result); // [2,4,6,8]

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = arr.reduce((a, b) => a + b);
console.log(result); // 45
