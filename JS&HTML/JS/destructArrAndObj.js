let arr = [1, 2, 3, 4, 5];
let [a, b, ...rest] = arr;
console.log(a);
console.log(b);
console.log(rest);

let x = 10;
let y = 20;
[y, x] = [x, y];
console.log(x);
console.log(y);
